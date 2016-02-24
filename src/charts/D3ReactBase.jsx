import React, { PropTypes, Component } from 'react';
import { DefaultProps, DefaultTypes } from './common/props';

import './style.scss';

export default class D3ReactBase extends Component {
  constructor (props) {
    super(props);
  }

  static propTypes = DefaultTypes;
  static defaultProps = DefaultProps;

  componentWillMount() {
    if (!this.chartConstructor) {
      throw new Error('Need to set chartConstructor');
    }
    this.chart = new this.chartConstructor(this.props);
    this.chart.willMount();
  }

  componentDidMount() {
    this.chart.selector = this.refs.chart;
    this.chart.tooltipRef = this.refs.tooltip;
    this.chart.props = this.props;
    this.chart.onMount();
  }

  componentDidUpdate() {
    this.chart.props = this.props;
    this.chart.onUpdate();
  }

  componentWillUnmount() {
    this.chart.onUnMount();
    this.chart = null;
  }

  getClassName() {
    return this.props.className ? ' ' + this.props.className : '';
  }

  render() {
    return (
      <div className={ 'panorama' + this.getClassName() }>
        <div ref='chart' className='panorama--chart-container'>
          { this.props.tooltip && <div ref='tooltip' className='panorama--tooltip'></div> }
        </div>
      </div>
    );
  }
}