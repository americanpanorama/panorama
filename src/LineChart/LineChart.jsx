import d3 from 'd3';
import ChartBase from '../charts/ChartBase';
import PanoramaChart from '../charts/PanoramaChart.jsx';
import { PropTypes } from 'react';
import './style.scss';

export default class LineChart extends PanoramaChart {

  // extend superclass `props` validators
  static propTypes = Object.assign({}, PanoramaChart.propTypes, {
    strokeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    strokeOpacity: PropTypes.number,
    isInterpolated: PropTypes.bool
  });

  // extend superclass `props` defaults
  static defaultProps = Object.assign({}, PanoramaChart.defaultProps, {
    isInterpolated: false
  });

  constructor (props) {
    super(props);
    this.chartConstructor = LineChartImpl;
  }

  getClassSuffix () {
    return 'line-chart';
  }
}

export class LineChartImpl extends ChartBase {

  constructor (selection, props) {

    super(selection, props);

    let chart = this;
    this.configs.strokeColor = { value: props.strokeColor };
    this.configs.strokeOpacity = { value: props.strokeOpacity };

    let lineGenerator = d3.svg.line();

    if (props.isInterpolated) {
      lineGenerator.interpolate('basis');
    }

    lineGenerator
      .x(d => this.config('xScale')(this.accessor('x')(d)))
      .y(d => this.config('yScale')(this.accessor('y')(d)));

    // append group to chart
    let line = this.baseLayer = this.base.append('g').classed('line-layer', true);

    this.updateDimensions();

    // define layer
    let layer = this.layer('line-layer', line, {
      dataBind: function (data) {
        return this.selectAll('path.line').data(data);
      },

      insert: function () {
        return this.append('path')
          .attr('class', 'line')
          .style({
            stroke: chart.config('strokeColor'),
            strokeOpacity: chart.config('strokeOpacity')
          });
      }
    });

    // Setup life-cycle events on layers
    layer.on('update', function () {
      // this => base selection
    })
    .on('enter', function () {
      // this => enter selection
    })
    .on('merge', function () {
      // this => base selection
      return this
        .attr('d', d => lineGenerator(d))
        .style({
          stroke: chart.config('strokeColor'),
          strokeOpacity: chart.config('strokeOpacity')
        });
    })
    .on('exit', function () {
      // this => exit selection
    });
  }

  updateConfigs (props) {

    super.updateConfigs(props);
    this
      .config('strokeColor', props.strokeColor)
      .config('strokeOpacity', props.strokeOpacity);

  }
  
  updateScales (data) {

    this.config('xScale').range([0, this._innerWidth]);
    this.config('yScale').range([this._innerHeight, 0]);

  }

}
