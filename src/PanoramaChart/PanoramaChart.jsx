import React, { PropTypes, DefaultProps } from 'react';
import {charts as Charts} from './charts';
import './style.scss';


export default class PanoramaChart extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    xAccessor: PropTypes.func,
    yAccessor: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.object,
    barSpacing: PropTypes.number
  };

  static defaultProps = {
    data: [],
    width: 600,
    height: 400,
    margin: {top: 0, right: 0, bottom: 0, left: 0},
    barSpacing: 0.1,
    xAccessor: function(d){return d.key;},
    yAccessor: function(d){return d.value;}
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.update();
  }

  componentWillUnmount () {
    var el = React.findDOMNode(this.refs.chart);
    if (this.chart) this.chart.destroy(el);
    this.chart = null;
  }

  componentDidUpdate () {
    this.update();
  }

  update () {
    if (!Charts[this.props.type]) return console.error(`No chart for type: ${this.props.type}`);
    if (!this.chart) {
      this.chart = new Charts[this.props.type](d3.select(React.findDOMNode(this.refs.chart)));
    }

    this.chart
      .config('height', this.props.height)
      .config('width', this.props.width)
      .accessor('x', this.props.xAccessor)
      .accessor('y', this.props.yAccessor)
      .draw(this.props.data);
  }

  makeClassName () {
    return 'panorama chart' + ((this.props.klass) ? ' ' + this.props.klass : '');
  }

  render() {

    return (
      <div className={this.makeClassName()}>
        <svg ref='chart' className="wrapper"></svg>
      </div>
    );
  }
}
