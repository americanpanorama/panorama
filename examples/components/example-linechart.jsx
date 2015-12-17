import * as React from 'react';
import { LineChart } from '../../src/main';

import lineChartData from '../data/nosCoopsWLV60_2981_514b_bc3a.json';

export default class LineChartExample extends React.Component {

  constructor () {

    super();

  }

  render () {

    let data = lineChartData.table.rows,
      TIME = 8,
      VALUE = 10,
      lineChartConfig = {
        data: [data],

        width: 600,
        height: 200,

        // Optionally specify custom margins
        margin: {top: 20, right: 30, bottom: 20, left: 60},

        // Optionally specify accessors to match your data format
        xAccessor: d => new Date(d[TIME]),
        yAccessor: d => d[VALUE],

        // Optionally specify custom scales
        xScale: d3.time.scale()
          .domain([new Date(data[0][TIME]), new Date(data[data.length-1][TIME])]),
        yScale: d3.scale.linear()
          .domain([0, d3.max(data, d => d[VALUE]) + 1])
      };

    return (
      <div>
        <h4>LineChart</h4>
        <LineChart {...lineChartConfig}/>
      </div>
    );

  }

}
