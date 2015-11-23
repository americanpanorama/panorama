'use strict';

import React, { Component } from 'react';
import { PanoramaDispatcher, PanoramaEventTypes } from '../src/PanoramaDispatcher.js';


import AreaChartExample from './components/example-areachart.jsx';
import BarChartExample from './components/example-barchart';
import D3ChoroplethExample from './components/example-d3Choropleth';
import IntroManagerExample from './components/example-introManager.jsx';
import ItemSelectorExample from './components/example-itemSelector.jsx';
import LeafletChoropleth from './components/example-leafletChoropleth.jsx';
import LegendExample from './components/example-legend.jsx';
import PunchcardExample from './components/example-punchcard.jsx';
import Donut from './components/example-donut.jsx';

class App extends Component {

  static displayName = 'App';

  constructor (props) {

    super(props);

    this.state = {};

    this.onLegendSelected = this.onLegendSelected.bind(this);
    this.onItemSelected = this.onItemSelected.bind(this);
    this.onChartSliderSelected = this.onChartSliderSelected.bind(this);

  }

  componentWillMount () {

    // @panorama/toolkit offers a global dispatcher that can be used instead of passing callbacks to child components.
    // This option can be useful when your component hierarchy is multiple levels deep, and the component
    // that needs to handle a change is multiple levels above the component dispatching the event.
    PanoramaDispatcher.addListener(PanoramaEventTypes.Legend.selected, this.onLegendSelected);
    PanoramaDispatcher.addListener(PanoramaEventTypes.ItemSelector.selected, this.onItemSelected);
    PanoramaDispatcher.addListener(PanoramaEventTypes.ChartSlider.selected, this.onChartSliderSelected);

  }

  onLegendSelected (value, index) {
    console.log('via PanoramaDispatcher: Legend selected: { value:' + value + ', index:' + index + ' }');
  }

  onItemSelected (value, index) {
    console.log('via PanoramaDispatcher: ItemSelector selected: { value:' + value + ', index:' + index + ' }');
  }

  onChartSliderSelected (value) {
    console.log('via PanoramaDispatcher: ChartSlider selected: { value:' + value + ' }');
  }

  render () {

    return (
      <div>
        <h1>Panorama Toolkit examples</h1>
        <hr />
        <h2>Area Chart</h2>
        <AreaChartExample />
        <h2>Bar Chart</h2>
        <BarChartExample />
        <h2>Choropleth</h2>
        <D3ChoroplethExample />
        <h2>IntroManager</h2>
        <IntroManagerExample />
        <h2>ItemSelector</h2>
        <ItemSelectorExample { ...this.state.itemSelector } />
        <h2>Leaflet Choropleth</h2>
        <LeafletChoropleth />
        <h2>Legend</h2>
        <LegendExample { ...this.state.legend } />
        <h2>Punchcard</h2>
        <PunchcardExample />
        <h2><a name="donut">Donut</a></h2>
        <Donut />
      </div>
    );

  }

}

export default App;