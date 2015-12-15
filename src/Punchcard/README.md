## Punchcard

<img src='https://cloud.githubusercontent.com/assets/1127259/11770151/744bfde4-a1ac-11e5-9122-341154b5e85a.png'>

A categorized view of a set of values, each with a label and simple graphical representation (a circle).

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Punchcard } from '@panorama/toolkit';

let punchcardConfig = {
  header: {
    title: 'Erie Canal',
    subtitle: 1850,
    caption: 1635089
  },
  categories: [
    {
      commodities: [
        {
          name: 'Wheat',
          value: 3670754,
          normalizedValue: 359733.892
        },
        {
          name: 'Flour',
          value: 3256077,
          normalizedValue: 319095.546
        },
        {
          name: 'Grain',
          value: 7339865,
          normalizedValue: 172486.8275
        }
      ],
      name: 'Grains, Alcohol & Tobacco',
      aggregateNormalizedValue: 851316.2655
    },
    {
      commodities: [
        {
          name: 'Boards & scantling',
          value: 425095442,
          normalizedValue: 637643.163
        },
        {
          name: 'Shingles',
          value: 58433000,
          normalizedValue: 29216.5
        }
      ],
      name: 'Building Materials',
      aggregateNormalizedValue: 666859.663
    },
    // ...
  ]
};

ReactDOM.render(<Punchcard {...punchcardConfig}/>, document.body);
```
