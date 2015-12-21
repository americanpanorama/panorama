import { PropTypes } from 'react';
import d3 from 'd3';
import D3ReactBase from '../charts/D3ReactBase';
import DiscreteBarChartImpls from './DiscreteBarChartImpls';

import './style.scss';

export default class DiscreteBarChart extends D3ReactBase {
  constructor (props) {
    super(props);
    this.chartConstructor = DiscreteBarChartImpls;
  }

  static propTypes = {...D3ReactBase.propTypes,
    barSpacing: PropTypes.number
  };

  static defaultProps = {...D3ReactBase.defaultProps,
    barSpacing: 0.1,
    xScale: d3.scale.ordinal(),
    className: 'bar-chart vertical',
    xaxis: {
      className: 'x axis',
      orient: 'bottom',
      position: 'bottom',
      attr: {
        dx: '0',
        dy: '0.5em'
      },
      style: {
        'text-anchor': 'middle'
      }
    },
    yaxis: {
      className: 'y axis',
      orient: 'left',
    }
  };
}
