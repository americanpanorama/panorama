import d3 from 'd3';
import Koto from 'koto';
import Axis from './Axis';
import _ from 'lodash';

export default class ChartBase extends Koto {

  constructor (selection) {

    super(selection);

    this.xAxis = new Axis(this.base, 'x');
    this.yAxis = new Axis(this.base, 'y');

  }

  updateConfigs (props) {

    // In React, default props are cached, and therefore non-primitives are shared across all instances.
    // Therefore, we cannot rely on React to apply default non-primitive props;
    // they must be set manually here.
    props = _.merge(props, {
      margin: { value: { top: 0, right: 0, bottom: 0, left: 0 } },
      xAccessor: d => d.key,
      yAccessor: d => d.value,
      xScale: d3.scale.linear(),
      yScale: d3.scale.linear()
    });

    this
      .config('height', props.height)
      .config('width', props.width)
      .config('margin', props.margin)
      .config('xScale', props.xScale)
      .config('yScale', props.yScale)
      .accessor('x', props.xAccessor)
      .accessor('y', props.yAccessor)
      .draw(props.data);
      
  }

  /**
   * Default implementation of d3-style 'conventional margins'
   * (sim. to: http://bl.ocks.org/mbostock/3019563)
   */
  updateDimensions () {

    let margin = this.configs['margin'].value;

    this._width = this.configs['width'].value - margin.left - margin.right;
    this._height = this.configs['height'].value - margin.top - margin.bottom;

    this.base.attr('height', this.configs['height'].value);
    this.base.attr('width', this.configs['width'].value);

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    if (this.xAxis) this.xAxis.config('offset', [margin.left, this._height + margin.bottom]);
    if (this.yAxis) this.yAxis.config('offset', [margin.left, margin.top]);

  }

  updateScales (data) {

    this.xScale.range([0, this._width]);
    this.yScale.range([this._height, 0]);

    // default to set domain to all xAccesssor values along x-axis,
    // and 0 <> max yAccessor value along y-axis.
    this.xScale.domain(data.map(d => this.accessor('x')(d)));
    this.yScale.domain([0, d3.max(data, d => this.accessor('y')(d))]);

  }

  updateAxes () {

    if (this.xAxis) this.xAxis.config('scale', this.xScale);
    if (this.yAxis) this.yAxis.config('scale', this.yScale);

  }

  // Do something before `dataBind`
  preDraw (data) {

    this.updateDimensions();
    this.updateScales(data);
    this.updateAxes();

    if (this.xAxis) this.xAxis.update();
    if (this.yAxis) this.yAxis.update();

  }

  destroy () {

    this.base.remove();
    this.base = null;

  }

}
