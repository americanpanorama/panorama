import * as L from 'leaflet';

export const LeafletDonut = (function (L) {

  return L.Circle.extend({

    initialize: function (latlng, outerRadius, innerRadius, options) {
      L.Path.prototype.initialize.call(this, options);

      this._latlng = L.latLng(latlng);
      this._mOuterRadius = outerRadius;
      this._mInnerRadius = this._validateInnerRadius(outerRadius, innerRadius);
    },

    setRadius: function (outerRadius, innerRadius) {
      this._mOuterRadius = outerRadius;
      this._mInnerRadius = this._validateInnerRadius(outerRadius, innerRadius);
      return this.redraw();
    },

    projectLatlngs: function () {
      var lngRadius = this._getLngRadius(),
        latlng = this._latlng,
        outerPointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius[0]]),
        innerPointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius[1]]);

      this._point = this._map.latLngToLayerPoint(latlng);
      this._outerRadius = Math.max(this._point.x - outerPointLeft.x, 1);
      this._innerRadius = Math.max(this._point.x - innerPointLeft.x, 1);
    },

    getBounds: function () {
      var lngRadius = this._getLngRadius()[0],
        latRadius = this._getLatRadius()[0],
        latlng = this._latlng;

      return new L.LatLngBounds(
              [latlng.lat - latRadius, latlng.lng - lngRadius],
              [latlng.lat + latRadius, latlng.lng + lngRadius]);
    },

    getRadius: function () {
      return [this._mOuterRadius, this._mInnerRadius];
    },

    _getLatRadius: function () {
      return [(this._mOuterRadius / 40075017) * 360, (this._mInnerRadius / 40075017) * 360];
    },

    _getLngRadius: function () {
      var radii = this._getLatRadius();

      return [
        (radii[0] / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat)),
        (radii[1] / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat))
      ];
    },

    _checkIfEmpty: function () {
      if (!this._map) {
        return false;
      }

      var vp = this._map._pathViewport,
        outerRadius = this._outerRadius,
        p = this._point;

      return p.x - outerRadius > vp.max.x || p.y - outerRadius > vp.max.y ||
             p.x + outerRadius < vp.min.x || p.y + outerRadius < vp.min.y;
    },

    _validateInnerRadius: function(outer, inner) {
      if (inner >= outer) return outer - 1;
      return inner;
    },

    getArc: function(pt, outerRadius, innerRadius) {
      var x2 = pt.x - 0.01;
      var y1 = pt.y - outerRadius;
      var y2 = pt.y - innerRadius;

      return [
        'M', pt.x, y1,
        'A', outerRadius, outerRadius, 0, 1, 1, x2, y1,
        'M', x2, y2,
        'A', innerRadius, innerRadius, 0, 1, 0, pt.x, y2,
        'Z'
      ].join(' ');
    },

    getPathString: function () {
      var p = this._point,
        outerRadius = this._outerRadius,
        innerRadius = this._innerRadius;

      if (this._checkIfEmpty()) {
        return '';
      }

      if (L.Browser.svg) {
        return this.getArc(p, outerRadius, innerRadius);
      } else { // TODO: VML Donut path
        p._round();
        r = Math.round(r);
        return 'AL ' + p.x + ',' + p.y + ' ' + outerRadius + ',' + outerRadius + ' 0,' + (65535 * 360);
      }
    }
  });

})(L);