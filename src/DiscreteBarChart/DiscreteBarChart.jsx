import { PropTypes } from 'react';
import PanoramaChart from '../charts/PanoramaChart';
import ChartBase from '../charts/ChartBase';
import d3 from 'd3';
import './style.scss';

export default class DiscreteBarChart extends PanoramaChart {

  // extend superclass `props` validators
  static propTypes = Object.assign({}, PanoramaChart.propTypes, {
    barSpacing: PropTypes.number
  });

  // extend superclass `props` defaults
  static defaultProps = Object.assign({}, PanoramaChart.defaultProps, {
    barSpacing: 0.1,
    xScale: d3.scale.ordinal()
  });

  constructor (props) {
    super(props);
    this.chartConstructor = DiscreteBarChartImpl;
  }

  getClassSuffix () {
    return 'bar-chart vertical';
  }

}

export class DiscreteBarChartImpl extends ChartBase {

  constructor (selection, props) {

    super(selection, props);

    let _Chart = this;

    this.configs['barSpacing'] = { value: props.barSpacing };

    // append group to chart
    let bars = this.baseLayer = this.base.append('g').classed('bars', true);

    this.updateDimensions();

    // define layer
    let layer = this.layer('bars', bars, {
      dataBind: function (data) {
        return this.selectAll('rect').data(data);
      },
      insert: function () {
        return this.append('rect')
          .attr('class', 'bar')
          .attr('width', _Chart.config('xScale').rangeBand());
      }
    });

    // Set up lifecycle events on layers
    layer.on('enter', function () {
      return this
        .attr('x', d => _Chart.config('xScale')(_Chart.accessor('x')(d)))
        .attr('y', d => _Chart.config('yScale')(_Chart.accessor('y')(d)))
        .attr('height', d => _Chart._innerHeight - _Chart.config('yScale')(_Chart.accessor('y')(d)));
    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });

  }

  updateScales (data) {

    // TODO: I think this is a bug waiting to happen.
    // When xScale and yScale are set from default React `props`,
    // they point at a single instance of d3.scale that is
    // shared across all instances. `props` should be considered immutable
    // for this reason; however, this code will mutate the
    // d3 scales used by all instances of DiscreteBarChart.
    // Could the default prop instead be a factory function?

    this.config('xScale').rangeRoundBands([0, this._innerWidth], this.config('barSpacing'));
    this.config('yScale').range([this._innerHeight, 0]);
    this.config('xScale').domain(data.map(d => this.accessor('x')(d)));
    this.config('yScale').domain([0, d3.max(data, d => this.accessor('y')(d))]);

  }

}
