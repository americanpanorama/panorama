import D3Component from '../charts/D3Component';
import d3 from 'd3';
import Axis from '../charts/common/Axis';

export default class LineChartImpls extends D3Component {
  willMount() {
    if (this.props.xaxis) {
      this.setAxis(new Axis(this.props.xaxis, this.props.xScale));
    }

    if (this.props.yaxis) {
      this.setAxis(new Axis(this.props.yaxis, this.props.yScale));
    }

    this.lineGenerator = d3.svg.line();
  }

  onMount(props) {
    super.onMount(props);

    this.lineLayer = this.base.append('g').classed('line-layer', true);

    this._render();
  }

  preRender() {
    let {data, xAccessor, yAccessor, xScale, yScale, isInterpolated, interpolate} = this.props;

    xScale.range([0, this.width]);
    yScale.range([this.height, 0]);

    this.updateAxis(0, xScale, this.props.xaxis);
    this.updateAxis(1, yScale, this.props.yaxis);

    const inter = isInterpolated ? interpolate : 'linear';
    this.lineGenerator
      .interpolate(inter)
      .x(d => xScale(xAccessor(d)))
      .y(d => yScale(yAccessor(d)));
  }

  render() {
    let {data, xAccessor, yAccessor, xScale, yScale, strokeColor, strokeOpacity} = this.props;

    const lines = this.lineLayer.selectAll('path.line').data(data);

    lines.exit().remove();

    lines.enter()
      .append('path')
      .attr('class', 'line');

    lines
      .attr('d', d => this.lineGenerator(d))
      .style({
        stroke: strokeColor,
        strokeOpacity: strokeOpacity
      });

  }

  postRender() {
  }
}