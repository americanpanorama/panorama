import D3Component from '../charts/D3Component';
import d3 from 'd3';
import Axis from '../charts/common/Axis';

export default class ScatterPlotImpls extends D3Component {

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

  preRender() {
    let {data, xAccessor, yAccessor, xScale, yScale, dotRadiusScale, dotRadiusAccessor} = this.props;

    xScale.range([0, this.width]);
    xScale.domain(d3.extent(data, d => xAccessor(d))).nice();

    yScale.range([this.height, 0]);
    yScale.domain(d3.extent(data, d => yAccessor(d))).nice();

    if (dotRadiusScale && dotRadiusAccessor) {
      dotRadiusScale.domain(d3.extent(data, d => dotRadiusAccessor(d)));
    }
  }

  render() {
    let {data, xAccessor, yAccessor, xScale, yScale, dotRadius, dotRadiusScale, dotRadiusAccessor, dotColorScale, dotColorAccessor} = this.props;
    const dots = this.base.selectAll('.dot').data(data);

    dots.exit().remove();

    dots.enter()
      .append('circle')
      .attr('class', 'dot');

    dots
      .attr('r', (d) => {
        if (!dotRadiusScale && !dotRadiusAccessor) return dotRadius;
        return dotRadiusScale(dotRadiusAccessor(d));
      })
      .attr('cx', d => xScale(xAccessor(d)))
      .attr('cy', d => yScale(yAccessor(d)))
      .style('fill', (d) => {
        if (!dotColorScale || !dotColorAccessor) return 'lime';
        return dotColorScale(dotColorAccessor(d));
      });
  }

  postRender() {
    let {selected, selectionAccessor, interactive} = this.props;
    const dots = this.base.selectAll('.dot');
    if (interactive) {
      dots
        .on('click', this.dispatch.click)
        .on('mouseover', this.dispatch.mouseOver)
        .on('mouseout', this.dispatch.mouseOut);
    }
    if (selected) {
      dots
        .classed('selected', d => selectionAccessor(d) === selected);
    }
  }
}
