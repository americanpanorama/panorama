import d3 from 'd3';
import { PropTypes } from 'react';
import D3ReactBase from '../charts/D3ReactBase';
import MapChoroplethImpls from './MapChoroplethImpls';
import './styles.scss';

export default class MapChoropleth extends D3ReactBase {
  // extend superclass `props` validators
  static propTypes = {...D3ReactBase.propTypes,
    projection: PropTypes.string,
    mapScale: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    selected: PropTypes.any,
    selectedAccessor: PropTypes.func,
    hoverStyle: PropTypes.object
  };

  // extend superclass `props` defaults
  static defaultProps = {...D3ReactBase.defaultProps,
    projection: 'albersUsa',
    className: 'map choropleth',
    mapScale: 500,
  };

  constructor (props) {
    super(props);
    this.chartConstructor = MapChoroplethImpls;
  }
}
