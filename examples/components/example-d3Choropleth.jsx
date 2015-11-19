import React, { Component } from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import { MapChoropleth } from '../../src/main';

export default class D3ChoroplethExample extends Component {
  constructor () {
    super();
    this.state = {
      data: {
        geometry: null,
        values: null
      }
    };
  }

  dataLoader() {
    d3.json('../data/us.geojson', (err, rsp) => {
      const geometry = topojson.feature(rsp, rsp.objects.counties);

      d3.json('../data/unemployment.json', (err, rsp) => {
        const vals = new Map();
        rsp.forEach(r => {
          vals.set(r.id, +r.rate);
        });

        this.setState({data: {
          geometry: geometry,
          values: vals
        }});
      });
    });
  }

  componentWillMount() {
    this.dataLoader();
  }

  render () {
    return (
      <div>
        <MapChoropleth data={this.state.data}/>
      </div>
    );

  }

}