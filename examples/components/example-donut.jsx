import React, { Component } from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import { Map as Map, TileLayer, Circle } from 'react-leaflet';

// our component
import { Donut } from '../../src/main';

export default class LeafletDonutExample extends Component {
  constructor() {
    super();

    // Using state here to update changes to Donuts
    // on events
    this.state = {
      selected: null,
      highlighted: null
    };
  }

  // Events
  onMouseOverHandler(id, evt) {
    if (this.state.selected === id || this.state.highlighted === id) return;
    this.setState({highlighted: id});
  }

  onMouseOutHandler(id, evt) {
    if (!this.state.highlighted) return;
    this.setState({highlighted: null});
  }

  onClickHandler(id, evt) {
    const selected = !(this.state.selected === id);
    this.setState({selected: selected ? id : null});
  }

  // Utility function to set a color
  // on a donut based on the state
  getColor(id) {
    return (this.state.selected === id || this.state.highlighted === id) ?  '#ff0099' :'#000000';
  }

  render() {
    return (
      <div>
        <Map style={{width: '800px', height: '500px'}} center={[37.8, -96]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />

          <Donut
            center={[37.8, -96]}
            outerRadius={300000}
            innerRadius={100000}
            color={this.getColor('donut-1')}
            fillColor={this.getColor('donut-1')}
            weight={1}
            onClick={this.onClickHandler.bind(this, 'donut-1')}
            onMouseout={this.onMouseOutHandler.bind(this, 'donut-1')}
            onMouseover={this.onMouseOverHandler.bind(this, 'donut-1')}/>

          <Donut
            center={[37.8, -96]}
            outerRadius={500000}
            innerRadius={300000}
            color={this.getColor('donut-2')}
            fillColor={this.getColor('donut-2')}
            weight={1}
            onClick={this.onClickHandler.bind(this, 'donut-2')}
            onMouseout={this.onMouseOutHandler.bind(this, 'donut-2')}
            onMouseover={this.onMouseOverHandler.bind(this, 'donut-2')}/>

          <Donut
            center={[37.8, -96]}
            outerRadius={700000}
            innerRadius={500000}
            color={this.getColor('donut-3')}
            fillColor={this.getColor('donut-3')}
            weight={1}
            onClick={this.onClickHandler.bind(this, 'donut-3')}
            onMouseout={this.onMouseOutHandler.bind(this, 'donut-3')}
            onMouseover={this.onMouseOverHandler.bind(this, 'donut-3')}/>
        </Map>
      </div>
    );
  }
}