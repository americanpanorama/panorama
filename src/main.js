'use strict';

// Base classes, exposed for subclassing;
// not intended for direct use.
import Axis from './charts/Axis';
import ChartBase from './charts/ChartBase';
import PanoramaChart from './charts/PanoramaChart';

// Panorama components.
import AreaChart from './AreaChart/AreaChart';
import CartoDBLoader from './CartoDBLoader/CartoDBLoader';
import CartoDBTileLayer from './CartoDBTileLayer/CartoDBTileLayer';
import ChartSlider from './ChartSlider/ChartSlider';
import DiscreteBarChart from './DiscreteBarChart/DiscreteBarChart';
import Donut from './Leaflet/Donut/Donut';
import HashManager from './HashManager/HashManager';
import HorizontalDiscreteBarChart from './HorizontalDiscreteBarChart/HorizontalDiscreteBarChart';
import IntroManager from './IntroManager/IntroManager';
import ItemSelector from './ItemSelector/ItemSelector';
import LeafletChoropleth from './Leaflet/Choropleth/Choropleth';
import Legend from './Legend/Legend';
import MapChoropleth from './MapChoropleth/MapChoropleth';
import Navigation from './Navigation/Navigation';
import OffsetAreaChart from './OffsetAreaChart/OffsetAreaChart';
import { PanoramaDispatcher, PanoramaEventTypes } from './PanoramaDispatcher.js';
import Punchcard from './Punchcard/Punchcard';
import TimeBasedMarkers from './TimeBasedMarkers/TimeBasedMarkers';
import Tooltip from './Leaflet/Tooltip/Tooltip';

export default {
  Axis,
  ChartBase,
  PanoramaChart,
  AreaChart,
  CartoDBLoader,
  CartoDBTileLayer,
  ChartSlider,
  DiscreteBarChart,
  Donut,
  HashManager,
  HorizontalDiscreteBarChart,
  IntroManager,
  ItemSelector,
  LeafletChoropleth,
  Legend,
  MapChoropleth,
  Navigation,
  OffsetAreaChart,
  PanoramaDispatcher,
  PanoramaEventTypes,
  Punchcard,
  TimeBasedMarkers,
  Tooltip
};
