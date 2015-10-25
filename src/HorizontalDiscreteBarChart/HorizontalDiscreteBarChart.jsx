import d3 from 'd3';
import DiscreteBarChart, { DiscreteBarChartImpl } from '../DiscreteBarChart/DiscreteBarChart';

export default class HorizontalDiscreteBarChart extends DiscreteBarChart {

  // extend superclass `props` validators
  static propTypes = Object.assign({}, DiscreteBarChart.propTypes);

  // extend superclass `props` defaults
  static defaultProps = Object.assign({}, DiscreteBarChart.defaultProps, {
    xScale: d3.scale.linear(),
    yScale: d3.scale.ordinal()
  });

  constructor (props) {
    super(props);
    this.chartConstructor = HorizontalDiscreteBarChartImpl;
  }

  getClassSuffix () {
    return 'bar-chart horizontal';
  }

}


/*
TODO NEXT:
refactor this and map choropleth
then bring areachart in
then push to master
*/

export class HorizontalDiscreteBarChartImpl extends DiscreteBarChartImpl {

  constructor (selection, props) {

    super(selection, props);

    let _Chart = this;

    let layer = this.layer('bars');

    layer.insert = function () {
      return this.append('rect')
        .attr('class', 'bar')
        .attr('height', _Chart.config('yScale').rangeBand());
    };

    layer.on('enter', function () {
      return this
        .attr('x', d => '0')
        .attr('y', d => _Chart.config('yScale')(_Chart.accessor('y')(d)))
        .attr('width', d => _Chart.config('xScale')(_Chart.accessor('x')(d)))
        .attr('height', _Chart.config('yScale').rangeBand());
    });

  }

  updateScales (data) {

    // TODO: I think this is a bug waiting to happen.
    // See TODO in DiscreteBarChart.updateScales().
    this.config('yScale').rangeRoundBands([0, this._innerHeight], this.config('barSpacing'));
    this.config('yScale').domain(data.map(d => this.accessor('y')(d)));

    this.config('xScale').range([0, this._innerWidth]);
    this.config('xScale').domain([0, d3.max(data, d => this.accessor('x')(d))]);

  }

}
