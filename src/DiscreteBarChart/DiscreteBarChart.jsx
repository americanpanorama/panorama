import d3 from 'd3';
import ChartBase from '../charts/ChartBase';
import PanoramaChart from '../charts/PanoramaChart';
import './style.scss';

export default class DiscreteBarChart extends PanoramaChart {
  constructor (props) {
    super(props);
    this.chartConstructor = DiscreteBarChartImpl;
  }

  makeClassName () {
    return 'panorama chart barchart';
  }
}

export class DiscreteBarChartImpl extends ChartBase {
  constructor(selection){
    super(selection);
    var _Chart = this;

    this.configs['barSpacing'] = {value: 0.1};

    // append group to chart
    var bars = this.baseLayer = this.base.append('g').classed('bars', true);

    this.updateDimensions();

    // define layer
    var layer = this.layer('bars', bars, {
      dataBind: function (data) {
        return this.selectAll('rect').data(data);
      },
      insert: function () {
        return this.append('rect')
          .attr('class', 'bar')
          .attr('width', _Chart.xScale.rangeBand());
      }
    });

    // Setup life-cycle events on layers
    layer.on('enter', function () {
      return this
        .attr('x', function(d) { return _Chart.xScale(_Chart.accessor('x')(d)); })
        .attr('y', function(d) { return _Chart.yScale(_Chart.accessor('y')(d)); })
        .attr('height', function(d) { return _Chart._height - _Chart.yScale(_Chart.accessor('y')(d)); });
    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });
  }

  updateScales(data) {
    var _Chart = this;
    this.xScale.rangeRoundBands([0, this._width], this.configs['barSpacing'].value);
    this.yScale.range([this._height, 0]);
    this.xScale.domain(data.map(function(d) { return _Chart.accessor('x')(d); }));
    this.yScale.domain([0, d3.max(data, function(d) { return _Chart.accessor('y')(d); })]);

    if (this.xAxis) this.xAxis.config('scale', this.xScale);
    if (this.yAxis) this.yAxis.config('scale', this.yScale);
  }

  updateDimensions() {
    var margin = this.configs['margin'].value;
    this._width = this.configs['width'].value - margin.left - margin.right;
    this._height = this.configs['height'].value - margin.top - margin.bottom;

    this.base.attr('height', this.configs['height'].value);
    this.base.attr('width', this.configs['width'].value);

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    if (this.xAxis) this.xAxis.config('offset', [margin.left, this._height + margin.bottom]);
    if (this.yAxis) this.yAxis.config('offset', [margin.left, margin.top]);
  }

  // Do something before `dataBind`
  preDraw(data) {
    this.updateDimensions();
    this.updateScales(data);

    if (this.xAxis) this.xAxis.update();
    if (this.yAxis) {
      this.yAxis.config('orient', 'left');
      this.yAxis.update();
    }
  }
}
