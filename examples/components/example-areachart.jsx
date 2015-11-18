import * as React from 'react';
import { AreaChart, OffsetAreaChart } from '../../src/main';

import areaChartData from '../data/areaChart.json';
import offsetAreaChartData from '../data/offsetAreaChart.json';

export default class AreaChartExample extends React.Component {

  constructor () {

    super();

  }

  render () {

    const MIN_YEAR = 1820;
    const MAX_YEAR = 1860;
    const MIN_VALUE = 0;
    const MAX_VALUE = 3000000;

    let areaChartConfig = {
      data: areaChartData,

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

      width: 600,
      height: 300,

      // used to draw baselines and metadata presence circles
      data: offsetAreaChartData.offsetAreaChartMetadata,

      // d3 conventional margins
      margin: { top: 0, right: 20, bottom: 40, left: 20 },

      // d3 scales for chart
      xScale: d3.scale.linear()
        .domain([MIN_YEAR, MAX_YEAR]),
      yScale: d3.scale.linear()
        .domain([MIN_VALUE, MAX_VALUE]),

      // accessor for start and end of baselines
      xAccessor: (d, i) => i ? d.closedYear : d.openedYear,

      // accessor for metadata presence circles
      metadataAccessor: d => d.commodityDataYears,

      // hide axes
      axisProps: null,

      // data and accessors used to render each AreaChart
      areaChartData: offsetAreaChartData.areaChartsData,
      areaChartConfig: {
        xAccessor: d => d.year,
        yAccessor: d => d.totalNormalizedValue || 0
      },

      // colors applied to AreaCharts
      colorPalette: [
        '#466834',
        '#C163D5',
        '#D34E2B',
        '#69AFC8',
        '#793755',
        '#69CA45',
        '#D3983F',
        '#62C390',
        '#C594C5',
        '#7C4625',
        '#CA4794',
        '#D05864',
        '#6B76CC',
        '#ADB644',
        '#484F73'
      ],

      // hardcoded for example purposes
      selectedChartId: 22,

      // id of each chart; this format works for both sample OffsetAreaChart and AreaChart data formats used here
      chartIdAccessor: d => d.length ? d[0].canalId : d.canalId
    };

    return (
      <div>
        <h4>AreaChart</h4>
        <AreaChart {...areaChartConfig}/>
        <h4>OffsetAreaChart</h4>
        <OffsetAreaChart {...offsetAreaChartConfig}/>
      </div>
    );

  }

}
