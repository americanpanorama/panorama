import { PropTypes } from 'react';
import PanoramaChart from '../charts/PanoramaChart';
import ChartBase from '../charts/ChartBase';
import d3 from 'd3';
import './style.scss';
import _ from 'lodash';

export default class DiscreteBarChart extends PanoramaChart {

  // 'inherit' static validators
  static propTypes = _.merge(PanoramaChart.propTypes, {
    barSpacing: PropTypes.number
  });

  // 'inherit' static defaults
  static defaultProps = _.merge(PanoramaChart.defaultProps, {
    barSpacing: 0.1,
  });

  constructor (props) {

    console.log('>>>>>> DBC props:', props);

    super(props);
    this.chartConstructor = DiscreteBarChartImpl;

  }

  getClassSuffix () {
    return 'barchart';
  }

}

export class DiscreteBarChartImpl extends ChartBase {

  constructor (selection) {

    super(selection);

    let _Chart = this;

    this.configs['barSpacing'] = {value: 0.1};

    // append group to chart
    let bars = this.baseLayer = this.base.append('g').classed('bars', true);



    // TODO: WHY IS THIS HERE????
    // this.updateDimensions();



    // define layer
    let layer = this.layer('bars', bars, {
      dataBind: function (data) {
        return this.selectAll('rect').data(data);
      },
      insert: function () {
        return this.append('rect')
          .attr('class', 'bar')
          .attr('width', _Chart.xScale.rangeBand());
      }
    });

    // Set up lifecycle events on layers
    layer.on('enter', function () {
      return this
        .attr('x', d => _Chart.xScale(_Chart.accessor('x')(d)))
        .attr('y', d => _Chart.yScale(_Chart.accessor('y')(d)))
        .attr('height', d => _Chart._height - _Chart.yScale(_Chart.accessor('y')(d)));
    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });

  }

  updateConfigs (props) {

    // In React, default props are cached, and therefore non-primitives are shared across all instances.
    // Therefore, we cannot rely on React to apply default non-primitive props;
    // they must be set manually here.
    props = _.merge(props, {
      xScale: d3.scale.ordinal(),
      yScale: d3.scale.linear()
    });

    super.updateConfigs(props);

  }

  updateScales (data) {

    this.xScale.rangeRoundBands([0, this._width], this.configs['barSpacing'].value);
    this.yScale.range([this._height, 0]);
    this.xScale.domain(data.map(d => this.accessor('x')(d)));
    this.yScale.domain([0, d3.max(data, d => this.accessor('y')(d))]);

  }

  // Do something before `dataBind`
  preDraw (data) {

    super.preDraw(data);

    if (this.yAxis) {
      this.yAxis.config('orient', 'left');
      this.yAxis.update();
    }

  }

}
