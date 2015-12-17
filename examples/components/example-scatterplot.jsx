import * as React from 'react';
import d3 from 'd3';

import { ScatterPlot } from '../../src/main';

export default class ScatterplotExample extends React.Component {

  static propTypes = {
    selected: React.PropTypes.string
  }

  constructor (props) {
    super(props);
    this.state = {data: []};
  }

  dataLoader() {
    d3.json('data/scatter-series.json', (err, rsp) => {
      if (err) return console.error('Scatterplot data loading error!');
      // Add a random value to each row to scale the dot's by
      const data = rsp.series[0].data.map((row) => {
        row.push(Math.floor(Math.random() * 100) + 1);
        return row;
      });
      this.setState({data: data});
    });
  }

  componentWillMount() {
    this.dataLoader();
  }

  componentDidMount() {}

  setToolTipContent(element, item) {
    const msg =  [
      '<span>Weight: ' + item[0] + '</span><br/>',
      '<span>Height: ' + item[1] + '</span><br/>',
      '<span>Random: ' + item[2] + '</span>'
    ];
    element.html(msg.join(''));
  }

  render () {
    var opts = {
      xAccessor: d => d[0],
      yAccessor: d => d[1],
      tooltip: true,
      dotRadiusScale: d3.scale.sqrt().range([1, 6]),
      dotRadiusAccessor: d => d[2],
      tooltipOptions: {
        onSetTooltipContent: this.setToolTipContent.bind(this),
        offset: [0, -10],
        align: 'top center',
        closeDelay: 100
      },
      yaxis: {
        className: 'y axis',
        orient: 'left',
        position: 'left',
        label: {
          text: 'Weight (kg)',
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

    return (
      <ScatterPlot data={this.state.data} {...opts}/>
    );

  }

}
