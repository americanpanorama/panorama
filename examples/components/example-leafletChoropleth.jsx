import React, { Component } from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import { Map as Map, TileLayer } from 'react-leaflet';

// our component
import { LeafletChoropleth } from '../../src/main';
import { Tooltip } from '../../src/main';

export default class LeafletChoroplethExample extends Component {
  constructor() {
    super();
    this.state = {
      geometry: null
    };

    this.vals = {};
    this.colorScale = d3.scale.quantize()
      .range(['#EDF8FB', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1','#88419D', '#6E016B']);
  }

  dataLoader() {
    d3.json('data/us.geojson', (err, rsp) => {
      const geometry = topojson.feature(rsp, rsp.objects.counties);

      d3.json('data/unemployment.json', (err, rsp) => {
        let max = -Infinity;

        rsp.forEach(r => {
          this.vals[r.id] = +r.rate;
          max = Math.max(max, +r.rate);
        });

        this.colorScale.domain([0, max]);
        this.setState({geometry: geometry});
      });
    });
  }

  componentWillMount() {
    this.dataLoader();
  }

  componentDidMount() {}

  styler(feature) {
    const value = this.vals[feature.id] || 0;
    return {
      fillColor: this.colorScale(value),
      weight: 1.0,
      opacity: 1.0,
      color: 'white',
      fillOpacity: 0.7
    };
  }

  onClickHandler(target, map) {
    map.fitBounds(target.getBounds());
  }

  setTooltipContent(feature) {
    return 'ID: ' + feature.id + '';
  }

  render() {
    return (
      <div>
        <Map style={{width: '800px', height: '500px'}} center={[37.8, -96]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
          <LeafletChoropleth
            data={this.state.geometry}
            style={this.styler.bind(this)}
            onFeatureClick={this.onClickHandler.bind(this)}
            setTooltipContent={this.setTooltipContent.bind(this)}
            selectedStyle={{color: 'red'}}>
            <Tooltip />
          </LeafletChoropleth>
        </Map>
      </div>
    );
  }
}