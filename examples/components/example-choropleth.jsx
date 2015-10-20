import * as React from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import { MapChoropleth } from '../../src/main';

// Our data for the map
// In a real scenario, this would most likely have to loaded
// from an external source
const geodata = require('../data/us.json');
const mapValues = require('../data/unemployment.json');

export default class ChoroplethExample extends React.Component {

  constructor () {
    super();
  }

  render () {
    var vals = new Map();
    mapValues.map(function(r){
      vals.set(r.id, r.rate);
    });
    var data = {
      geometry: topojson.feature(geodata, geodata.objects.counties),
      values: vals
    };
    return (
      <div>
        <MapChoropleth data={data}/>
      </div>
    );

  }

}