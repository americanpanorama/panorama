## HorizontalDiscreteBarChart

<img src='https://cloud.githubusercontent.com/assets/1127259/11770146/743552f6-a1ac-11e5-9ec1-884458177541.png'>

A simple horizontal bar chart.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { HorizontalDiscreteBarChart } from '@panorama/toolkit';

let horizontalBarChartConfig = {
  data: [
    { animal: 'dogs', amount: 20 },
    { animal: 'cats', amount: 40 },
    { animal: 'spiders', amount: 10 }
  ],
  width: 600,
  height: 200,

  // Optionally specify custom margins
  margin: { top: 10, right: 10, bottom: 10, left: 10 },

  // Optionally specify accessors to match your data format
  xAccessor: d => d.amount,
  yAccessor: d => d.animal
};

ReactDOM.render(<HorizontalDiscreteBarChart {...horizontalBarChartConfig}/>, document.body);
```
