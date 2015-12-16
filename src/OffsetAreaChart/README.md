## OffsetAreaChart

<img src='https://cloud.githubusercontent.com/assets/1127259/11770144/7433df16-a1ac-11e5-9226-d3d64e98142a.png'>

A collection of stacked AreaCharts, drawn with a vertical offset between each. Each child AreaChart shares the same axes, so this component is useful for e.g. allowing comparisons between multiple datasets changing over the same period of time. This component can be styled with or without a fill/stroke, meaning it can display filled area charts or simply a series of line charts.

This component can also draw baselines for each embedded AreaChart that display the extent of each along the x-axis, and it can render dots on those baselines to indicate the presence of data at each discrete step on the x-axis. These features can be useful to indicate data that cannot be rendered as area charts, due to invalid or unformatted data.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
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
