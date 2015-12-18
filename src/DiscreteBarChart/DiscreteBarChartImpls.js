import D3Component from '../charts/D3Component';
import d3 from 'd3';
import Axis from '../charts/common/Axis';

export default class DiscreteBarChartImpls extends D3Component {

  willMount() {
    if (this.props.xaxis) {
      this.setAxis(new Axis(this.props.xaxis, this.props.xScale));
    }

    if (this.props.yaxis) {
      this.setAxis(new Axis(this.props.yaxis, this.props.yScale));
    }
  }

  onMount(props) {
    super.onMount(props);
    this._render();
  }

  get barSpacing() {
    return this.props.barSpacing || 0.1;
  }

  preRender() {
    let {data, xAccessor, yAccessor, xScale, yScale} = this.props;

    xScale.rangeRoundBands([0, this.width], this.barSpacing);
    xScale.domain(data.map(d => xAccessor(d)));
    yScale.range([this.height, 0]);
    yScale.domain([0, d3.max(data, d => yAccessor(d))]);

    this.updateAxis(0, xScale, this.props.xaxis);
    this.updateAxis(1, yScale, this.props.yaxis);
  }

  render() {
    let {data, xAccessor, yAccessor, xScale, yScale} = this.props;

    const bars = this.base.selectAll('.bar').data(data);

    bars.exit().remove();

    bars.enter()
      .append('rect')
      .attr('class', 'bar');

    bars
      .attr('x', d => xScale(xAccessor(d)))
      .attr('y', d => yScale(yAccessor(d)))
      .attr('width',  xScale.rangeBand())
      .attr('height', d => this.height - yScale(yAccessor(d)));

  }

  postRender() {
    let {selected, selectionAccessor, interactive} = this.props;
    const bars = this.base.selectAll('.bar');
    if (interactive) {
      bars
        .on('click', this.dispatch.click)
        .on('mouseover', this.dispatch.mouseOver)
        .on('mouseout', this.dispatch.mouseOut);
    }
    if (selected) {
      bars
        .classed('selected', d => selectionAccessor(d) === selected);
    }
  }
}
