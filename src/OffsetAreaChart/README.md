## OffsetAreaChart

<a href='./OffsetAreaChart.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770144/7433df16-a1ac-11e5-9226-d3d64e98142a.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { AreaChart } from '@panorama/toolkit';

let offsetAreaChartConfig = {
  width: 600,
  height: 300,

  // optional; used to draw baselines and metadata presence circles
  data: offsetAreaChartData.offsetAreaChartMetadata,

  // d3 conventional margins
  margin: { top: 10, right: 10, bottom: 10, left: 10 },

  // Optionally specify custom scales
  xScale: d3.scale.linear()
    .domain([minTime, maxTime]),
  yScale: d3.scale.linear()
    .domain(minValue, maxValue])

  // accessor for start and end of baselines
  xAccessor: (d, i) => i ? d.endTime : d.startTime,

  // accessor for metadata presence circles
  metadataAccessor: d => d.metadataTimes,

  // hide axes
  axisProps: null,

  // data and accessors used to render each AreaChart
  areaChartData: offsetAreaChartData.areaChartsData,
  areaChartConfig: {
    xAccessor: d => d.time,
    yAccessor: d => d.value,
  },

  // colors applied to AreaCharts
  colorPalette: [
    '#466834',
    '#C163D5',
    '#D34E2B'
  ],

  // optionally specify an initially selected chart
  selectedChartId: 22,

  // id of each chart
  chartIdAccessor: d => d.length ? d[0].chartId : d.chartId
};

ReactDOM.render(<OffsetAreaChart {...offsetAreaChartConfig}/>, document.body);
```
