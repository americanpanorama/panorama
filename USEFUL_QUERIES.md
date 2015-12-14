# Useful CartoDB Queries

Some maps in the [American Panorama](http://dsl.richmond.edu/panorama/) atlas use elaborate spatial SQL queries to prepare the necessary data for the visualizations. These spatial operations are done server-side, and the results are stored as database tables which can be served to the client on demand, either as raster tiles, or as GeoJSON features.

Because these are server-side database operations, this fuctionality doesn't quite fit alongside the other client-side javascript components that make up the rest of the [Panorama Toolkit](http://github.com/americanpanorama/panorama). For this reason, we document these operations in this README file instead.

The [American Panorama](http://dsl.richmond.edu/panorama/) atlas runs on [CartoDB](http://cartodb.com), which provides a hosted version of [PostGIS](http://postgis.net/) at its core. The following SQL queries and functions are known to work on the version of PostGIS running on CartoDB, but they should also work on any other installation of PostGIS.

## Dot density maps
![screenshot](https://cloud.githubusercontent.com/assets/1212178/11771982/60c06ef2-a1cc-11e5-8578-e2f86360e31c.png)

An early prototype for the Forced Migration map used a dot density map to show the density of in-migration and out-migration by county. (In effect, we created several dot density layers and overlaid them, hence the multiple colors in the screenshot.) We decided not to pursue this approach for the final map, but we are documenting the queries we used in case they are useful to anyone else. 

Note that the CartoDB team is working on implementing a `CDB_DotDensity()` function (see pull request [cartodb-postgresql/pull/182](https://github.com/CartoDB/cartodb-postgresql/pull/182), which may be available by the time you read this)

Our dot density maps were based on funtions found here: http://trac.osgeo.org/postgis/wiki/UserWikiDotDensity and here: http://trac.osgeo.org/postgis/wiki/UserWikiDotDensity, but we made a few modifications.

First, load the dot_density function like so:

```
CREATE OR REPLACE FUNCTION RandomPoint (
                geom Geometry,
                maxiter INTEGER DEFAULT 1000
        )
        RETURNS Geometry
        AS $$
DECLARE
        i INTEGER := 0;
        x0 DOUBLE PRECISION;
        dx DOUBLE PRECISION;
        y0 DOUBLE PRECISION;
        dy DOUBLE PRECISION;
        xp DOUBLE PRECISION;
        yp DOUBLE PRECISION;
        rpoint Geometry;
BEGIN
        -- find envelope
        x0 = ST_XMin(geom);
        dx = (ST_XMax(geom) - x0);
        y0 = ST_YMin(geom);
        dy = (ST_YMax(geom) - y0);
        
        WHILE i < maxiter LOOP
                i = i + 1;
                xp = x0 + dx * random();
                yp = y0 + dy * random();
                rpoint = ST_SetSRID( ST_MakePoint( xp, yp ), ST_SRID(geom) );
                EXIT WHEN ST_Within( rpoint, geom );
        END LOOP;
        
        IF i >= maxiter THEN
                RAISE EXCEPTION 'RandomPoint: number of interations exceeded %', maxiter;
        END IF; 
        
        RETURN rpoint;
END; 
$$ LANGUAGE plpgsql;
```

Then, load the dot_density function:

```
-- Function: dot_density(text, text, text, text)

CREATE OR REPLACE FUNCTION dot_density(geom_table text, geom_col text, zone_col text, num_of_points_col text)
  RETURNS SETOF record AS 
$BODY$
DECLARE 
    counter integer:=0;
    tazrec record;
    pointrec record;
    result record;
    num_points integer:=0;
    np integer :=0; 
BEGIN

DROP SEQUENCE if exists randpnt_id;
CREATE SEQUENCE randpnt_id;

DROP TABLE IF EXISTS dp;
CREATE TABLE dp(
  gid integer PRIMARY KEY,
  ser integer,
  "zone" integer,
  decrease_or_increase integer,
  the_geom_webmercator geometry
); 

FOR tazrec IN EXECUTE 'SELECT ' || zone_col || ' as geom_col , ' || zone_col || ' as zone_col, '|| num_of_points_col || ' as num_of_points_col FROM ' || geom_table LOOP
    RAISE INFO 'Treating zone: %' , tazrec.zone_col;
    num_points = tazrec.num_of_points_col;

    IF num_points !=0 THEN 
        np := num_points/abs(num_points);
    ELSE 
        np=0;
    END IF;

    EXECUTE 'INSERT INTO dp SELECT nextval(''randpnt_id'') as gid, generate_series, '|| tazrec.zone_col ||  ', ' || np ||' , randompoint(the_geom_webmercator) FROM ' || geom_table || ', generate_series(1, '|| abs(num_points) ||') WHERE '|| zone_col || '='|| tazrec.zone_col ;
  
END LOOP;
RETURN;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
```

Then we create a new table (derived from an existing table) which is the source for generating the dots. This table should have three columns: `the_geom_mercator`, `cartodb_id`, and `numpoints`, which is the number of points to place in each geometry.

```
CREATE TABLE dot_cnt as SELECT the_geom_webmercator, cartodb_id, (population)::integer AS numpoints FROM counties_with_migrations_1850
```

Then we run the `dot_density` function:

```
SELECT dot_density('dot_cnt',
'the_geom_webmercator',
'cartodb_id',
'numpoints');
```

This SELECT statement may take a very long time to run, depending on the size of your data. The SELECT will not return any rows; instead, the function creates a new table called `dp` which contains all the generated dots. As the last step, you should rename this table to something more meaningful.

```
ALTER TABLE dp RENAME TO one_dot_per_person_1850
```



## Hexbins from choropleth data

For the Forced Migration map, we wanted to convert the county-based population data into a uniform spatial unit. This is because the county boundaries changed between each decade, making it difficult to see continuous change in a multi-decade animation. 

To create a grid of hexagons in an equal area projection (specifically [EPSG:2163](http://epsg.io/2163)), we can use the built-in CartoDB `CDB_HexagonGrid` function. Paste this into the CartoDB Custom SQL panel:

```
create table hexbin_test as select CDB_HexagonGrid(ST_Collect(ST_transform(the_geom, 2163)), 10000, ST_SetSRID(ST_MakePoint(0,0),2163)) as the_geom_webmercator from states
```

The `10000` number is the spacing of the hexagons in projected coordinate space. In this case, 10km. The hexagon grid will cover the bounding box of the features in the table `states`. Note that the bounding box is calculated in the 2163 projection, which might have surprising effects:

![screenshot](https://cloud.githubusercontent.com/assets/1212178/11772253/6409b480-a1cf-11e5-9f81-7943ebf63d7f.jpg)

Then use the CartoDB "Save query as new table" to save the results. Save as `hexbins_usa_10000`.

Then we intersect these hexagons with the counties, specifically with a table called `counties_with_migrations_1860` which we have already created. This table includes columns `inmigrations`, `name`, `population`, `prev_population`.  

```
SELECT a.cartodb_id, b.cartodb_id as hex_id, inmigrations, name, population, prev_population, ST_Area(ST_Transform(a.the_geom_webmercator,4326), false) as orig_area,  ST_Intersection(a.the_geom_webmercator, b.the_geom_webmercator) as the_geom_webmercator FROM counties_with_migrations_1860 a, hexbins_usa_10000 b where ST_Intersects(a.the_geom_webmercator, b.the_geom_webmercator)
```

Save these results as a new table, called `counties_hexbins_10000_1860`. The new table consists of shapes that are the intersection of the hexbins and the county shapes. It's like using hexbin-shaped cookie cutters on the counties. We call these "slivers".

Then we run six individual queries, which add new columns and calculates the values for each of these "slivers". 

```
ALTER TABLE counties_hexbins_10000_1860 ADD COLUMN cur_area FLOAT;
ALTER TABLE counties_hexbins_10000_1860 ADD COLUMN sliver_pop INTEGER;
ALTER TABLE counties_hexbins_10000_1860 ADD COLUMN sliver_inmigrations INTEGER;
UPDATE counties_hexbins_10000_1860 SET cur_area = ST_Area(ST_Transform(the_geom_webmercator, 4326),false);
UPDATE counties_hexbins_10000_1860 SET sliver_pop = population * cur_area / orig_area;
UPDATE counties_hexbins_10000_1860 SET sliver_inmigrations = inmigrations * cur_area / orig_area;
```

And then finally, we want sum up the `sliver_pop` and `sliver_inmigrations` values for each of the original hexagons, like so:

```
SELECT a.cartodb_id, ST_Transform(a.the_geom_webmercator, 2163) as the_geom_webmercator, sum(b.sliver_inmigrations) as hex_inmigrations, sum(b.sliver_pop) as hex_pop FROM hexbins_usa_10000 a, counties_hexbins_10000_1860 b WHERE a.cartodb_id = b.hex_id group by a.cartodb_id
```

Original counties:

![screenshot](https://cloud.githubusercontent.com/assets/1212178/11772427/0307422c-a1d1-11e5-9c5b-90499f31037f.png)

County slivers:

![screenshot](https://cloud.githubusercontent.com/assets/1212178/11772428/030862c4-a1d1-11e5-8585-42490eb795ce.png)

Summed values for hexbins:

![screenshot](https://cloud.githubusercontent.com/assets/1212178/11772426/0307483a-a1d1-11e5-9b8d-132108fc57ab.png)