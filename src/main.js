'use strict';

import 'source-map-support/register';

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
import LineChart from './LineChart/LineChart';
import MapChoropleth from './MapChoropleth/MapChoropleth';
import Navigation from './Navigation/Navigation';
import OffsetAreaChart from './OffsetAreaChart/OffsetAreaChart';
import { PanoramaDispatcher, PanoramaEventTypes } from './PanoramaDispatcher.js';
import Punchcard from './Punchcard/Punchcard';
import TimeBasedMarkers from './TimeBasedMarkers/TimeBasedMarkers';
import ScatterPlot from './ScatterPlot/ScatterPlot';
import Tooltip from './Leaflet/Tooltip/Tooltip';
import TexturalList from './TexturalList/TexturalList';

export default {
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
  LineChart,
  MapChoropleth,
  Navigation,
  OffsetAreaChart,
  PanoramaDispatcher,
  PanoramaEventTypes,
  Punchcard,
  TimeBasedMarkers,
  Tooltip,
  ScatterPlot,
  TexturalList
};
