import D3Component from '../charts/D3Component';
import d3 from 'd3';
import Axis from '../charts/common/Axis';

export default class AreaChartImpls extends D3Component {

  willMount() {
    let {xAccessor, yAccessor, xScale, yScale, interpolate} = this.props;
    if (this.props.xaxis) {
      this.setAxis(new Axis(this.props.xaxis, this.props.xScale));
    }

    if (this.props.yaxis) {
      this.setAxis(new Axis(this.props.yaxis, this.props.yScale));
    }

    this.points = [];

    this.areaGenerator = d3.svg.area()
      .interpolate(interpolate)
      .x(d => xScale(xAccessor(d)))
      .y0(d => yScale(0))
      .y1(d => yScale(yAccessor(d)));
  }

  onMount() {
    super.onMount();

    this.baseLayer = this.base.append('g').classed('area-layer', true);

    this._render();
  }

  getClosestDataIndex(pt) {
    if (!this.points.length) return null;

    let {data, xAccessor} = this.props;

    this.points.forEach((d) => {
      d.d = Math.abs(d.x - pt);
    });

    this.points.sort((a,b) => {return d3.ascending(a.d, b.d);});

    return this.points[0].i;
  }

  onMouseMoveHandler() {
    if (!this.hover || !this.tooltip) return;

    const mx = d3.mouse(this.baseLayer.node());
    const inverted = this.props.xScale.invert(mx[0]);
    const itemIdx = this.getClosestDataIndex(mx[0]);
    this.tooltip.setPosition(d3.event);

    if (itemIdx !== null) this.tooltip.setContent(this.props.data[0][itemIdx]);

  }

  preRender() {
    let {data, xScale, yScale, interpolate, xAccessor, yAccessor} = this.props;
    xScale.range([0, this.width]);
    yScale.range([this.height, 0]);

    this.updateAxis(0, xScale, this.props.xaxis);
    this.updateAxis(1, yScale, this.props.yaxis);

    this.areaGenerator
      .interpolate(interpolate)
      .x(d => xScale(xAccessor(d)))
      .y0(d => yScale(0))
      .y1(d => yScale(yAccessor(d)));

    this.points = [];
    if (data.length) {
      data[0].forEach((d,i) => {
        const x = xScale(xAccessor(d));
        this.points.push({x:x, i: i});
      });
    }
  }

  render() {
    let {data, xAccessor, yAccessor, xScale, yScale, fillColor, fillOpacity} = this.props;

    const area = this.baseLayer.selectAll('path.area').data(data);

    area.exit().remove();

    area.enter()
      .append('path')
      .attr('class', 'area');

    area
      .attr('d', d => this.areaGenerator(d))
      .style('fill', fillColor)
      .style('opacity', fillOpacity);
  }

  postRender() {
    if (this.props.interactive) {
      this.baseLayer.selectAll('path.area')
        .on('mouseover', this.onOver.bind(this))
        .on('mouseout', this.onOut.bind(this));
    }

  }

  onOver() {
    this.hover = true;
    if (this.tooltip) {
      this.tooltip.show();
    }
  }

  onOut() {
    this.hover = false;
    if (this.tooltip) {
      this.tooltip.hide();
    }
  }
}
