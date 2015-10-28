import d3 from 'd3';
import Koto from 'koto';
import Axis from './Axis';

export default class ChartBase extends Koto {

  constructor (selection, props) {

    super(selection);

    let xAxisProps,
      yAxisProps;

    if (props.axisProps) {
      xAxisProps = Object.assign({}, props.axisProps, {
        orient: props.axisProps.xOrient
      });
      yAxisProps = Object.assign({}, props.axisProps, {
        orient: props.axisProps.yOrient
      });
    }

    Object.assign(this.configs, {
      width: { value: props.width },
      height: { value: props.height },
      margin: { value: props.margin },
      xScale: { value: props.xScale },
      yScale: { value: props.yScale },
      xAxis: { value: props.axisProps ? new Axis(this.base, 'x', xAxisProps) : null },
      yAxis: { value: props.axisProps ? new Axis(this.base, 'y', yAxisProps) : null }
    });

  }

  updateConfigs (props) {

    this
      .config('height', props.height)
      .config('width', props.width)
      .config('margin', props.margin)
      .config('xScale', props.xScale)
      .config('yScale', props.yScale)
      .accessor('x', props.xAccessor)
      .accessor('y', props.yAccessor);

    // update axes, or remove them if no longer configured
    if (this.config('xAxis')) {
      if (props.axisProps) {
        this.config('xAxis').updateConfigs(Object.assign({}, props.axisProps, {
          orient: props.axisProps.xOrient
        }));
      } else {
        this.config('xAxis').destroy();
        this.config('xAxis', null);
      }
    }

    if (this.config('yAxis')) {
      if (props.axisProps) {
        this.config('yAxis').updateConfigs(Object.assign({}, props.axisProps, {
          orient: props.axisProps.yOrient
        }));
      } else {
        this.config('yAxis').destroy();
        this.config('yAxis', null);
      }
    }

  }

  /**
   * Default implementation of d3-style 'conventional margins'
   * (sim. to: http://bl.ocks.org/mbostock/3019563)
   */
  updateDimensions () {

    let margin = this.config('margin');

    this._innerWidth = this.config('width') - margin.left - margin.right;
    this._innerHeight = this.config('height') - margin.top - margin.bottom;

    this.base.attr('width', this.config('width'));
    this.base.attr('height', this.config('height'));

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  }

  updateScales (data) {

    this.config('xScale').range([0, this._innerWidth]);
    this.config('yScale').range([this._innerHeight, 0]);

    // default to set domain to all xAccesssor values along x-axis,
    // and 0 <> max yAccessor value along y-axis.
    this.config('xScale').domain(data.map(d => this.accessor('x')(d)));
    this.config('yScale').domain([0, d3.max(data, d => this.accessor('y')(d))]);

  }

  // Do something before `dataBind`
  preDraw (data) {

    this.updateDimensions();
    this.updateScales(data);

    let margin = this.config('margin');

    if (this.config('xAxis')) {
      this.config('xAxis').update(
        this.config('xScale'),
        [margin.left, margin.top + this._innerHeight]
      );
    }
    if (this.config('yAxis')) {
      this.config('yAxis').update(
        this.config('yScale'),
        [margin.left, margin.top]
      );
    }

  }

  destroy () {

    this.base.remove();
    this.base = null;

  }

}
