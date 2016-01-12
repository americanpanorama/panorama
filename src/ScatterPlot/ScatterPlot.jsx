import d3 from 'd3';
import { PropTypes } from 'react';
import D3ReactBase from '../charts/D3ReactBase';
import ScatterPlotImpls from './ScatterPlotImpls';

import './style.scss';

export default class ScatterPlot extends D3ReactBase {
  constructor (props) {
    super(props);
    this.chartConstructor = ScatterPlotImpls;
  }

  static propTypes = {...D3ReactBase.propTypes,
    dotRadiusScale: PropTypes.func,
    dotRadius: PropTypes.number,
    dotRadiusAccessor: PropTypes.func,
    dotColorScale: PropTypes.func,
    dotColorAccessor: PropTypes.func
  };

  static defaultProps = {...D3ReactBase.defaultProps,
    xScale: d3.scale.linear(),
    yScale: d3.scale.linear(),
    className: 'scatterplot',
    dotRadius: 3,
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
