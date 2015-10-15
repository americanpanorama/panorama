import * as React from 'react';

import { PanoramaChart } from '@panorama/toolkit';

export default class BarchartExample extends React.Component {

  constructor () {
    super();
  }


  render () {
    var opts = {
      data: [
        {key: 'red', value: 20},
        {key: 'blue', value: 40},
        {key: 'green', value: 10}
      ],
      klass: 'barchart',
      width: 600,
      height: 400,
      margin: {top: 20, right: 30, bottom: 20, left: 30},
      barSpacing: 0.1,
      xAccessor: function(d){return d.key;},
      yAccessor: function(d){return d.value;}
    };

    return (
      <PanoramaChart type="DiscreteBarChart" {...opts}/>
    );

  }

}