import React, { PropTypes } from 'react';

const BASE_CLASS_NAME = 'panorama chart ';

export default class PanoramaChart extends React.Component {

  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
    width: PropTypes.number,
    height: PropTypes.number
  }

  static defaultProps = {
    data: [],
    width: 600,
    height: 400,
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

    // Pass in a mutable shallow copy of this.props,
    // so it can be modified and defaults can be added as needed.
    let propsCopy = {};
    Object.keys(this.props).forEach(key => {
      propsCopy[key] = this.props[key];
    });
    this.chart.updateConfigs(propsCopy);

  }

  /**
   * Determine class name to be appended to container element.
   * Typically overridden by subclasses.
   */
  getClassSuffix () {

    return '';
    
  }

  render () {

    return (
      <div className={ BASE_CLASS_NAME + this.getClassSuffix() }>
        <svg ref='chart' className='wrapper'></svg>
      </div>
    );

  }

}
