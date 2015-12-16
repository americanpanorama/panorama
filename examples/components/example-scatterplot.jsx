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
      this.setState({data: rsp.series[0].data});
    });
  }

  componentWillMount() {
    this.dataLoader();
  }

  componentDidMount() {}

  setToolTipContent(element, item) {
    element.text('Weight: '+ item[0] + ' / Height: ' + item[1]);
  }


  render () {
    var opts = {
      xAccessor: d => d[0],
      yAccessor: d => d[1],
      tooltip: true,
      tooltipOptions: {
        onSetTooltipContent: this.setToolTipContent.bind(this),
        offset: [0, -10],
        align: 'top center',
        closeDelay: 100
      }
    };
    return (
      <ScatterPlot data={this.state.data} {...opts}/>
    );

  }

}
