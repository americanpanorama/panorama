import React, {PropTypes} from 'react';
import { MapLayer } from 'react-leaflet';
import { geoJson, DomEvent } from 'leaflet';
import pick from 'lodash/object/pick';
import isObject from 'lodash/lang/isObject';
import isArray from 'lodash/lang/isArray';
import assign from 'lodash/object/assign';

const OPTIONS = [
  'stroke',
  'color',
  'weight',
  'opacity',
  'fill',
  'fillColor',
  'fillOpacity',
  'fillRule',
  'dashArray',
  'lineCap',
  'lineJoin',
  'clickable',
  'pointerEvents',
  'className',
];

require('./style.scss');

export default class Cholopleth extends MapLayer {
  static PropTypes = {
    styler: PropTypes.func,
    onEachFeature: PropTypes.func,
    setTooltipContent: PropTypes.func,
    selectedStyle: PropTypes.object,
    onFeatureClick: PropTypes.func
  };

  static defaultProps = {
    selectedStyle: {}
  };

  constructor() {
    super();

    this.mouseTimer = null;
    this.currentId = null;
    this.hasTooltip = false;
    this.state = {
      showTooltip: false,
      tooltipPosition: null,
      tooltipContent: ''
    };
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  componentWillMount() {
    console.log(this.props.children);
    super.componentWillMount();
    const { data, children, ...props } = this.props;
    this.setTooltipFlag();

    const options = {
      style: props.style || null,
      onEachFeature: props.onEachFeature || this.onEachFeature.bind(this),
      filter: props.filter || null,
      pointToLayer: props.pointToLayer || null,
      coordsToLatLng: props.coordsToLatLng || null,
    };

    this.leafletElement = geoJson(data, options);
  }

  componentDidMount() {
    this.leafletElement.addTo(this.props.map);
    if (this.hasTooltip) this.props.map.on('mousemove', this.onMouseMove.bind(this));
  }

  componentWillUnmount() {}

  componentDidUpdate() {}

  setTooltipFlag() {
    const { children } = this.props;
    try{
      this.hasTooltip = (children.type.name === 'Tooltip') ? true : false;
    }catch(err) {}
  }

  getPathOptions(props) {
    return pick(props, OPTIONS);
  }

  getTooltipContent(feature) {
    if (typeof this.props.setTooltipContent === 'function') {
      return this.props.setTooltipContent(feature);
    }

    return '';
  }

  onMouseOver(evt) {
    if (this.currentId === evt.target) return;
    evt.target.setStyle(this.props.selectedStyle);

    if (this.currentId !== evt.target) {
      this.currentId = evt.target;
      let content = this.getTooltipContent(evt.target.feature);
      this.setState({showTooltip: true, tooltipPosition: evt.latlng, tooltipContent: content});
    }

    if (!L.Browser.ie && !L.Browser.opera) {
      evt.target.bringToFront();
    }
  }

  onMouseOut(evt) {
    this.leafletElement.resetStyle(evt.target);
    this.currentId = null;
    clearTimeout(this.mouseTimer);
    this.mouseTimer = setTimeout(() => {
      if (this.currentId === null ){
        this.currentId = null;
        this.setState({showTooltip: false});
      }
    }, 200);
  }

  onMouseMove(evt) {
    if (!this.currentId) return;
    DomEvent.stopPropagation(evt);
    this.setState({tooltipPosition: evt.latlng});
  }

  onClick(evt) {
    if (typeof this.props.onFeatureClick === 'function') {
      this.props.onFeatureClick(evt.target, this.props.map);
    }
  }

  onEachFeature(feature, layer) {
    if (this.hasTooltip) {
      layer.on({
        mouseover: this.onMouseOver.bind(this),
        mouseout: this.onMouseOut.bind(this)
      });
    }

    layer.on('click', this.onClick.bind(this));
  }

  render() {
    return this.renderChildrenWithProps({
      tooltipContainer: this.leafletElement,
      popupContainer: this.leafletElement,
      position: this.state.tooltipPosition,
      isOpen: this.state.showTooltip,
      content: this.state.tooltipContent
    });
  }
}
