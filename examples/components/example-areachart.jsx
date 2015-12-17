import * as React from 'react';
import d3 from 'd3';
import { AreaChart, OffsetAreaChart } from '../../src/main';

export default class AreaChartExample extends React.Component {

  constructor () {
    super();
    this.state = {offsetData: [], data: [], minYear: null, maxYear: null};
  }

  componentWillMount() {
    this.dataLoader();
  }

  dataLoader() {
    d3.json('data/areaChart.json', (err, rsp) => {
      if (err || !rsp.length) return console.error('Area chart data loading error!');

      rsp[0].forEach((row) => {
        row.date = new Date(row.year, 0, 1);
        row.totalNormalizedValue = row.totalNormalizedValue || 0;
      });

      const min = d3.min(rsp[0], d => d.date);
      const max = d3.max(rsp[0], d => d.date);

      d3.json('data/offsetAreaChart.json', (err, rsp2) => {
        if (err) {
          console.error('Offset area chart data loading error!');

          return this.setState({
            data: rsp,
            minYear: min,
            maxYear: max
          });
        }

        this.setState({
          offsetData: rsp2,
          data: rsp,
          minYear: min,
          maxYear: max
        });
      });

    });
  }

  setAreaChartTip(element, item) {
    element.text(item.year + ' : ' + item.totalNormalizedValue);
  }
  render () {

    const MIN_YEAR = this.state.minYear || new Date();
    const MAX_YEAR = this.state.maxYear || new Date();
    const MIN_VALUE = 0;
    const MAX_VALUE = 3000000;

    let areaChartConfig = {
      data: this.state.data,

      width: 600,
      height: 200,

      // Optionally specify custom margins
      margin: {top: 20, right: 30, bottom: 20, left: 60},

      // Optionally specify accessors to match your data format
      xAccessor: d => d.date,
      yAccessor: d => d.totalNormalizedValue,

      tooltip: true,
      tooltipOptions: {
        onSetTooltipContent: this.setAreaChartTip.bind(this)
      },

      // Optionally specify custom scales
      xScale: d3.time.scale()
        .domain([MIN_YEAR, MAX_YEAR]),
      yScale: d3.scale.linear()
        .domain([MIN_VALUE, MAX_VALUE])
    };

    let offsetAreaChartConfig = {

      width: 600,
      height: 300,

      // used to draw baselines and metadata presence circles
      data: this.state.offsetData.offsetAreaChartMetadata,

      // d3 conventional margins
      margin: { top: 0, right: 20, bottom: 40, left: 20 },

      // d3 scales for chart
      xScale: d3.scale.linear()
        .domain([1820, 1860]),
      yScale: d3.scale.linear()
        .domain([MIN_VALUE, MAX_VALUE]),

      // accessor for start and end of baselines
      xAccessor: (d, i) => i ? d.closedYear : d.openedYear,

      // accessor for metadata presence circles
      metadataAccessor: d => d.commodityDataYears,

      // hide axes
      axisProps: null,

      // data and accessors used to render each AreaChart
      areaChartData: this.state.offsetData.areaChartsData,
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
