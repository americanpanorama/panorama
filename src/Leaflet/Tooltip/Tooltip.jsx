import { PropTypes } from 'react';
import {Popup, PropTypes as LeafletPropTypes } from 'react-leaflet';
import { Map, popup } from 'leaflet';
import assign from 'lodash/object/assign';

export default class Tooltip extends Popup {
  static propTypes = {
    children: PropTypes.node,
    map: PropTypes.instanceOf(Map),
    tooltipContainer: PropTypes.object,
    position: LeafletPropTypes.latlng,
  };

  componentWillMount() {
    super.componentWillMount();

    const { children, map, ...props } = this.props;
    const options = assign({}, props);

    options.className = options.className ? options.className + ' panorama-leaflet-tip' : 'panorama-leaflet-tip';
    options.closeButton = false;
    options.offset = options.offset || [0, -3];

    this.leafletElement = popup(options);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    const { map, position, isOpen, content } = this.props;
    if (position !== prevProps.position) {
      this.leafletElement.setLatLng(position);
    }

    if (content !== prevProps.content) {
      this.leafletElement.setContent(content);
    }

    if (isOpen !== prevProps.isOpen) {
      if (isOpen) {
        this.leafletElement.openOn(map);
        this.renderPopupContent();
      } else {
        map.closePopup();
        this.removePopupContent();
      }
    }

  }
}