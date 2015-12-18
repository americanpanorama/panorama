import d3 from 'd3';
import { PropTypes } from 'react';
import D3ReactBase from '../charts/D3ReactBase';
import LineChartImpls from './LineChartImpls';

import './style.scss';

export default class LineChart extends D3ReactBase {

  // extend superclass `props` validators
  static propTypes = {...D3ReactBase.propTypes,
    strokeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    strokeOpacity: PropTypes.number,
    isInterpolated: PropTypes.bool,
    interpolate: PropTypes.string
  };

  // extend superclass `props` defaults
  static defaultProps = {...D3ReactBase.defaultProps,
    className: 'line-chart',
    isInterpolated: false,
    interpolate: 'basis',
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

  constructor (props) {
    super(props);
    this.chartConstructor = LineChartImpls;
  }
}
