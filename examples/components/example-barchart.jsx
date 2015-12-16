import * as React from 'react';
import { DiscreteBarChart, HorizontalDiscreteBarChart } from '../../src/main';

export default class BarchartExample extends React.Component {

  constructor () {
    super();
  }

  render () {
    var opts1 = {
      data: [
        { key: 'red', value: 20 },
        { key: 'blue', value: 40 },
        { key: 'green', value: 10 }
      ],
      width: 400,
      height: 400,
      yaxis: {
        className: 'y axis',
        orient: 'left',
        position: 'left',
        label: {
          text: 'Value',
          attr: {
            transform: 'rotate(-90)',
            y: 6,
            dy: '0.71em'
          },
          style: {
            'text-anchor': 'end'
          }
        }
      }
    };

    var opts2 = {
      data: [
        { colorName: 'red', amount: 20 },
        { colorName: 'blue', amount: 40 },
        { colorName: 'green', amount: 10 }
      ],
      width: 600,
      height: 200,

      // Optionally specify custom margins
      margin: { top: 20, right: 30, bottom: 20, left: 50 },

      // Optionally specify accessors to match your data format
      xAccessor: d => d.amount,
      yAccessor: d => d.colorName
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
