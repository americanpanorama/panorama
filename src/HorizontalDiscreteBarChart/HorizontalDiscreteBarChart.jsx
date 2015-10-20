import d3 from 'd3';
import DiscreteBarChart, { DiscreteBarChartImpl } from '../DiscreteBarChart/DiscreteBarChart';

export default class HorizontalDiscreteBarChart extends DiscreteBarChart {

  constructor (props) {
    super(props);
    this.chartConstructor = HorizontalDiscreteBarChartImpl;
  }

  makeClassName () {
    return 'panorama chart barchart';
  }

}


export class HorizontalDiscreteBarChartImpl extends DiscreteBarChartImpl {
  constructor (selection) {
    super(selection);

    var _Chart = this;
    this.yScale = d3.scale.ordinal();
    this.xScale = d3.scale.linear();
    var layer = this.layer('bars');

    layer.insert = function () {
      return this.append('rect')
        .attr('class', 'bar')
        .attr('height', _Chart.yScale.rangeBand());
    };


    layer.on('enter', function () {
      return this
        .attr('x', function(d) { return '0'; })
        .attr('y', function(d) { return _Chart.yScale(_Chart.accessor('y')(d)); })
        .attr('width', function(d) { return _Chart.xScale(_Chart.accessor('x')(d)); })
        .attr('height', _Chart.yScale.rangeBand());
    });
  }

  updateScales (data) {
    var _Chart = this;
    this.yScale.rangeRoundBands([0, this._height], this.configs['barSpacing'].value);
    this.yScale.domain(data.map(function(d) { return _Chart.accessor('y')(d); }));

    this.xScale.range([0, this._width]);
    this.xScale.domain([0, d3.max(data, function(d) { return _Chart.accessor('x')(d); })]);

    if (this.xAxis) this.xAxis.config('scale', this.xScale);
    if (this.yAxis) this.yAxis.config('scale', this.yScale);
  }

}
