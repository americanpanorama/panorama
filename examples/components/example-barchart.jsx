import * as React from 'react';
import { DiscreteBarChart, HorizontalDiscreteBarChart } from '../../src/main';

export default class BarchartExample extends React.Component {

  constructor () {
    super();
    this.state = {
      verticalSelected: 'red',
      horizontalSelected: null
    };

    this.verticalBarOptions = {
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
      },
      tooltip: true,
      tooltipOptions: {
        onSetTooltipContent: this.setToolTipContent.bind(this),
        offset: [0, -10],
        align: 'top center',
        closeDelay: 100
      }
    };

    this.horizontalBarOptions = {
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
      yAccessor: d => d.colorName,
      selectionAccessor: d => d.colorName
    };
  }

  onClickHandler(item) {
    if (item.key !== this.state.verticalSelected) {
      this.setState({
        verticalSelected: item.key
      });
    }
  }

  onClickHorizontalHandler(item) {
    if (item.colorName !== this.state.horizontalSelected) {
      this.setState({
        horizontalSelected: item.colorName
      });
    }
  }

  setToolTipContent(element, item) {
    element.text('The color is ' + item.key);
  }

  render () {
    return (
      <div>
        <h4>Vertical</h4>
        <DiscreteBarChart selected={this.state.verticalSelected} onClickHandler={this.onClickHandler.bind(this)} {...this.verticalBarOptions}/>
        <h4>Horizontal</h4>
        <HorizontalDiscreteBarChart selected={this.state.horizontalSelected} onClickHandler={this.onClickHorizontalHandler.bind(this)} {...this.horizontalBarOptions}/>
      </div>
    );
  }

}
