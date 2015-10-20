import d3 from 'd3';
import Koto from 'koto';
import PanoramaChart from '../charts/PanoramaChart';

export default class MapChoropleth extends PanoramaChart {

  constructor (props) {
    super(props);
    this.chartConstructor = MapChoroplethImpl;
  }

}

export class MapChoroplethImpl extends Koto {

  constructor (selection) {

    super(selection);

    var _Chart = this;

    this.configs['width'] = {value: 600};
    this.configs['height'] = {value: 400};
    this.configs['margin'] = {value: {top: 20, right: 30, bottom: 20, left: 30}};
    this.configs['range'] = {value: ['#EDF8FB', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1','#88419D', '#6E016B']};
    this.configs['projection'] = {value: 'albersUsa'};
    this.configs['mapScale'] = {value: 500};

    this._path = d3.geo.path();
    this._projection = d3.geo[this.configs['projection'].value]();

    this.data = {
      geometry: [],
      values: []
    };

    this.colorScale = d3.scale.quantize()
      .range(this.configs['range'].value);

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

    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });

  }

  fitMap (geo) {
    var projection = d3.geo[this.configs['projection'].value]()
      .scale(1)
      .translate([0, 0]);

    var path = d3.geo.path()
      .projection(projection);

    var width = this._width,
      height = this._height;

    var b = path.bounds(geo),//[[left,top],[right,bottom]],
      s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
      t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

    return [s,t];
  }

  updateDimensions () {
    var margin = this.configs['margin'].value;
    this._width = this.configs['width'].value - margin.left - margin.right;
    this._height = this.configs['height'].value - margin.top - margin.bottom;

    this.base.attr('height', this.configs['height'].value);
    this.base.attr('width', this.configs['width'].value);

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  }

  updateProjection (data) {
    let scale = this.configs['mapScale'].value;
    let translate = [this._width/2, this._height/2];

    if (this.configs['mapScale'].value === 'auto') {
      [scale, translate] = this.fitMap(data.geometry);
    }

    this._projection = d3.geo[this.configs['projection'].value]()
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
      .range(this.configs['range'].value);
  }

  preDraw (data) {
    this.updateDimensions();
    this.updateProjection(data);
    this.updateColorScale(data);
  }

}
