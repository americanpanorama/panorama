import d3 from 'd3';
import ChartBase from '../charts/ChartBase';
import PanoramaChart from '../charts/PanoramaChart.jsx';
import './style.scss';

export default class AreaChart extends PanoramaChart {
  constructor (props) {
    super(props);
    this.chartConstructor = AreaChartImpl;
  }

  getClassSuffix () {
    return 'area-chart';
  }
}

export class AreaChartImpl extends ChartBase {

  constructor (selection, props) {

    super(selection, props);

    let areaGenerator = d3.svg.area()
      .interpolate('basis')
      .x(d => this.config('xScale')(this.accessor('x')(d)))
      .y0(d => this.config('yScale')(0))
      .y1(d => this.config('yScale')(this.accessor('y')(d)));


    // append group to chart
    var area = this.baseLayer = this.base.append('g').classed('area-layer', true);

    this.updateDimensions();

    // define layer
    let layer = this.layer('area-layer', area, {
      dataBind: function (data) {
        return this.selectAll('path.area').data(data);
      },

      insert: function () {
        return this.append('path')
          .attr('class', 'area');
      }
    });

    // Setup life-cycle events on layers
    layer.on('update', function () {
      // this => base selection
      return this
        .attr('d', d => areaGenerator(d));
    })
    .on('enter', function () {
      // this => enter selection
      return this
        .attr('d', d => areaGenerator(d));
    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });
  }
  
  updateScales (data) {

    this.config('xScale').range([0, this._innerWidth]);
    this.config('yScale').range([this._innerHeight, 0]);

  }

}
