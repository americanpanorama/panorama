import d3 from 'd3';
import DiscreteBarChart, { DiscreteBarChartImpl } from '../DiscreteBarChart/DiscreteBarChart';
import _ from 'lodash';

export default class HorizontalDiscreteBarChart extends DiscreteBarChart {

  // 'inherit' static validatorsand defaults
  static propTypes = _.merge(DiscreteBarChart.propTypes);
  static defaultProps = _.merge(DiscreteBarChart.defaultProps);

  constructor (props) {

    super(props);
    this.chartConstructor = HorizontalDiscreteBarChartImpl;

  }

  getClassSuffix () {
    return 'barchart';
  }

}

export class HorizontalDiscreteBarChartImpl extends DiscreteBarChartImpl {

  constructor (selection) {

    super(selection);

    let _Chart = this;

    let layer = this.layer('bars');

    layer.insert = function () {
      return this.append('rect')
        .attr('class', 'bar')
        .attr('height', _Chart.yScale.rangeBand());
    };


    layer.on('enter', function () {
      return this
        .attr('x', d => '0')
        .attr('y', d => _Chart.yScale(_Chart.accessor('y')(d)))
        .attr('width', d => _Chart.xScale(_Chart.accessor('x')(d)))
        .attr('height', _Chart.yScale.rangeBand());
    });

  }

  updateConfigs (props) {
    
    // In React, default props are cached, and therefore non-primitives are shared across all instances.
    // Therefore, we cannot rely on React to apply default non-primitive props;
    // they must be set manually here.
    props = _.merge(props, {
      xScale: d3.scale.linear(),
      yScale: d3.scale.ordinal()
    });

    super.updateConfigs(props);

  }

  updateScales (data) {

    this.yScale.rangeRoundBands([0, this._height], this.configs['barSpacing'].value);
    this.yScale.domain(data.map(d => this.accessor('y')(d)));

    this.xScale.range([0, this._width]);
    this.xScale.domain([0, d3.max(data, d => this.accessor('x')(d))]);

  }

}
