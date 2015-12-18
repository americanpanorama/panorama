import React, { Component } from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import { MapChoropleth } from '../../src/main';

export default class D3ChoroplethExample extends Component {
  constructor () {
    super();
    this.state = {data: [], selected: 6071};

    this.colorScale = d3.scale.quantize()
      .range(['#EDF8FB', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1','#88419D', '#6E016B']);
    this.valueAccessor = (d) => {return this.vals[d.id];};
    this.vals = {};

    // things for MapChoropleth
    this.mapOptions = {
      tooltip: true,
      tooltipOptions: {
        onSetTooltipContent: this.setToolTipContent.bind(this),
      },
      styler: this.styler.bind(this),
      onClickHandler: this.onClickHandler.bind(this),
      selectedAccessor: d => d.id,
      mapScale: 'auto',
      hoverStyle: {
        stroke: 'red'
      }
    };
  }

  componentWillMount() {
    this.dataLoader();
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
        this.setState({data: geometry});
      });
    });
  }

  // Styles the map geometry
  // Return Object of styles
  styler(d) {
    const stroke = (d.id === this.state.selected) ? 'red' : 'white';
    return {
      fill: this.colorScale(this.valueAccessor(d)),
      stroke: stroke
    };
  }

  // Sets tooltip content
  // Element is d3 wrapped element, so use either `text` or `html`
  // method to actually set the text
  setToolTipContent(element, item) {
    element.text('Unemployed: ' + Math.round(this.valueAccessor(item) * 100) +'%');
  }

  // Handles map clicks
  onClickHandler(item) {
    if (item.id !== this.state.selected) {
      this.setState({selected: item.id});
    }
  }

  render () {
    return (
      <div>
        <MapChoropleth
          selected={this.state.selected}
          data={this.state.data} {...this.mapOptions}/>
      </div>
    );

  }

}