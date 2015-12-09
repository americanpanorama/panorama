import { PropTypes } from 'react';
import { MapLayer } from 'react-leaflet';
import d3 from 'd3';

export default class TimeBasedMarkers extends MapLayer {

  static propTypes = {
    features: PropTypes.object.isRequired,
    currentDate: PropTypes.instanceOf(Date)
  }

  static defaultProps = {
    features: {},
    currentDate: null
  }

  constructor (props) {

    super(props);

    this.map = null;

  }

  componentDidMount () {

    this.markers = [];

    this.map = this.props.map;

    this._el = L.DomUtil.create('div', 'panorama time-based-markers-layer leaflet-zoom-hide leaflet-d3-overlay');
    this.map.getPanes().overlayPane.appendChild(this._el);

    this.svg = d3.select(this._el).append('svg');

    this.container = this.svg.append('g').attr('class', 'panorama time-based-markers-container');

    this.setOverlayPosition();

    this.map.on('viewreset', this._reset, this);
    if (this.dirty) {
      this.draw(this.props.features);
    }

  }

  componentWillUnmount () {

    this.map.getPanes().overlayPane.removeChild(this._el);
    this.map.off('viewreset', this._reset, this);
    this.markers = [];
    this.line = null;

  }

  componentDidUpdate () {

    if ((this.props.features && this.props.features.features.length) && !this.loaded) {
      this.draw(this.props.features);
    }

    if (this.props.currentDate !== this.currentDate) {
      this.currentDate = this.props.currentDate;
      this.filter();
    }

    // Re-append to ensure this layer always draws on top of other overlay layers.
    // Do it in a timeout to ensure it happens after all React render() stack has cleared.
    setTimeout(() => {
      this.map.getPanes().overlayPane.appendChild(this._el);
    }, 1);

  }

  render () {

    return false;
    
  }

  setOverlayPosition () {

    var bounds = this.map.getBounds(),
      topLeft = this.map.latLngToLayerPoint(bounds.getNorthWest()),
      bottomRight = this.map.latLngToLayerPoint(bounds.getSouthEast());

    if (this.svg) {
      d3.select(this._el)
        .style('width', this.map.getSize().x + 'px')
        .style('height', this.map.getSize().y + 'px')
        .style('margin-left', '0px')
        .style('margin-top', '0px')
        .attr('transform', 'translate(' + (-topLeft.x) + ',' + (-topLeft.y) + ')');

      this.svg
        .style('width', this.map.getSize().x + 'px')
        .style('height', this.map.getSize().y + 'px');
    }

  }

  _reset () {

    this.setOverlayPosition();
    this.filter();
    this.position();

  }

  filter () {

    if (!this.map) return;
    var date = this.props.currentDate || null;
    var zoom = this.map.getZoom();
    var anyShowing = false;
    this.markers.forEach(function(m) {
      m.show = 'none';

      if (date) {
        if (zoom >= m.zoomStart && zoom <= m.zoomEnd) {
          if (!m.start) {
            m.show = 'block';
            anyShowing = true;
          } else if (!m.end && date >= m.start) {
            m.show = 'block';
            anyShowing = true;
          } else if (date >= m.start && date <= m.end) {
            m.show = 'block';
            anyShowing = true;
          }
        }
      }

      m.elm.style('display', m.show);
    });

    if (anyShowing) this.position();

  }

  position () {

    if (this.markers && this.map) {
      var that = this;
      this.markers.forEach(function(m){
        if (m.show === 'none') return;

        var pt;
        if (m.markerType === 'icon') {
          pt = that.map.latLngToLayerPoint(m.coords);
          m.elm
            .attr('cx', pt.x + 'px')
            .attr('cy', pt.y + 'px');

        } else if(m.markerType === 'label') {
          pt = that.map.latLngToLayerPoint(m.coords);
          m.elm
            .attr('x', pt.x + 'px')
            .attr('y', pt.y + 'px');

        } else if(m.markerType === 'line') {
          m.elm.attr('d', that.line(m.coords));
        }
      });
    }

  }

  draw (data) {

    if (!data) return;
    if (this.loaded) return;
    this.loaded = true;

    if (!this.map) {
      this.dirty = true;
      return;
    }

    this.dirty = false;
    var that = this;

    if (this.markers.length) return position();

    this.line = d3.svg.line()
    .x(function(d) { return that.map.latLngToLayerPoint(d).x; })
    .y(function(d) { return that.map.latLngToLayerPoint(d).y; })
    .interpolate('linear');

    this.markers = [];

    function createIcon(pt, props) {
      return that.container
        .append('circle')
          .attr('class', 'time-based-' + [props.maptype,props.type].join(' '))
          .attr('cx', pt.x + 'px')
          .attr('cy', pt.y + 'px')
          .attr('r', 3);
    }

    function createLabel(pt, props){
      var ta = (props.justify === 'left') ? 'start' : 'end';
      return that.container
        .append('text')
          .attr('class', 'with-outlines time-based-' + [props.maptype, props.type].join(' '))
          .attr('x', pt.x + 'px')
          .attr('y', pt.y + 'px')
          .attr('text-anchor', ta)
          .text(props.location);
    }

    function createLine(coords, props) {
      return that.container.append('path')
        .attr('class', 'time-based-' + [props.maptype,props.type].join(' '))
        .attr('d', that.line(coords));
    }

    function drawByMaptype(thisType) {
      data.features.forEach(function(f){

        var props = f.properties,
          type  = f.geometry.type;
        var coords, m, pt;

        if (props.maptype !== thisType) return;

        if (props.maptype === 'icon') {
          coords = f.geometry.coordinates.reverse();
          pt = that.map.latLngToLayerPoint(coords);
          m = createIcon(pt, props);

        } else if (props.maptype === 'label') {
          coords = f.geometry.coordinates.reverse();
          pt = that.map.latLngToLayerPoint(coords);
          m = createLabel(pt, props);

        } else if (props.maptype === 'line') {
          coords = f.geometry.coordinates;
          coords.forEach(function(c){
            c.reverse();
          });
          m = createLine(coords, props);
        }

        if (m) {
          that.markers.push({
            elm: m,
            coords: coords,
            geometryType: type,
            markerType: props.maptype || '',
            start: props['start_year'] ? new Date(props['start_year']) : null,
            end: props['end_year'] ? new Date(props['end_year']) : null,
            zoomStart: props['startzoom'] ? +props['startzoom'] : that.map.minZoom,
            zoomEnd: props['endzoom'] ? +props['endzoom'] : that.map.maxZoom
          });
        } else {
          console.error('Unknown feature: ', f);
        }

      });
    }

    // control stacking order
    drawByMaptype('label');
    drawByMaptype('line');
    drawByMaptype('icon');

    this.filter();

  }

}
