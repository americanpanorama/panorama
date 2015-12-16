## AreaChart

<img src='https://cloud.githubusercontent.com/assets/1127259/11770149/7448e974-a1ac-11e5-90b6-3185c3630552.png'>

Area charts are generally used to describe changes in a single value over time. This component can be styled with or without a fill/stroke, meaning it can be used as a filled area chart or simply as a line chart.


#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { AreaChart } from '@panorama/toolkit';

let areaChartConfig = {
  data: areaChartData,

  width: 600,
  height: 200,

  // Optionally specify custom margins
  margin: { top: 10, right: 10, bottom: 10, left: 10 },

  // Optionally specify accessors to match your data format
  xAccessor: d => d.time,
  yAccessor: d => d.value,

  // Optionally specify custom scales
  xScale: d3.scale.linear()
    .domain([minTime, maxTime]),
  yScale: d3.scale.linear()
    .domain(minValue, maxValue])
};

ReactDOM.render(<AreaChart {...areaChartConfig}/>, document.body);
```
