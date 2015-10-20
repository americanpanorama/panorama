import * as React from 'react';
import { DiscreteBarChart, HorizontalDiscreteBarChart } from '../../src/main';

export default class BarchartExample extends React.Component {

  constructor () {
    super();
  }

  render () {
    var opts1 = {
      data: [
        {key: 'red', value: 20},
        {key: 'blue', value: 40},
        {key: 'green', value: 10}
      ],
      width: 400,
      height: 400,
      margin: {top: 20, right: 30, bottom: 20, left: 30},
      barSpacing: 0.1,
      xAccessor: function(d){return d.key;},
      yAccessor: function(d){return d.value;}
    };

    var opts2 = {
      data: [
        {key: 'red', value: 20},
        {key: 'blue', value: 40},
        {key: 'green', value: 10}
      ],
      width: 600,
      height: 200,
      margin: {top: 20, right: 30, bottom: 20, left: 50},
      barSpacing: 0.1,
      xAccessor: function(d){return d.value;},
      yAccessor: function(d){return d.key;}
    };

    return (
      <div>
        <h4>Vertical</h4>
        <DiscreteBarChart key='1' {...opts1}/>
        <h4>Horizontal</h4>
        <HorizontalDiscreteBarChart key='2' {...opts2}/>
      </div>
    );
  }

}
