import * as React from 'react';
import { LineChart } from '../../src/main';
import d3 from 'd3';

export default class LineChartExample extends React.Component {

  constructor () {
    super();
    this.state = {data: []};

    this.CONSTANTS = {
      time: 8,
      value: 10
    };

    this.lineChartConfig = {
      width: 600,
      height: 200,

      // Optionally specify custom margins
      margin: {top: 20, right: 30, bottom: 20, left: 60},

      // Optionally specify accessors to match your data format
      xAccessor: d => new Date(d[this.CONSTANTS.time]),
      yAccessor: d => d[this.CONSTANTS.value],

      // Optionally specify custom scales
      xScale: d3.time.scale(),
      yScale: d3.scale.linear(),

      // configure x-axis
      xaxis: {
        className: 'x axis',
        orient: 'bottom',
        position: 'bottom',
        tickFormat: d3.time.format('%x'),
        ticks: 5,
        attr: {
          dx: '0',
          dy: '0.5em'
        },
        style: {
          'text-anchor': 'middle'
        }
      }
    };
  }

  dataLoader() {
    d3.json('data/nosCoopsWLV60_2981_514b_bc3a.json', (err, rsp) => {
      if (err) return console.error('Line chart data loading error!');

      const data = rsp.table.rows;
      this.lineChartConfig.xScale.domain([new Date(data[0][this.CONSTANTS.time]), new Date(data[data.length-1][this.CONSTANTS.time])]);
      this.lineChartConfig.yScale.domain([0, d3.max(data, d => d[this.CONSTANTS.value]) + 1]);

      this.setState({data: [data]});
    });
  }

  componentWillMount() {
    this.dataLoader();
  }

  render () {
    return (
      <div>
        <h4>LineChart</h4>
        <LineChart data={this.state.data} {...this.lineChartConfig}/>
      </div>
    );

  }

}
