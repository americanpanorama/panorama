'use strict';

import React, { Component } from 'react';

import LegendExample from './components/example-legend.jsx';
import BarChartExample from './components/example-barchart';
import ChoroplethExample from './components/example-choropleth';
import PunchcardExample from './components/example-punchcard.jsx';

class App extends Component {
  static displayName = 'App';

  render() {
    return (
      <div>
        <h1>Panorama Toolkit examples</h1>
        <hr />
        <h2>Legend</h2>
        <LegendExample/>
        <h2>Barchart</h2>
        <BarChartExample/>
        <h2>Choropleth</h2>
        <ChoroplethExample/>
        <h2>Punchcard</h2>
        <PunchcardExample/>
      </div>
    );
  }
}

export default App;