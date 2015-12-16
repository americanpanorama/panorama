import d3 from 'd3';
import DiscreteBarChart from '../DiscreteBarChart/DiscreteBarChart';
import HorizontalDiscreteBarChartImpls from './HorizontalDiscreteBarChartImpls';

export default class HorizontalDiscreteBarChart extends DiscreteBarChart {

  static propTypes = { ...DiscreteBarChart.propTypes};

  // extend superclass `props` defaults
  static defaultProps = {...DiscreteBarChart.defaultProps,
    xScale: d3.scale.linear(),
    yScale: d3.scale.ordinal()
  };

  constructor (props) {
    super(props);
    this.chartConstructor = HorizontalDiscreteBarChartImpls;
  }

}
