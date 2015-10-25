import * as React from 'react';
import { AreaChart } from '../../src/main';

export default class AreaChartExample extends React.Component {

  constructor () {

    super();

  }

  render () {

    const MIN_YEAR = 1820;
    const MAX_YEAR = 1860;
    const MIN_VALUE = 0;
    const MAX_VALUE = 4000000;

    let areaChartConfig = {
      data: require('../data/areaChart.json'),
      // data: _.values(CommodityStore.getAllCommodities()).map(v => _.values(v)),  // TODO: we will want commodities for all canals...
      // data: [_.values(CommodityStore.getAllCommodities()[data.selectedCanal.id])],  // ...but for now let's just grab the selected canal.

      width: 600,
      height: 200,

      // Optionally specify custom margins
      margin: {top: 20, right: 30, bottom: 20, left: 60},

      // Optionally specify accessors to match your data format
      xAccessor: d => d.year,
      yAccessor: d => d.totalNormalizedValue || 0,

      // Optionally specify custom scales
      xScale: d3.scale.linear()
        .domain([MIN_YEAR, MAX_YEAR]),
      yScale: d3.scale.linear()
        .domain([MIN_VALUE, MAX_VALUE])
    };

    let offsetAreaChartConfig = {
      // TODO
    };

    return (
      <div>
        <h4>AreaChart</h4>
        <AreaChart {...areaChartConfig}/>
        {/*
        <h4>OffsetAreaChart</h4>
        <OffsetAreaChart {...offsetAreaChartConfig}/>
        */}
      </div>
    );

  }

}
