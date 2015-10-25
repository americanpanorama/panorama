import { PropTypes } from 'react';
import d3 from 'd3';
import Koto from 'koto';
import PanoramaChart from '../charts/PanoramaChart';

export default class MapChoropleth extends PanoramaChart {

  // TODO: create a MapBase class, similar to ChartBase?
  // TODO: pass in accessors for more flexibility with data?

  // extend superclass `props` validators
  static propTypes = Object.assign({}, PanoramaChart.propTypes, {
    range: PropTypes.arrayOf(PropTypes.string),
    projection: PropTypes.string,
    mapScale: PropTypes.number
  });

  // extend superclass `props` defaults
  static defaultProps = Object.assign({}, PanoramaChart.defaultProps, {
    range: ['#EDF8FB', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1','#88419D', '#6E016B'],
    projection: 'albersUsa',
    mapScale: 500
  });

  constructor (props) {
    super(props);
    this.chartConstructor = MapChoroplethImpl;
  }

  getClassSuffix () {
    return 'map choropleth';
  }

}

export class MapChoroplethImpl extends Koto {

  constructor (selection, props) {

    super(selection);

    Object.assign(this.configs, {
      width: { value: props.width },
      height: { value: props.height },
      margin: { value: props.margin },
      range: { value: props.range },
      projection: { value: props.projection },
      mapScale: { value: props.mapScale }
    });

    var _Chart = this;

    this._path = d3.geo.path();
    this._projection = d3.geo[this.config('projection')]();

    this.data = {
      geometry: [],
      values: []
    };

    this.colorScale = d3.scale.quantize()
      .range(this.config('range'));

    this.baseLayer = this.base.append('g').classed('map', true);

    this.updateDimensions();

    // define layer
    var layer = this.layer('geo', this.baseLayer, {
      dataBind: function (data) {
        _Chart.data.geometry = data.geometry;
        _Chart.data.values = data.values;

        return this.selectAll('path')
          .data(_Chart.data.geometry.features);
      },
      insert: function () {
        return this.append('path')
          .attr('class', 'geometry')
          .style('fill', function (d) {return _Chart.colorScale(_Chart.data.values.get(d.id)); })
          .attr('d', _Chart._path);
      }
    });

    // Setup life-cycle events on layers
    layer.on('enter', function () {
      // this => enter selection
    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });

  }

  fitMap (geo) {
    var projection = d3.geo[this.config('projection')]()
      .scale(1)
      .translate([0, 0]);

    var path = d3.geo.path()
      .projection(projection);

    var b = path.bounds(geo),//[[left,top],[right,bottom]],
      s = .95 / Math.max((b[1][0] - b[0][0]) / this._innerWidth, (b[1][1] - b[0][1]) / this._innerHeight),
      t = [(this._innerWidth - s * (b[1][0] + b[0][0])) / 2, (this._innerHeight - s * (b[1][1] + b[0][1])) / 2];

    return [s,t];
  }

  /**
   * Default implementation of d3-style 'conventional margins'
   * (sim. to: http://bl.ocks.org/mbostock/3019563)
   */
  updateDimensions () {

    let margin = this.config('margin');

    this._innerWidth = this.config('width') - margin.left - margin.right;
    this._innerHeight = this.config('height') - margin.top - margin.bottom;

    this.base.attr('width', this.config('width'));
    this.base.attr('height', this.config('height'));

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  }

  updateProjection (data) {

    let scale = this.config('mapScale');
    let translate = [this._innerWidth/2, this._innerHeight/2];

    if (this.config('mapScale') === 'auto') {
      [scale, translate] = this.fitMap(data.geometry);
    }

    this._projection = d3.geo[this.config('projection')]()
        .scale(scale)
        .translate(translate);

    this._path.projection(this._projection);

  }

  updateColorScale (data) {

    let max = -Infinity;
    for (let value of data.values.values()) {
      if (value > max) max = value;
    }

    this.colorScale
      .domain([0, max])
      .range(this.config('range'));

  }

  preDraw (data) {

    this.updateDimensions();
    this.updateProjection(data);
    this.updateColorScale(data);

  }

}
