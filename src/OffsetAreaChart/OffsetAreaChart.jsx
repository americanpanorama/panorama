import React, { PropTypes } from 'react';
import d3 from 'd3';
import D3ReactBase from '../charts/D3ReactBase';
import AreaChart from '../AreaChart/AreaChart.jsx';
import OffsetAreaChartImpls from './OffsetAreaChartImpls';

import './style.scss';

export default class OffsetAreaChart extends D3ReactBase {

  // extend superclass `props` validators
  static propTypes = {...D3ReactBase.propTypes,
    areaChartData: PropTypes.array,
    chartSpacing: PropTypes.number,
    colorPalette: PropTypes.array,
    selectedChartId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    chartIdAccessor: PropTypes.func,
    metadataAccessor: PropTypes.func,
    interpolate: PropTypes.string,
    circleRadius: PropTypes.number
  };

  // extend superclass `props` defaults
  static defaultProps = {...D3ReactBase.defaultProps,
    className: 'offset-area-chart',
    areaChartData: [],
    chartSpacing: 4,
    colorPalette: null,
    selectedChartId: null,
    chartIdAccessor: null,
    metadataAccessor: null,
    interpolate: 'basis',
    circleRadius: 2
  };

  constructor (props) {
    super(props);
    this.chartConstructor = OffsetAreaChartImpls;

    // This accessor is implemented by the React component as well as the d3 chart.
    this.chartIdAccessor = props.chartIdAccessor;
  }
}
