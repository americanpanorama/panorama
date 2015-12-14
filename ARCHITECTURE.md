# Panorama toolkit architecture

![screenshot](https://cloud.githubusercontent.com/assets/1212178/10978705/340f9e24-83ad-11e5-979e-b0a16c3a9cce.png)

The Panorama toolkit is a collection of JavaScript components used by the [American Panorama atlas](http://dsl.richmond.edu/panorama/). This file documents how the toolkit fits into the architecture of the entire atlas.

At the core of American Panorama is [CartoDB](http://cartodb.com), which hosts the data for the application. 

We use CartoDB in two ways:

 1. To dynamically generate tiled raster map layers for the application's basemap. Further documentation about the CartoDB basemaps is in the panorama-template repo: https://github.com/americanpanorama/panorama-template/tree/master/basemaps
 2. To serve GeoJSON objects for rendering by various Panorama toolkit components.

Note that although American Panorama depends on CartoDB, the Panorama toolkit components do not require CartoDB as a backend.

TODO: more explanation