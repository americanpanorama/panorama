import d3 from 'd3';
import Koto from 'koto';

class Axis extends Koto {
  constructor(selection, axisType){
    super(selection);

    this.configs['scale'] = {value: d3.scale.linear()};
    this.configs['ticks'] = {value: 5};
    this.configs['orient'] = {value: 'bottom'};
    this.configs['offset'] = {value: [0,0]};

    this.axis = d3.svg.axis();
    this.baseLayer = this.base.append('g').classed(axisType + ' axis', true);
  }

  update() {
    this.axis
      .scale(this.configs['scale'].value)
      .ticks(this.configs['ticks'].value)
      .orient(this.configs['orient'].value);

    var offset = this.configs['offset'].value;

    this.baseLayer
      .attr('transform', 'translate(' + offset[0] + ',' + offset[1] + ')')
      .call(this.axis);
  }
}

class ChartBase extends Koto {
  constructor(selection){
    super(selection);

    this.configs['width'] = {value: 600};
    this.configs['height'] = {value: 400};
    this.configs['margin'] = {value: {top: 20, right: 30, bottom: 20, left: 30}};

    this.xAxis = new Axis(this.base, 'x');
    this.yAxis = new Axis(this.base, 'y');

    this.xScale = d3.scale.ordinal();
    this.yScale = d3.scale.linear();
  }

  updateScales(data) {

  }

  updateDimensions() {

  }

  destroy() {
    this.base.remove();
    this.base = null;
  }
}

class DiscreteBarChart extends ChartBase {
  constructor(selection){
    super(selection);
    var _Chart = this;

    this.configs['barSpacing'] = {value: 0.1};

    // append group to chart
    var bars = this.baseLayer = this.base.append('g').classed('bars', true);

    this.updateDimensions();

    // define layer
    var layer = this.layer('bars', bars, {
      dataBind: function (data) {
        return this.selectAll('rect').data(data);
      },
      insert: function () {
        return this.append('rect')
          .attr('class', 'bar')
          .attr('width', _Chart.xScale.rangeBand());
      }
    });

    // Setup life-cycle events on layers
    layer.on('enter', function () {
      return this
        .attr('x', function(d) { return _Chart.xScale(_Chart.accessor('x')(d)); })
        .attr('y', function(d) { return _Chart.yScale(_Chart.accessor('y')(d)); })
        .attr('height', function(d) { return _Chart._height - _Chart.yScale(_Chart.accessor('y')(d)); });
    })
    .on('merge', function () {
      // this => base selection
    })
    .on('exit', function () {
      // this => exit selection
    });
  }

  updateScales(data) {
    var _Chart = this;
    this.xScale.rangeRoundBands([0, this._width], this.configs['barSpacing'].value);
    this.yScale.range([this._height, 0]);
    this.xScale.domain(data.map(function(d) { return _Chart.accessor('x')(d); }));
    this.yScale.domain([0, d3.max(data, function(d) { return _Chart.accessor('y')(d); })]);

    if (this.xAxis) this.xAxis.config('scale', this.xScale);
    if (this.yAxis) this.yAxis.config('scale', this.yScale);
  }

  updateDimensions() {
    var margin = this.configs['margin'].value;
    this._width = this.configs['width'].value - margin.left - margin.right;
    this._height = this.configs['height'].value - margin.top - margin.bottom;

    this.base.attr('height', this.configs['height'].value);
    this.base.attr('width', this.configs['width'].value);

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    if (this.xAxis) this.xAxis.config('offset', [margin.left, this._height + margin.bottom]);
    if (this.yAxis) this.yAxis.config('offset', [margin.left, margin.top]);
  }

  // Do something before `dataBind`
  preDraw(data) {
    this.updateDimensions();
    this.updateScales(data);

    if (this.xAxis) this.xAxis.update();
    if (this.yAxis) {
      this.yAxis.config('orient', 'left');
      this.yAxis.update();
    }
  }
};

class HorizontalDiscreteBarChart extends DiscreteBarChart {
  constructor(selection){
    super(selection);

    var _Chart = this;
    this.yScale = d3.scale.ordinal();
    this.xScale = d3.scale.linear();
    var layer = this.layer('bars');

    layer.insert = function () {
      return this.append('rect')
        .attr('class', 'bar')
        .attr('height', _Chart.yScale.rangeBand());
    };


    layer.on('enter', function () {
      return this
        .attr('x', function(d) { return '0'; })
        .attr('y', function(d) { return _Chart.yScale(_Chart.accessor('y')(d)); })
        .attr('width', function(d) { return _Chart.xScale(_Chart.accessor('x')(d)); })
        .attr('height', _Chart.yScale.rangeBand());
    });
  }

  updateScales(data) {
    var _Chart = this;
    this.yScale.rangeRoundBands([0, this._height], this.configs['barSpacing'].value);
    this.yScale.domain(data.map(function(d) { return _Chart.accessor('y')(d); }));

    this.xScale.range([0, this._width]);
    this.xScale.domain([0, d3.max(data, function(d) { return _Chart.accessor('x')(d); })]);

    if (this.xAxis) this.xAxis.config('scale', this.xScale);
    if (this.yAxis) this.yAxis.config('scale', this.yScale);
  }

}

class MapChoropleth extends Koto {
  constructor(selection){
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

  fitMap(geo) {
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

  updateDimensions() {
    var margin = this.configs['margin'].value;
    this._width = this.configs['width'].value - margin.left - margin.right;
    this._height = this.configs['height'].value - margin.top - margin.bottom;

    this.base.attr('height', this.configs['height'].value);
    this.base.attr('width', this.configs['width'].value);

    this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  }

  updateProjection(data) {
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

  updateColorScale(data) {
    let max = -Infinity;
    for (let value of data.values.values()) {
      if (value > max) max = value;
    }

    this.colorScale
      .domain([0, max])
      .range(this.configs['range'].value);
  }

  preDraw(data) {
    this.updateDimensions();
    this.updateProjection(data);
    this.updateColorScale(data);
  }
}

// Todo: is there a better way
export var charts = {
  DiscreteBarChart: DiscreteBarChart,
  HorizontalDiscreteBarChart: HorizontalDiscreteBarChart,
  MapChoropleth: MapChoropleth
};
