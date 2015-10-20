import React, { PropTypes } from 'react';

export default class PanoramaChart extends React.Component {

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
    xAccessor: PropTypes.func,
    yAccessor: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.object,
    barSpacing: PropTypes.number
  }

  static defaultProps = {
    data: [],
    width: 600,
    height: 400,
    margin: {top: 0, right: 0, bottom: 0, left: 0},
    barSpacing: 0.1,
    xAccessor: function(d){return d.key;},
    yAccessor: function(d){return d.value;}
  }

  constructor (props) {

    super(props);

  }

  componentDidMount () {

    this.update();

  }

  componentWillUnmount () {

    if (this.chart) this.chart.destroy(this.refs.chart);
    this.chart = null;

  }

  componentDidUpdate () {

    this.update();

  }

  update () {

    if (!this.chart) {
      this.chart = new this.chartConstructor(d3.select(this.refs.chart));
    }

    this.chart
      .config('height', this.props.height)
      .config('width', this.props.width)
      .accessor('x', this.props.xAccessor)
      .accessor('y', this.props.yAccessor)
      .draw(this.props.data);

  }

  /**
   * Determine class name to be applied to container element.
   * Typically overridden by subclasses.
   */
  makeClassName () {

    return 'panorama chart';
    
  }

  render () {

    return (
      <div className={this.makeClassName()}>
        <svg ref='chart' className='wrapper'></svg>
      </div>
    );

  }

}
