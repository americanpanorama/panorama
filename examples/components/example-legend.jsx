import * as React from 'react';

import { Legend } from '../../src/main';

export default class LegendExample extends React.Component {

  constructor () {
    super();
  }

  render () {

    let legendData = {
      items: [
        'narratives',
        'cotton',
        'sugar'
      ],
      initialSelection: 'narratives'
    };

    return (
      <Legend { ...legendData }/>
    );

  }

}
