import d3 from 'd3';
import DiscreteBarChartImpls from '../DiscreteBarChart/DiscreteBarChartImpls';

export default class HorizontalDiscreteBarChartImpls extends DiscreteBarChartImpls {

  preRender() {
    let {data, xAccessor, yAccessor, xScale, yScale} = this.props;

    yScale.rangeRoundBands([0, this.height], this.barSpacing);
    yScale.domain(data.map(d => yAccessor(d)));
    xScale.range([0, this.width]);
    xScale.domain([0, d3.max(data, d => xAccessor(d))]);

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
      .attr('x', '0')
      .attr('y', d => yScale(yAccessor(d)))
      .attr('width',  d => xScale(xAccessor(d)))
      .attr('height', yScale.rangeBand());
  }

}