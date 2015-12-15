## DiscreteBarChart

<img src='https://cloud.githubusercontent.com/assets/1127259/11770147/743ed722-a1ac-11e5-87ab-5d4b9ea673e9.png'>

A simple vertical bar chart.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { DiscreteBarChart } from '@panorama/toolkit';

let discreteBarChartConfig = {
  data: [
    { key: 'red', value: 20 },
    { key: 'blue', value: 40 },
    { key: 'green', value: 10 }
  ],
  width: 400,
  height: 400

  // Optionally specify custom margins
  margin: { top: 10, right: 10, bottom: 10, left: 10 },

  // Optionally specify accessors to match your data format
  xAccessor: d => d.key,
  yAccessor: d => d.value
};

ReactDOM.render(<DiscreteBarChart {...discreteBarChartConfig}/>, document.body);
```
