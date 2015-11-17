import React, { PropTypes } from 'react';
import d3 from 'd3';

const BASE_CLASS_NAME = 'panorama chart ';

export default class PanoramaChart extends React.Component {

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    style: PropTypes.object,
    xScale: PropTypes.func,
    yScale: PropTypes.func,
    xAccessor: PropTypes.func,
    yAccessor: PropTypes.func,
    axisProps: PropTypes.shape({
      scale: PropTypes.func,
      ticks: PropTypes.number,
      orient: PropTypes.string,
      offset: PropTypes.array
    })
  }

  static defaultProps = {
    data: [],
    width: 600,
    height: 400,
    margin: {
      top: 20,
      right: 30,
      bottom: 20,
      left: 30
    },
    style: {},
    xScale: d3.scale.linear(),
    yScale: d3.scale.linear(),
    xAccessor: d => d.key,
    yAccessor: d => d.value,
    axisProps: {
      scale: d3.scale.linear(),
      ticks: 5,
      xOrient: 'bottom',
      yOrient: 'left',
      offset: [0, 0]
    }
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
      this.chart = new this.chartConstructor(d3.select(this.refs.chart), this.props);
    }

    if (this.chart.updateConfigs) {
      this.chart.updateConfigs(this.props);
    }

    this.chart.draw(this.props.data);

  }

  /**
   * Determine class name to be appended to container element.
   * Typically overridden by subclasses.
   */
  getClassSuffix () {

    return '';
    
  }

  /** 
   * Subclasses can override if they need to implement custom rendering.
   */
  renderChildren () {

    return '';

  }

  render () {

    return (
      <div className={ BASE_CLASS_NAME + this.getClassSuffix() } style={ this.props.style }>
        <svg ref='chart' className='wrapper'></svg>
        { this.renderChildren() }
      </div>
    );

  }

}
