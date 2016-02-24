import D3Component from '../charts/D3Component';
import d3 from 'd3';
import Axis from '../charts/common/Axis';

export default class OffsetAreaChartImpls extends D3Component {

  willMount() {
    let {xAccessor, yAccessor, xScale, yScale, interpolate} = this.props;
    this.areaGenerator = d3.svg.area()
      .interpolate(interpolate)
      .x(d => xScale(xAccessor(d)))
      .y0(d => yScale(0))
      .y1(d => yScale(yAccessor(d)));
  }

  onMount() {
    super.onMount();

    this.lineLayer = this.base.append('g').classed('offset-area-lines', true);

    this._render();
  }

  preRender() {
    let {xScale, yScale, xAccessor, yAccessor, areaChartConfig, interpolate} = this.props;

    var maxHeight = this.height - (this.props.areaChartData.length * this.props.chartSpacing);
    xScale.range([0, this.width]);
    yScale.range([maxHeight, 0]);

    this.areaGenerator = d3.svg.area()
      .interpolate(interpolate)
      .x(d => xScale(areaChartConfig.xAccessor(d)))
      .y0(d => yScale(0))
      .y1(d => yScale(areaChartConfig.yAccessor(d)));
  }

  areaOffsetTranslation(idx) {
    let {chartSpacing} = this.props;

    return 'translate(0,' + (chartSpacing * idx) + ')';
  }

  lineOffsetTranslation(idx) {
    let {data, chartSpacing, yScale} = this.props;
    var bottom = yScale(0);
    const pos = data.length - idx;
    const y = -chartSpacing * pos;
    return 'translate(0,' + y + ')';
  }

  render() {
    let {data, xAccessor,
      yAccessor, xScale,
      yScale, fillColor,
      fillOpacity, areaChartData,
      colorPalette, metadataAccessor,
      chartIdAccessor, selectedChartId,
      circleRadius, interactive} = this.props;


    //
    // AreaCharts
    // 
    const area = this.base.selectAll('g.area-container').data(areaChartData);

    // exit
    area.exit().remove();

    // enter
    area.enter()
      .append('g')
      .attr('class', 'area-container')
    .append('path')
      .attr('class', 'area');

    // update
    area
      .attr('transform', (d,i) => this.areaOffsetTranslation(i))
      .classed('selected',  d => chartIdAccessor(d) === selectedChartId ? true : false)
    .selectAll('path')
      .attr('d', d => this.areaGenerator(d))
      .attr('fill', (d,i,j) => {
        return colorPalette[j % colorPalette.length];
      });


    //
    // lines
    //
    const baseY = yScale(0) + this.props.areaChartData.length * this.props.chartSpacing;
    const domain = xScale.domain();

    this.lineLayer
      .attr('transform', 'translate(0, '+ baseY + ')');

    const lines = this.lineLayer.selectAll('g.line-group').data(data);

    // exit
    lines.exit().remove();

    // enter
    lines.enter()
      .append('g')
        .attr('class', 'line-group')
      .append('line')
        .attr('class', 'lifespan');

    // update
    lines
      .attr('transform', (d,i) => this.lineOffsetTranslation(i))
      .classed('selected',  d => chartIdAccessor(d) == selectedChartId ? true : false)
    .selectAll('line')
      .attr('x1', d => xScale(
        Math.max(xAccessor(d, 0), domain[0])
      ))
      .attr('x2', d => xScale(
          Math.min(xAccessor(d, 1), domain[1])
      ))
      .attr('y1', 0)
      .attr('y2', 0)
      .style('stroke', (d, i) => colorPalette[i % colorPalette.length]);


    //
    // circles
    // 
    const circles = lines.selectAll('circle')
      .data(d => metadataAccessor(d));

    // exit
    circles.exit().remove();

    // enter
    circles
      .enter()
      .append('circle');

    // update
    circles
      .attr('cx', d => xScale(
        Math.max(d, domain[0])
      ))
      .attr('cy', 0)
      .attr('r', circleRadius)
      .style('fill', (d, i, j) => colorPalette[j % colorPalette.length]);
  }

  postRender() {}
}
