(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("d3"), require("leaflet"), require("react-leaflet"), require("react-dom"), require("cartodb-client"), require("intro.js"), require("queue-async"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "d3", "leaflet", "react-leaflet", "react-dom", "cartodb-client", "intro.js", "queue-async"], factory);
	else if(typeof exports === 'object')
		exports["@panorama/toolkit"] = factory(require("react"), require("d3"), require("leaflet"), require("react-leaflet"), require("react-dom"), require("cartodb-client"), require("intro.js"), require("queue-async"));
	else
		root["@panorama/toolkit"] = factory(root["React"], root["d3"], root["leaflet"], root["react-leaflet"], root["react-dom"], root["cartodb-client"], root["intro.js"], root["queue-async"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_201__, __WEBPACK_EXTERNAL_MODULE_202__, __WEBPACK_EXTERNAL_MODULE_203__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Panorama components.
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _AreaChartAreaChart = __webpack_require__(45);
	
	var _AreaChartAreaChart2 = _interopRequireDefault(_AreaChartAreaChart);
	
	var _CartoDBLoaderCartoDBLoader = __webpack_require__(72);
	
	var _CartoDBLoaderCartoDBLoader2 = _interopRequireDefault(_CartoDBLoaderCartoDBLoader);
	
	var _CartoDBTileLayerCartoDBTileLayer = __webpack_require__(73);
	
	var _CartoDBTileLayerCartoDBTileLayer2 = _interopRequireDefault(_CartoDBTileLayerCartoDBTileLayer);
	
	var _ChartSliderChartSlider = __webpack_require__(74);
	
	var _ChartSliderChartSlider2 = _interopRequireDefault(_ChartSliderChartSlider);
	
	var _DiscreteBarChartDiscreteBarChart = __webpack_require__(46);
	
	var _DiscreteBarChartDiscreteBarChart2 = _interopRequireDefault(_DiscreteBarChartDiscreteBarChart);
	
	var _LeafletDonutDonut = __webpack_require__(81);
	
	var _LeafletDonutDonut2 = _interopRequireDefault(_LeafletDonutDonut);
	
	var _HashManagerHashManager = __webpack_require__(75);
	
	var _HashManagerHashManager2 = _interopRequireDefault(_HashManagerHashManager);
	
	var _HorizontalDiscreteBarChartHorizontalDiscreteBarChart = __webpack_require__(76);
	
	var _HorizontalDiscreteBarChartHorizontalDiscreteBarChart2 = _interopRequireDefault(_HorizontalDiscreteBarChartHorizontalDiscreteBarChart);
	
	var _IntroManagerIntroManager = __webpack_require__(78);
	
	var _IntroManagerIntroManager2 = _interopRequireDefault(_IntroManagerIntroManager);
	
	var _ItemSelectorItemSelector = __webpack_require__(79);
	
	var _ItemSelectorItemSelector2 = _interopRequireDefault(_ItemSelectorItemSelector);
	
	var _LeafletChoroplethChoropleth = __webpack_require__(80);
	
	var _LeafletChoroplethChoropleth2 = _interopRequireDefault(_LeafletChoroplethChoropleth);
	
	var _LegendLegend = __webpack_require__(84);
	
	var _LegendLegend2 = _interopRequireDefault(_LegendLegend);
	
	var _LineChartLineChart = __webpack_require__(85);
	
	var _LineChartLineChart2 = _interopRequireDefault(_LineChartLineChart);
	
	var _MapChoroplethMapChoropleth = __webpack_require__(87);
	
	var _MapChoroplethMapChoropleth2 = _interopRequireDefault(_MapChoroplethMapChoropleth);
	
	var _NavigationNavigation = __webpack_require__(89);
	
	var _NavigationNavigation2 = _interopRequireDefault(_NavigationNavigation);
	
	var _OffsetAreaChartOffsetAreaChart = __webpack_require__(90);
	
	var _OffsetAreaChartOffsetAreaChart2 = _interopRequireDefault(_OffsetAreaChartOffsetAreaChart);
	
	var _PanoramaDispatcherJs = __webpack_require__(31);
	
	var _PunchcardPunchcard = __webpack_require__(92);
	
	var _PunchcardPunchcard2 = _interopRequireDefault(_PunchcardPunchcard);
	
	var _TimeBasedMarkersTimeBasedMarkers = __webpack_require__(97);
	
	var _TimeBasedMarkersTimeBasedMarkers2 = _interopRequireDefault(_TimeBasedMarkersTimeBasedMarkers);
	
	var _ScatterPlotScatterPlot = __webpack_require__(93);
	
	var _ScatterPlotScatterPlot2 = _interopRequireDefault(_ScatterPlotScatterPlot);
	
	var _LeafletTooltipTooltip = __webpack_require__(83);
	
	var _LeafletTooltipTooltip2 = _interopRequireDefault(_LeafletTooltipTooltip);
	
	var _TexturalListTexturalList = __webpack_require__(95);
	
	var _TexturalListTexturalList2 = _interopRequireDefault(_TexturalListTexturalList);
	
	exports['default'] = {
	  AreaChart: _AreaChartAreaChart2['default'],
	  CartoDBLoader: _CartoDBLoaderCartoDBLoader2['default'],
	  CartoDBTileLayer: _CartoDBTileLayerCartoDBTileLayer2['default'],
	  ChartSlider: _ChartSliderChartSlider2['default'],
	  DiscreteBarChart: _DiscreteBarChartDiscreteBarChart2['default'],
	  Donut: _LeafletDonutDonut2['default'],
	  HashManager: _HashManagerHashManager2['default'],
	  HorizontalDiscreteBarChart: _HorizontalDiscreteBarChartHorizontalDiscreteBarChart2['default'],
	  IntroManager: _IntroManagerIntroManager2['default'],
	  ItemSelector: _ItemSelectorItemSelector2['default'],
	  LeafletChoropleth: _LeafletChoroplethChoropleth2['default'],
	  Legend: _LegendLegend2['default'],
	  LineChart: _LineChartLineChart2['default'],
	  MapChoropleth: _MapChoroplethMapChoropleth2['default'],
	  Navigation: _NavigationNavigation2['default'],
	  OffsetAreaChart: _OffsetAreaChartOffsetAreaChart2['default'],
	  PanoramaDispatcher: _PanoramaDispatcherJs.PanoramaDispatcher,
	  PanoramaEventTypes: _PanoramaDispatcherJs.PanoramaEventTypes,
	  Punchcard: _PunchcardPunchcard2['default'],
	  TimeBasedMarkers: _TimeBasedMarkersTimeBasedMarkers2['default'],
	  Tooltip: _LeafletTooltipTooltip2['default'],
	  ScatterPlot: _ScatterPlotScatterPlot2['default'],
	  TexturalList: _TexturalListTexturalList2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(102)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(103)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(101)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(105)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(132)('wks')
	  , uid    = __webpack_require__(138)
	  , Symbol = __webpack_require__(12).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(23)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _commonTooltip = __webpack_require__(98);
	
	var _commonTooltip2 = _interopRequireDefault(_commonTooltip);
	
	var D3Component = (function () {
	  function D3Component(props) {
	    _classCallCheck(this, D3Component);
	
	    this._props = props;
	    this.root = null;
	    this.mounted = false;
	    this.axes = [];
	    this.tooltip = null;
	    this.dispatch = _d32['default'].dispatch('mounted', 'updated', 'mouseOver', 'mouseOut', 'mouseMove', 'click');
	  }
	
	  _createClass(D3Component, [{
	    key: 'willMount',
	
	    /*----------  Lifecycle methods  ----------*/
	
	    value: function willMount() {
	      // Not doing anything here, but someone else in the
	      // inheritance chain could find it useful
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount() {
	      var _this = this;
	
	      if (this.mounted) return;
	
	      this.addEvents();
	
	      this.root = _d32['default'].select(this.selector);
	      this.svg = this.root.append('svg').classed('interactive', this.props.interactive);
	
	      if (this.props.interactive && this.props.tooltip) {
	        this.svg.on('mousemove', this.dispatch.mouseMove);
	      }
	
	      // add chart to `this.base`
	      this.base = this.svg.append('g');
	
	      this.updateDimensions();
	
	      this.axes.forEach(function (axis) {
	        return axis.onMount(_this.base);
	      });
	
	      if (this.tooltipRef) {
	        this.tooltip = new _commonTooltip2['default'](this.tooltipRef, this.props.tooltipOptions || {});
	        this.tooltip.relativeContainer = this.svg;
	      }
	
	      this.mounted = true;
	      this.dispatch.mounted();
	    }
	  }, {
	    key: 'onUpdate',
	    value: function onUpdate() {
	      if (!this.mounted) return;
	
	      this.updateDimensions();
	      this._render();
	      this.dispatch.updated();
	    }
	  }, {
	    key: 'onUnMount',
	    value: function onUnMount() {
	      this.axes.forEach(function (axis) {
	        return axis.onUnMount();
	      });
	      this.axes.length = 0;
	      this.removeEvents();
	      this.svg.on('move', null);
	      this.svg.remove();
	      this.root = this.svg = null;
	      this.mounted = false;
	      this.props = null;
	    }
	
	    // TODO: Work on a better
	    // solution, not so rigid
	  }, {
	    key: 'addEvents',
	    value: function addEvents() {
	      this.dispatch.on('mounted', this.onMountedHandler.bind(this));
	      this.dispatch.on('updated', this.onUpdatedHandler.bind(this));
	      this.dispatch.on('mouseOver', this.onMouseOverHandler.bind(this));
	      this.dispatch.on('mouseOut', this.onMouseOutHandler.bind(this));
	      this.dispatch.on('click', this.onClickHandler.bind(this));
	      this.dispatch.on('mouseMove', this.onMouseMoveHandler.bind(this));
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	      this.dispatch.on('mounted', null);
	      this.dispatch.on('updated', null);
	      this.dispatch.on('mouseOver', null);
	      this.dispatch.on('mouseOut', null);
	      this.dispatch.on('mouseMove', null);
	      this.dispatch.on('click', null);
	    }
	  }, {
	    key: 'onMountedHandler',
	    value: function onMountedHandler() {
	      if (typeof this.props.onMountHandler === 'function') {
	        this.props.onMountHandler();
	      }
	    }
	  }, {
	    key: 'onUpdatedHandler',
	    value: function onUpdatedHandler() {
	      if (typeof this.props.onUpdatedHandler === 'function') {
	        this.props.onUpdatedHandler();
	      }
	    }
	  }, {
	    key: 'onMouseOverHandler',
	    value: function onMouseOverHandler(d) {
	      if (this.tooltip) {
	        this.tooltip.show(_d32['default'].event, d);
	      }
	      if (typeof this.props.onMouseOverHandler === 'function') {
	        this.props.onMouseOverHandler(d);
	      }
	    }
	  }, {
	    key: 'onMouseOutHandler',
	    value: function onMouseOutHandler(d) {
	      if (this.tooltip) {
	        this.tooltip.hide();
	      }
	      if (typeof this.props.onMouseOutHandler === 'function') {
	        this.props.onMouseOutHandler(d);
	      }
	    }
	  }, {
	    key: 'onMouseMoveHandler',
	    value: function onMouseMoveHandler() {
	      if (this.tooltip) {
	        this.tooltip.setPosition(_d32['default'].event);
	      }
	    }
	  }, {
	    key: 'onClickHandler',
	    value: function onClickHandler(d) {
	      if (typeof this.props.onClickHandler === 'function') {
	        this.props.onClickHandler(d);
	      }
	    }
	  }, {
	    key: 'setAxis',
	    value: function setAxis(axis) {
	      if (axis.toString() !== 'Axis') return;
	      this.axes.push(axis);
	    }
	  }, {
	    key: 'updateAxis',
	    value: function updateAxis(pos, scale, opts) {
	      this.axes[pos].update(scale, opts);
	    }
	  }, {
	    key: '_render',
	    value: function _render() {
	      if (!this.props.data) return;
	
	      this.preRender();
	      this.axes.forEach(function (axis) {
	        return axis.render();
	      });
	      this.render();
	      this.postRender();
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      throw new Error('render function should be implemented');
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {}
	  }, {
	    key: 'updateDimensions',
	    value: function updateDimensions() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margin = _props.margin;
	
	      if (this.width === width && this.height === height) return;
	
	      this.width = width - margin.left - margin.right;
	      this.height = height - margin.top - margin.bottom;
	
	      this.svg.attr('width', width).attr('height', height);
	
	      this.base.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	
	      this.axes.forEach(function (axis) {
	        axis.width = _this2.width;
	        axis.height = _this2.height;
	      });
	    }
	  }, {
	    key: 'selector',
	    get: function get() {
	      return this._selector;
	    },
	    set: function set(elm) {
	      this._selector = elm;
	    }
	  }, {
	    key: 'props',
	    get: function get() {
	      return this._props;
	    },
	    set: function set(val) {
	      this._props = val;
	    }
	  }, {
	    key: 'tooltipRef',
	    set: function set(val) {
	      this._tooltipRef = val;
	    },
	    get: function get() {
	      return this._tooltipRef;
	    }
	  }]);
	
	  return D3Component;
	})();
	
	exports['default'] = D3Component;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _commonProps = __webpack_require__(32);
	
	__webpack_require__(163);
	
	var D3ReactBase = (function (_Component) {
	  _inherits(D3ReactBase, _Component);
	
	  function D3ReactBase(props) {
	    _classCallCheck(this, D3ReactBase);
	
	    _get(Object.getPrototypeOf(D3ReactBase.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(D3ReactBase, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (!this.chartConstructor) {
	        throw new Error('Need to set chartConstructor');
	      }
	      this.chart = new this.chartConstructor(this.props);
	      this.chart.willMount();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.chart.selector = this.refs.chart;
	      this.chart.tooltipRef = this.refs.tooltip;
	      this.chart.props = this.props;
	      this.chart.onMount();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.chart.props = this.props;
	      this.chart.onUpdate();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.chart.onUnMount();
	      this.chart = null;
	    }
	  }, {
	    key: 'getClassName',
	    value: function getClassName() {
	      return this.props.className ? ' ' + this.props.className : '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'panorama' + this.getClassName() },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'chart', className: 'panorama--chart-container' },
	          this.props.tooltip && _react2['default'].createElement('div', { ref: 'tooltip', className: 'panorama--tooltip' })
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: _commonProps.DefaultTypes,
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _commonProps.DefaultProps,
	    enumerable: true
	  }]);
	
	  return D3ReactBase;
	})(_react.Component);
	
	exports['default'] = D3ReactBase;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _props = __webpack_require__(32);
	
	var Axis = (function () {
	  function Axis(options, scale) {
	    _classCallCheck(this, Axis);
	
	    this._options = options;
	    this.axis = _d32['default'].svg.axis().scale(scale);
	    this.element = null;
	  }
	
	  _createClass(Axis, [{
	    key: 'update',
	    value: function update(scale, opts) {
	      this.options = opts;
	      this.axis.scale(scale);
	      this.setAxisMethods();
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount(base) {
	      this.element = base.append('g').attr('class', this.options.className || '');
	
	      this.setAxisMethods();
	      this.axisLabel();
	    }
	  }, {
	    key: 'onUpdate',
	    value: function onUpdate() {}
	  }, {
	    key: 'onUnMount',
	    value: function onUnMount() {
	      if (this.element) this.element.remove();
	      this._options = null;
	      this.element = null;
	      this.axis = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.setPosition();
	      this.element.call(this.axis);
	      this.renderTickExtras();
	      this.renderLabelExtras();
	    }
	  }, {
	    key: 'renderTickExtras',
	    value: function renderTickExtras() {
	      var text = this.element.selectAll('text');
	
	      if (this.options.attr) {
	        text.attr(this.options.attr);
	      }
	
	      if (this.options.style) {
	        text.style(this.options.style);
	      }
	    }
	  }, {
	    key: 'renderLabelExtras',
	    value: function renderLabelExtras() {
	      if (!this.label || !this.options.label) return;
	      var label = this.options.label;
	
	      if (label.attr) {
	        this.label.attr(label.attr);
	      }
	      if (label.style) {
	        this.label.style(label.style);
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition() {
	      var position = this.options.position;
	
	      if (position) {
	        switch (position) {
	          case 'bottom':
	            this.element.attr('transform', 'translate(0,' + this.height + ')');
	            break;
	          case 'right':
	            this.element.attr('transform', 'translate(' + this.width + ',0)');
	          default:
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'setAxisMethods',
	    value: function setAxisMethods() {
	      var _this = this;
	
	      _props.axisMethods.forEach(function (method) {
	        if (_this.options.hasOwnProperty(method)) {
	          _this.axis[method](_this.options[method]);
	        }
	      });
	    }
	  }, {
	    key: 'axisLabel',
	    value: function axisLabel() {
	      if (this.options.label) {
	        this.label = this.element.append('text').text(this.options.label.text);
	      }
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return 'Axis';
	    }
	  }, {
	    key: 'options',
	    get: function get() {
	      return this._options;
	    },
	    set: function set(val) {
	      this._options = val;
	    }
	  }, {
	    key: 'width',
	    get: function get() {
	      return this._width;
	    },
	    set: function set(w) {
	      this._width = w;
	    }
	  }, {
	    key: 'height',
	    get: function get() {
	      return this._height;
	    },
	    set: function set(h) {
	      this._height = h;
	    }
	  }]);
	
	  return Axis;
	})();
	
	exports['default'] = Axis;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(34);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(8)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(174),
	    isLength = __webpack_require__(27);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(63),
	    isLength = __webpack_require__(27),
	    isObjectLike = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$assign = __webpack_require__(23)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _events = __webpack_require__(70);
	
	var PanoramaEventTypes = {
	
	  Legend: {
	    selected: 'Legend:selected'
	  },
	
	  ItemSelector: {
	    selected: 'ItemSelector:selected'
	  },
	
	  ChartSlider: {
	    selected: 'ChartSlider:selected'
	  }
	
	};
	
	exports.PanoramaEventTypes = PanoramaEventTypes;
	var PanoramaDispatcher = {
	
	  Legend: {
	    selected: function selected(value, index) {
	      PanoramaDispatcher.emit(PanoramaEventTypes.Legend.selected, value, index);
	    }
	  },
	
	  ItemSelector: {
	    selected: function selected(value, index) {
	      PanoramaDispatcher.emit(PanoramaEventTypes.ItemSelector.selected, value, index);
	    }
	  },
	
	  ChartSlider: {
	    selected: function selected(value) {
	      PanoramaDispatcher.emit(PanoramaEventTypes.ChartSlider.selected, value);
	    }
	  }
	
	};
	
	exports.PanoramaDispatcher = PanoramaDispatcher;
	// Mixin EventEmitter functionality
	_Object$assign(PanoramaDispatcher, _events.EventEmitter.prototype);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var DefaultTypes = {
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  margin: _react.PropTypes.shape({
	    top: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    bottom: _react.PropTypes.number,
	    left: _react.PropTypes.number
	  }),
	  xAccessor: _react.PropTypes.func,
	  yAccessor: _react.PropTypes.func,
	  selectionAccessor: _react.PropTypes.func,
	  xScale: _react.PropTypes.func,
	  yScale: _react.PropTypes.func,
	  xaxis: _react.PropTypes.object,
	  yaxis: _react.PropTypes.object,
	  interactive: _react.PropTypes.bool,
	  tooltip: _react.PropTypes.bool
	};
	
	exports.DefaultTypes = DefaultTypes;
	var DefaultProps = {
	  width: 960,
	  height: 500,
	  margin: { top: 20, right: 30, bottom: 20, left: 30 },
	  selectionAccessor: function selectionAccessor(d) {
	    return d.key;
	  },
	  xAccessor: function xAccessor(d) {
	    return d.key;
	  },
	  yAccessor: function yAccessor(d) {
	    return d.value;
	  },
	  xScale: _d32['default'].scale.linear(),
	  yScale: _d32['default'].scale.linear(),
	  interactive: true,
	  tooltip: false
	};
	
	exports.DefaultProps = DefaultProps;
	/*----------  Axis props  ----------*/
	
	var axisMethods = ['orient', 'ticks', 'tickValues', 'tickSize', 'innerTickSize', 'outerTickSize', 'tickPadding', 'tickFormat'];
	
	exports.axisMethods = axisMethods;
	var tooltipDefaultOptions = {
	  closeDelay: 100,
	  align: 'top center',
	  offset: [0, -10]
	};
	exports.tooltipDefaultOptions = tooltipDefaultOptions;

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(24)
	  , TAG = __webpack_require__(10)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(38)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(9)
	  , createDesc = __webpack_require__(54);
	module.exports = __webpack_require__(37) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).setDesc
	  , has = __webpack_require__(49)
	  , TAG = __webpack_require__(10)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(135)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(51)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(141);
	var Iterators = __webpack_require__(16);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 43 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(26),
	    isObjectLike = __webpack_require__(28);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _react = __webpack_require__(6);
	
	var _chartsD3ReactBase = __webpack_require__(14);
	
	var _chartsD3ReactBase2 = _interopRequireDefault(_chartsD3ReactBase);
	
	var _AreaChartImpls = __webpack_require__(71);
	
	var _AreaChartImpls2 = _interopRequireDefault(_AreaChartImpls);
	
	__webpack_require__(148);
	
	var AreaChart = (function (_D3ReactBase) {
	  _inherits(AreaChart, _D3ReactBase);
	
	  _createClass(AreaChart, null, [{
	    key: 'propTypes',
	    value: _extends({}, _chartsD3ReactBase2['default'].propTypes, {
	      fillColor: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	      fillOpacity: _react.PropTypes.number,
	      interpolate: _react.PropTypes.string
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _chartsD3ReactBase2['default'].defaultProps, {
	      xScale: _d32['default'].scale.ordinal(),
	      className: 'area-chart',
	      interpolate: 'basis',
	      xaxis: {
	        className: 'x axis',
	        orient: 'bottom',
	        position: 'bottom',
	        attr: {
	          dx: '0',
	          dy: '0.5em'
	        },
	        style: {
	          'text-anchor': 'middle'
	        }
	      },
	      yaxis: {
	        className: 'y axis',
	        orient: 'left'
	      }
	    }),
	    enumerable: true
	  }]);
	
	  function AreaChart(props) {
	    _classCallCheck(this, AreaChart);
	
	    _get(Object.getPrototypeOf(AreaChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _AreaChartImpls2['default'];
	  }
	
	  return AreaChart;
	})(_chartsD3ReactBase2['default']);
	
	exports['default'] = AreaChart;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsD3ReactBase = __webpack_require__(14);
	
	var _chartsD3ReactBase2 = _interopRequireDefault(_chartsD3ReactBase);
	
	var _DiscreteBarChartImpls = __webpack_require__(47);
	
	var _DiscreteBarChartImpls2 = _interopRequireDefault(_DiscreteBarChartImpls);
	
	__webpack_require__(150);
	
	var DiscreteBarChart = (function (_D3ReactBase) {
	  _inherits(DiscreteBarChart, _D3ReactBase);
	
	  function DiscreteBarChart(props) {
	    _classCallCheck(this, DiscreteBarChart);
	
	    _get(Object.getPrototypeOf(DiscreteBarChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _DiscreteBarChartImpls2['default'];
	  }
	
	  _createClass(DiscreteBarChart, null, [{
	    key: 'propTypes',
	    value: _extends({}, _chartsD3ReactBase2['default'].propTypes, {
	      barSpacing: _react.PropTypes.number
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _chartsD3ReactBase2['default'].defaultProps, {
	      barSpacing: 0.1,
	      xScale: _d32['default'].scale.ordinal(),
	      className: 'bar-chart vertical',
	      xaxis: {
	        className: 'x axis',
	        orient: 'bottom',
	        position: 'bottom',
	        attr: {
	          dx: '0',
	          dy: '0.5em'
	        },
	        style: {
	          'text-anchor': 'middle'
	        }
	      },
	      yaxis: {
	        className: 'y axis',
	        orient: 'left'
	      }
	    }),
	    enumerable: true
	  }]);
	
	  return DiscreteBarChart;
	})(_chartsD3ReactBase2['default']);
	
	exports['default'] = DiscreteBarChart;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _chartsD3Component = __webpack_require__(13);
	
	var _chartsD3Component2 = _interopRequireDefault(_chartsD3Component);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsCommonAxis = __webpack_require__(18);
	
	var _chartsCommonAxis2 = _interopRequireDefault(_chartsCommonAxis);
	
	var DiscreteBarChartImpls = (function (_D3Component) {
	  _inherits(DiscreteBarChartImpls, _D3Component);
	
	  function DiscreteBarChartImpls() {
	    _classCallCheck(this, DiscreteBarChartImpls);
	
	    _get(Object.getPrototypeOf(DiscreteBarChartImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DiscreteBarChartImpls, [{
	    key: 'willMount',
	    value: function willMount() {
	      if (this.props.xaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.xaxis, this.props.xScale));
	      }
	
	      if (this.props.yaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.yaxis, this.props.yScale));
	      }
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount(props) {
	      _get(Object.getPrototypeOf(DiscreteBarChartImpls.prototype), 'onMount', this).call(this, props);
	      this._render();
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {
	      var _props = this.props;
	      var data = _props.data;
	      var xAccessor = _props.xAccessor;
	      var yAccessor = _props.yAccessor;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	
	      xScale.rangeRoundBands([0, this.width], this.barSpacing);
	      xScale.domain(data.map(function (d) {
	        return xAccessor(d);
	      }));
	      yScale.range([this.height, 0]);
	      yScale.domain([0, _d32['default'].max(data, function (d) {
	        return yAccessor(d);
	      })]);
	
	      this.updateAxis(0, xScale, this.props.xaxis);
	      this.updateAxis(1, yScale, this.props.yaxis);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props2 = this.props;
	      var data = _props2.data;
	      var xAccessor = _props2.xAccessor;
	      var yAccessor = _props2.yAccessor;
	      var xScale = _props2.xScale;
	      var yScale = _props2.yScale;
	
	      var bars = this.base.selectAll('.bar').data(data);
	
	      bars.exit().remove();
	
	      bars.enter().append('rect').attr('class', 'bar');
	
	      bars.attr('x', function (d) {
	        return xScale(xAccessor(d));
	      }).attr('y', function (d) {
	        return yScale(yAccessor(d));
	      }).attr('width', xScale.rangeBand()).attr('height', function (d) {
	        return _this.height - yScale(yAccessor(d));
	      });
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {
	      var _props3 = this.props;
	      var selected = _props3.selected;
	      var selectionAccessor = _props3.selectionAccessor;
	      var interactive = _props3.interactive;
	
	      var bars = this.base.selectAll('.bar');
	      if (interactive) {
	        bars.on('click', this.dispatch.click).on('mouseover', this.dispatch.mouseOver).on('mouseout', this.dispatch.mouseOut);
	      }
	      if (selected) {
	        bars.classed('selected', function (d) {
	          return selectionAccessor(d) === selected;
	        });
	      }
	    }
	  }, {
	    key: 'barSpacing',
	    get: function get() {
	      return this.props.barSpacing || 0.1;
	    }
	  }]);
	
	  return DiscreteBarChartImpls;
	})(_chartsD3Component2['default']);
	
	exports['default'] = DiscreteBarChartImpls;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 49 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(24);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(52)
	  , $export        = __webpack_require__(20)
	  , redefine       = __webpack_require__(55)
	  , hide           = __webpack_require__(39)
	  , has            = __webpack_require__(49)
	  , Iterators      = __webpack_require__(16)
	  , $iterCreate    = __webpack_require__(124)
	  , setToStringTag = __webpack_require__(40)
	  , getProto       = __webpack_require__(9).getProto
	  , ITERATOR       = __webpack_require__(10)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(20)
	  , core    = __webpack_require__(8)
	  , fails   = __webpack_require__(38);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(39);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(9).getDesc
	  , isObject = __webpack_require__(25)
	  , anObject = __webpack_require__(15);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50)
	  , defined = __webpack_require__(36);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(36);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(35)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(16);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(182);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(180);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(165),
	    baseAssign = __webpack_require__(166),
	    createAssigner = __webpack_require__(172);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(63),
	    isArrayLike = __webpack_require__(26),
	    isObject = __webpack_require__(17),
	    shimKeys = __webpack_require__(178);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(44),
	    isArray = __webpack_require__(29),
	    isIndex = __webpack_require__(43),
	    isLength = __webpack_require__(27),
	    isObject = __webpack_require__(17);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */
	
	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  return (/input|select|textarea|button|object/.test(nodeName) ?
	    !element.disabled :
	    "a" === nodeName ?
	      element.href || isTabIndexNotNaN :
	      isTabIndexNotNaN) && visible(element);
	}
	
	function hidden(el) {
	  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
	    el.style.display === 'none';
	}
	
	function visible(element) {
	  while (element) {
	    if (element === document.body) break;
	    if (hidden(element)) return false;
	    element = element.parentNode;
	  }
	  return true;
	}
	
	function tabbable(element) {
	  var tabIndex = element.getAttribute('tabindex');
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}
	
	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
	    return tabbable(el);
	  });
	}
	
	module.exports = findTabbableDescendants;
	


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(198),
	    isArguments = __webpack_require__(199),
	    isArray = __webpack_require__(200);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 70 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _chartsD3Component = __webpack_require__(13);
	
	var _chartsD3Component2 = _interopRequireDefault(_chartsD3Component);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsCommonAxis = __webpack_require__(18);
	
	var _chartsCommonAxis2 = _interopRequireDefault(_chartsCommonAxis);
	
	var AreaChartImpls = (function (_D3Component) {
	  _inherits(AreaChartImpls, _D3Component);
	
	  function AreaChartImpls() {
	    _classCallCheck(this, AreaChartImpls);
	
	    _get(Object.getPrototypeOf(AreaChartImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(AreaChartImpls, [{
	    key: 'willMount',
	    value: function willMount() {
	      var _props = this.props;
	      var xAccessor = _props.xAccessor;
	      var yAccessor = _props.yAccessor;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var interpolate = _props.interpolate;
	
	      if (this.props.xaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.xaxis, this.props.xScale));
	      }
	
	      if (this.props.yaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.yaxis, this.props.yScale));
	      }
	
	      this.points = [];
	
	      this.areaGenerator = _d32['default'].svg.area().interpolate(interpolate).x(function (d) {
	        return xScale(xAccessor(d));
	      }).y0(function (d) {
	        return yScale(0);
	      }).y1(function (d) {
	        return yScale(yAccessor(d));
	      });
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount() {
	      _get(Object.getPrototypeOf(AreaChartImpls.prototype), 'onMount', this).call(this);
	
	      this.baseLayer = this.base.append('g').classed('area-layer', true);
	
	      this._render();
	    }
	  }, {
	    key: 'getClosestDataIndex',
	    value: function getClosestDataIndex(pt) {
	      if (!this.points.length) return null;
	
	      var _props2 = this.props;
	      var data = _props2.data;
	      var xAccessor = _props2.xAccessor;
	
	      this.points.forEach(function (d) {
	        d.d = Math.abs(d.x - pt);
	      });
	
	      this.points.sort(function (a, b) {
	        return _d32['default'].ascending(a.d, b.d);
	      });
	
	      return this.points[0].i;
	    }
	  }, {
	    key: 'onMouseMoveHandler',
	    value: function onMouseMoveHandler() {
	      if (!this.hover || !this.tooltip) return;
	
	      var mx = _d32['default'].mouse(this.baseLayer.node());
	      var inverted = this.props.xScale.invert(mx[0]);
	      var itemIdx = this.getClosestDataIndex(mx[0]);
	      this.tooltip.setPosition(_d32['default'].event);
	
	      if (itemIdx !== null) this.tooltip.setContent(this.props.data[0][itemIdx]);
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {
	      var _this = this;
	
	      var _props3 = this.props;
	      var data = _props3.data;
	      var xScale = _props3.xScale;
	      var yScale = _props3.yScale;
	      var interpolate = _props3.interpolate;
	      var xAccessor = _props3.xAccessor;
	      var yAccessor = _props3.yAccessor;
	
	      xScale.range([0, this.width]);
	      yScale.range([this.height, 0]);
	
	      this.updateAxis(0, xScale, this.props.xaxis);
	      this.updateAxis(1, yScale, this.props.yaxis);
	
	      this.areaGenerator.interpolate(interpolate).x(function (d) {
	        return xScale(xAccessor(d));
	      }).y0(function (d) {
	        return yScale(0);
	      }).y1(function (d) {
	        return yScale(yAccessor(d));
	      });
	
	      this.points = [];
	      if (data.length) {
	        data[0].forEach(function (d, i) {
	          var x = xScale(xAccessor(d));
	          _this.points.push({ x: x, i: i });
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props4 = this.props;
	      var data = _props4.data;
	      var xAccessor = _props4.xAccessor;
	      var yAccessor = _props4.yAccessor;
	      var xScale = _props4.xScale;
	      var yScale = _props4.yScale;
	      var fillColor = _props4.fillColor;
	      var fillOpacity = _props4.fillOpacity;
	
	      var area = this.baseLayer.selectAll('path.area').data(data);
	
	      area.exit().remove();
	
	      area.enter().append('path').attr('class', 'area');
	
	      area.attr('d', function (d) {
	        return _this2.areaGenerator(d);
	      }).style('fill', fillColor).style('opacity', fillOpacity);
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {
	      if (this.props.interactive) {
	        this.baseLayer.selectAll('path.area').on('mouseover', this.onOver.bind(this)).on('mouseout', this.onOut.bind(this));
	      }
	    }
	  }, {
	    key: 'onOver',
	    value: function onOver() {
	      this.hover = true;
	      if (this.tooltip) {
	        this.tooltip.show();
	      }
	    }
	  }, {
	    key: 'onOut',
	    value: function onOut() {
	      this.hover = false;
	      if (this.tooltip) {
	        this.tooltip.hide();
	      }
	    }
	  }]);
	
	  return AreaChartImpls;
	})(_chartsD3Component2['default']);
	
	exports['default'] = AreaChartImpls;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Promise = __webpack_require__(106)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = CartoDBLoader;
	
	var _queueAsync = __webpack_require__(203);
	
	var _queueAsync2 = _interopRequireDefault(_queueAsync);
	
	var _cartodbClient = __webpack_require__(201);
	
	var _cartodbClient2 = _interopRequireDefault(_cartodbClient);
	
	/*
	 * Lightweight wrapper around cartodb-client that provides a Promise-based interface
	 * for making parallel requests to CartoDB given a SQL query and response format for each.
	 *
	 * cartodb-client, available via npm, is a simple XHR client tailored for use with CartoDB.
	 * The functionality here could theoretically be moved into cartodb-client,
	 * but for now they remain separate and complementary.
	 *
	 * @param userId  CartoDB user id. Used as the target account for API requests.
	 * @param apiKey  CartoDB API key. If specified, CartoDBLoader will send
	 *                  the API key over the wire as a parameter to the GET request to CartoDB.
	 *                  Anyone with a web inspector can then see the API key,
	 *                  so this should never be used in production!
	 */
	
	function CartoDBLoader(userId, apiKey) {
	
	  var cartoDBClient = new _cartodbClient2['default'](userId);
	
	  /** 
	   * Use `queue-async` to defer() up an array of queries,
	   * and return a Promise that is resolved when all requests have completed.
	   * Accepts a list of objects formatted as { query, format }.
	   */
	  function query(queryConfigs) {
	
	    return new _Promise(function (resolve, reject) {
	
	      // Run up to 3 requests in parallel
	      var queue = (0, _queueAsync2['default'])(3);
	      queryConfigs.forEach(function (queryConfig) {
	        queue.defer(request, queryConfig);
	      });
	
	      queue.awaitAll(function (error) {
	        for (var _len = arguments.length, responses = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          responses[_key - 1] = arguments[_key];
	        }
	
	        if (error) {
	          reject(error);
	        } else {
	          resolve.apply(undefined, responses);
	        }
	      });
	    });
	  }
	
	  function request(queryConfig, callback) {
	
	    cartoDBClient.sqlRequest(queryConfig.query, function (err, response) {
	      if (!err) {
	        var innerResponse = undefined;
	        switch (queryConfig.format.toLowerCase()) {
	          case 'geojson':
	            innerResponse = response.features;
	            break;
	          default:
	            innerResponse = response.rows;
	            break;
	        }
	        callback(null, innerResponse);
	      } else {
	        callback(err);
	      }
	    }, {
	      'format': queryConfig.format,
	      'dangerouslyExposedAPIKey': apiKey
	    });
	  }
	
	  return {
	    query: query
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _leaflet = __webpack_require__(21);
	
	var _reactLeaflet = __webpack_require__(22);
	
	// Not possible until CartoDB releases an npm package for the Core API.
	// import { Tiles } from 'cartodb';
	
	// Until then, consumer applications must include the cartodb.js script elsewhere,
	// e.g. in index.html as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js"></script>
	
	var CartoDBTileLayer = (function (_BaseTileLayer) {
	  _inherits(CartoDBTileLayer, _BaseTileLayer);
	
	  function CartoDBTileLayer() {
	    _classCallCheck(this, CartoDBTileLayer);
	
	    _get(Object.getPrototypeOf(CartoDBTileLayer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(CartoDBTileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	
	      _get(Object.getPrototypeOf(CartoDBTileLayer.prototype), 'componentWillMount', this).call(this);
	
	      if (!cartodb) {
	        throw new Error('CartoDBTileLayer requires `cartodb`. `cartodb` is not currently available as an npm package and therefore must be loaded as a global, e.g. via a CDN script in your index.html, such as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js">');
	      }
	
	      this.leafletElement = (0, _leaflet.tileLayer)('', this.props);
	
	      this._getCartoDBTilesTemplates((function (error, response) {
	        if (error) {
	          // TODO: handle error
	          console.error(error);
	        } else {
	          this.leafletElement.setUrl(response.tiles[0]);
	        }
	      }).bind(this));
	    }
	  }, {
	    key: '_getCartoDBTilesTemplates',
	    value: function _getCartoDBTilesTemplates(callback) {
	      cartodb.Tiles.getTiles({
	        type: 'cartodb',
	        user_name: this.props.userId,
	        sublayers: [{
	          sql: this.props.sql,
	          cartocss: this.props.cartocss
	        }]
	      }, function (tiles, error) {
	        if (!tiles || error) {
	          if (!error) {
	            error = 'Empty response.';
	          }
	          callback(error, tiles);
	        } else {
	          callback(null, tiles);
	        }
	      });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      userId: _react.PropTypes.string,
	      sql: _react.PropTypes.string,
	      cartocss: _react.PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  return CartoDBTileLayer;
	})(_reactLeaflet.BaseTileLayer);
	
	exports['default'] = CartoDBTileLayer;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(30);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	__webpack_require__(149);
	
	var ChartSlider = (function (_React$Component) {
	  _inherits(ChartSlider, _React$Component);
	
	  _createClass(ChartSlider, null, [{
	    key: 'propTypes',
	
	    // property validation
	    value: {
	      width: _react.PropTypes.number,
	      height: _react.PropTypes.number,
	      scale: _react.PropTypes.func,
	      orient: _react.PropTypes.string,
	      margin: _react.PropTypes.shape({
	        top: _react.PropTypes.number,
	        right: _react.PropTypes.number,
	        bottom: _react.PropTypes.number,
	        left: _react.PropTypes.number
	      }),
	      children: _react2['default'].PropTypes.node,
	      selectedValue: _react.PropTypes.number,
	      onClickOrMove: _react.PropTypes.func
	    },
	
	    // property defaults (ES7-style React)
	    // (instead of ES5-style getDefaultProps)
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      scale: _d32['default'].scale.linear().clamp(true),
	      orient: 'bottom',
	      margin: {
	        top: 20,
	        right: 30,
	        bottom: 20,
	        left: 30
	      },
	      onClickOrMove: null
	    },
	    enumerable: true
	  }]);
	
	  function ChartSlider(props) {
	    _classCallCheck(this, ChartSlider);
	
	    _get(Object.getPrototypeOf(ChartSlider.prototype), 'constructor', this).call(this, props);
	
	    // bind handlers to this component instance,
	    // since React no longer does this automatically when using ES6
	    // this.onThingClicked = this.onThingClicked.bind(this);
	  }
	
	  _createClass(ChartSlider, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      d3ChartSlider.create(this.refs.axis, this.props.scale, this.props.orient, this.props.margin, this.props.onClickOrMove);
	
	      // Attempt to measure container width, to pass down to child component
	      try {
	        this.containerNode = _reactDom2['default'].findDOMNode(this);
	      } catch (e) {}
	
	      // Rerender in order to pass measured width down to child component
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	
	      d3ChartSlider.update(this.refs.axis, this.props.scale, this.props.orient, this.props.margin, this.props.selectedValue, this.props.onClickOrMove);
	
	      // Attempt to measure container width, to pass down to child component
	      try {
	        this.containerNode = _reactDom2['default'].findDOMNode(this);
	      } catch (e) {}
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      d3ChartSlider.destroy(this.refs.axis);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var numChildren = _react.Children.count(this.props.children);
	      if (numChildren > 1) {
	        console.warn('ChartSlider is designed to wrap only one child component, but it found ' + numChildren + ' children.');
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'panorama chart-slider' },
	
	        // Set width/height on the single child component
	        _react2['default'].cloneElement(this.props.children, {
	          width: this.containerNode ? this.containerNode.offsetWidth : this.props.width,
	          height: this.props.height
	        }),
	        _react2['default'].createElement('div', { className: 'top-rule', style: {
	            marginLeft: this.props.margin.left + 'px',
	            marginRight: this.props.margin.right + 'px',
	            width: 'calc(100% - ' + (this.props.margin.left + this.props.margin.right) + 'px)'
	          } }),
	        _react2['default'].createElement('div', { className: 'd3-chart-slider', ref: 'axis' })
	      );
	    }
	  }]);
	
	  return ChartSlider;
	})(_react2['default'].Component);
	
	exports['default'] = ChartSlider;
	
	var d3ChartSlider = {
	
	  /**
	   * Any necessary setup for d3 component goes here.
	   *
	   * @param  {Node}     HTMLElement to which d3 will attach
	   * @param  {Function} d3 scale to use for the axis
	   * @param  {String}   orientation of the axis (per d3.axis.orient)
	   * @param  {Object}   Object specifying margins around the component
	   * @param  {Function} Chart click/move handler
	   */
	  create: function create(node, scale, orient, margin, onClickOrMove) {
	
	    this.onBrushMoved = this.onBrushMoved.bind(this);
	
	    // TODO: would be nice to not have to maintain this state.
	    // It's needed in onBrushMove() (and is updated in update());
	    // if d3.event wasn't null in the event handler, could probably use event.target...
	    this.node = node;
	
	    var primaryAxisTickSize = 13;
	    this.axisPrimary = _d32['default'].svg.axis().orient(orient).ticks(5).tickFormat(String).tickSize(primaryAxisTickSize);
	
	    this.axisSecondary = _d32['default'].svg.axis().orient(orient).ticks(10).tickFormat(function (d) {
	      return '';
	    }).tickSize(primaryAxisTickSize - 3);
	
	    this.axisTertiary = _d32['default'].svg.axis().orient(orient).ticks(40).tickFormat(function (d) {
	      return '';
	    }).tickSize(primaryAxisTickSize - 6);
	
	    this.brush = _d32['default'].svg.brush().on('brush', this.onBrushMoved);
	
	    var svg = _d32['default'].select(node).append('svg');
	    svg.append('g').attr('class', 'axis tertiary');
	    svg.append('g').attr('class', 'axis secondary');
	    svg.append('g').attr('class', 'axis primary');
	
	    this.handle = svg.append('g').attr('class', 'handle');
	
	    var height = node.offsetHeight - margin.bottom + primaryAxisTickSize + 3,
	        // eyeballing it...
	    handleElements = this.handle.append('g').attr('class', 'handle-elements');
	
	    handleElements.append('line').attr({
	      'x1': 0,
	      'x2': 0,
	      'y1': 0,
	      'y2': height
	    });
	
	    var capSize = 10;
	    handleElements.append('path')
	    // rounded triangle path, at 100x100; scale down as needed
	    .attr('d', 'M 30 0 L 70 0 C 85 0 93.29179606750063 13.416407864998739 86.58359213500125 26.832815729997478 L 63.41640786499873 73.16718427000252 C 56.708203932499366 86.58359213500125 43.29179606750063 86.58359213500125 36.58359213500126 73.16718427000252 L 13.416407864998739 26.832815729997478 C 6.708203932499369 13.416407864998739 15 0 30 0 Z ').attr('transform', 'scale(' + capSize / 100 + ') translate(-50, 0)');
	    handleElements.append('path')
	    // rounded triangle path, at 100x100; scale down as needed
	    .attr('d', 'M 30 0 L 70 0 C 85 0 93.29179606750063 13.416407864998739 86.58359213500125 26.832815729997478 L 63.41640786499873 73.16718427000252 C 56.708203932499366 86.58359213500125 43.29179606750063 86.58359213500125 36.58359213500126 73.16718427000252 L 13.416407864998739 26.832815729997478 C 6.708203932499369 13.416407864998739 15 0 30 0 Z ').attr('transform', 'rotate(180) scale(' + capSize / 100 + ') translate(-50, ' + -(100 / capSize * height) + ')');
	
	    this.update(node, scale, orient, margin);
	  },
	
	  /**
	   * Logic for updating d3 component with new data.
	   *
	   * @param  {Node}     HTMLElement to which d3 will attach
	   * @param  {Function} d3 scale to use for the axis
	   * @param  {String}   orientation of the axis (per d3.axis.orient)
	   * @param  {Object}   Object specifying margins around the component
	   * @param  {Number}   Scaled location of the slider
	   * @param  {Function} Chart click/move handler
	   */
	  update: function update(node, scale, orient, margin, selectedValue, onClickOrMove) {
	
	    this.node = node;
	    this.onClickOrMove = onClickOrMove;
	
	    // update axis
	    scale.range([0, node.offsetWidth - margin.left - margin.right]);
	    this.axisPrimary.scale(scale);
	    this.axisSecondary.scale(scale);
	    this.axisTertiary.scale(scale);
	    this.brush.x(scale);
	
	    // apply size and position
	    var axisTranform = 'translate(' + margin.left + ', ' + (node.offsetHeight - margin.bottom) + ')';
	    var svg = _d32['default'].select(node).select('svg');
	    svg.attr('width', '100%').attr('height', '100%');
	
	    // draw axes
	    svg.select('.axis.primary').call(this.axisPrimary).attr('transform', axisTranform)
	
	    // position labels
	    .selectAll('text').attr('y', Math.floor(2 / 3 * margin.bottom));
	
	    // draw secondary and tertiary axes (just smaller ticks)
	    svg.select('.axis.secondary').call(this.axisSecondary).attr('transform', axisTranform);
	
	    svg.select('.axis.tertiary').call(this.axisTertiary).attr('transform', axisTranform);
	
	    // draw brush
	    // let slider = svg.select('.slider');
	    this.handle.call(this.brush).attr('transform', 'translate(' + margin.left + ', 0)').select('.background').on('mousedown.brush', this.onBrushMoved).on('touchstart.brush', this.onBrushMoved);
	    this.handle.selectAll('.background').attr('height', '100%');
	
	    if (typeof selectedValue !== 'undefined') {
	      this.onSelectedValueChanged(selectedValue);
	    }
	  },
	
	  /**
	   * Any necessary cleanup for d3 component goes here.
	   *
	   * @param  {Node}    HTMLElement to which d3 was attached
	   */
	  destroy: function destroy(node) {
	
	    _d32['default'].select(node).html('');
	
	    this.node = null;
	    this.axisPrimary = null;
	    this.axisSecondary = null;
	    this.axisTertiary = null;
	    this.brush = null;
	    this.handle = null;
	  },
	
	  onBrushMoved: function onBrushMoved() {
	
	    var scale = this.brush.x(),
	        domain = scale.domain(),
	        mouseX = _d32['default'].mouse(_d32['default'].select(this.node).select('.axis')[0][0])[0],
	        // there's probably a better, more-d3 way to do this...
	    value = scale.invert(mouseX);
	
	    // clamp and quantize
	    value = Math.round(Math.max(domain[0], Math.min(domain[1], value)));
	
	    // Direct communication: call callback if it was passed in.
	    if (this.onClickOrMove) {
	      this.onClickOrMove(value);
	    }
	
	    // Indirect communication: Notify any subscribers of chart click/move.
	    // PanoramaDispatcher.ChartSlider.clickMove(value);
	  },
	
	  onSelectedValueChanged: function onSelectedValueChanged(value) {
	
	    this.handle.call(this.brush.extent([value, value + 2]));
	
	    var brushCenter = this.brush.x()(value);
	    this.handle.select('.handle-elements').attr('transform', 'translate(' + brushCenter + ', 0)');
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$assign = __webpack_require__(23)['default'];
	
	var _Object$keys = __webpack_require__(104)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _events = __webpack_require__(70);
	
	var HashManager = (function () {
	
	  var EVENT_HASH_CHANGED = 'hashChanged';
	  var MAP_STATE_KEY = 'loc';
	
	  var hashManager = {},
	      state = {};
	
	  // Mixin EventEmitter functionality
	  _Object$assign(hashManager, _events.EventEmitter.prototype);
	
	  // Handle hashchange events
	  window.addEventListener('hashchange', onHashChange);
	
	  function updateHash(newState) {
	
	    var mergedState = _Object$assign({}, state, newState);
	
	    // remove null/undefined values
	    // and format map values
	    for (var key in mergedState) {
	      if (mergedState[key] == null) {
	        delete mergedState[key];
	      } else if (key === MAP_STATE_KEY) {
	        mergedState[key] = formatMapCenterAndZoom(mergedState[MAP_STATE_KEY]);
	      }
	    }
	
	    var hash = '#' + _Object$keys(mergedState).map(function (key) {
	      return key + '=' + mergedState[key];
	    }).join('&');
	    if (document.location.hash !== hash) {
	      document.location.replace(hash);
	    }
	  }
	
	  /**
	   * Get the current state of the application, as reflected in the URL hash.
	   * Retrieves all state in the hash, unless a specific key is passed.
	   * @param  {String} key       If specified, will retrieve only the value stored at this key.
	   * @return {String|Object}    If `key` is passed, returns the value stored at that key; otherwise, returns all state in the hash.
	   */
	  function getState() {
	    var key = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	    if (key) {
	      return state[key];
	    } else {
	      return _Object$assign({}, state);
	    }
	  }
	
	  function setState(val, silent) {
	
	    state = val;
	    if (!silent) {
	      hashManager.emit(EVENT_HASH_CHANGED, _Object$assign({}, state));
	    }
	  }
	
	  function onHashChange() {
	
	    setState(parseHash(window.location.hash));
	  }
	
	  function parseHash(hash) {
	
	    // Split into `&`-delimited parts and store as key-value pairs
	    var hashState = hash.replace(/^#\/?|\/$/g, '').split('&').reduce(function (obj, pair) {
	      pair = pair.split('=');
	      if (pair[0] === MAP_STATE_KEY) {
	        pair[1] = parseMapCenterAndZoom(pair[1]);
	      }
	      obj[pair[0]] = pair[1];
	      return obj;
	    }, {});
	
	    return hashState;
	  }
	
	  function parseMapCenterAndZoom(args) {
	
	    args = args.split('/');
	    if (args.length == 3) {
	
	      var zoom = parseInt(args[0], 10),
	          lat = parseFloat(args[1]),
	          lon = parseFloat(args[2]);
	
	      if (isNaN(zoom) || isNaN(lat) || isNaN(lon)) {
	        return false;
	      } else {
	
	        return {
	          center: [lat, lon],
	          zoom: zoom
	        };
	      }
	    } else {
	      return false;
	    }
	  }
	
	  function formatMapCenterAndZoom(mapState) {
	
	    var lat = undefined,
	        lng = undefined,
	        zoom = mapState.zoom,
	        precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
	
	    if (Array.isArray(mapState.center)) {
	      lat = mapState.center[0];
	      lng = mapState.center[1];
	    } else {
	      lat = mapState.center.lat;
	      lng = mapState.center.lng;
	    }
	
	    return [zoom, lat.toFixed(precision), lng.toFixed(precision)].join('/');
	  }
	
	  // Establish initial state
	  setState(parseHash(window.location.hash), true);
	
	  // Public interface
	  hashManager.EVENT_HASH_CHANGED = EVENT_HASH_CHANGED;
	  hashManager.MAP_STATE_KEY = MAP_STATE_KEY;
	  hashManager.updateHash = updateHash;
	  hashManager.getState = getState;
	  return hashManager;
	})();
	
	exports['default'] = HashManager;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _DiscreteBarChartDiscreteBarChart = __webpack_require__(46);
	
	var _DiscreteBarChartDiscreteBarChart2 = _interopRequireDefault(_DiscreteBarChartDiscreteBarChart);
	
	var _HorizontalDiscreteBarChartImpls = __webpack_require__(77);
	
	var _HorizontalDiscreteBarChartImpls2 = _interopRequireDefault(_HorizontalDiscreteBarChartImpls);
	
	var HorizontalDiscreteBarChart = (function (_DiscreteBarChart) {
	  _inherits(HorizontalDiscreteBarChart, _DiscreteBarChart);
	
	  _createClass(HorizontalDiscreteBarChart, null, [{
	    key: 'propTypes',
	    value: _extends({}, _DiscreteBarChartDiscreteBarChart2['default'].propTypes),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _DiscreteBarChartDiscreteBarChart2['default'].defaultProps, {
	      xScale: _d32['default'].scale.linear(),
	      yScale: _d32['default'].scale.ordinal()
	    }),
	    enumerable: true
	  }]);
	
	  function HorizontalDiscreteBarChart(props) {
	    _classCallCheck(this, HorizontalDiscreteBarChart);
	
	    _get(Object.getPrototypeOf(HorizontalDiscreteBarChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _HorizontalDiscreteBarChartImpls2['default'];
	  }
	
	  return HorizontalDiscreteBarChart;
	})(_DiscreteBarChartDiscreteBarChart2['default']);
	
	exports['default'] = HorizontalDiscreteBarChart;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _DiscreteBarChartDiscreteBarChartImpls = __webpack_require__(47);
	
	var _DiscreteBarChartDiscreteBarChartImpls2 = _interopRequireDefault(_DiscreteBarChartDiscreteBarChartImpls);
	
	var HorizontalDiscreteBarChartImpls = (function (_DiscreteBarChartImpls) {
	  _inherits(HorizontalDiscreteBarChartImpls, _DiscreteBarChartImpls);
	
	  function HorizontalDiscreteBarChartImpls() {
	    _classCallCheck(this, HorizontalDiscreteBarChartImpls);
	
	    _get(Object.getPrototypeOf(HorizontalDiscreteBarChartImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(HorizontalDiscreteBarChartImpls, [{
	    key: 'preRender',
	    value: function preRender() {
	      var _props = this.props;
	      var data = _props.data;
	      var xAccessor = _props.xAccessor;
	      var yAccessor = _props.yAccessor;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	
	      yScale.rangeRoundBands([0, this.height], this.barSpacing);
	      yScale.domain(data.map(function (d) {
	        return yAccessor(d);
	      }));
	      xScale.range([0, this.width]);
	      xScale.domain([0, _d32['default'].max(data, function (d) {
	        return xAccessor(d);
	      })]);
	
	      this.updateAxis(0, xScale, this.props.xaxis);
	      this.updateAxis(1, yScale, this.props.yaxis);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var data = _props2.data;
	      var xAccessor = _props2.xAccessor;
	      var yAccessor = _props2.yAccessor;
	      var xScale = _props2.xScale;
	      var yScale = _props2.yScale;
	
	      var bars = this.base.selectAll('.bar').data(data);
	
	      bars.exit().remove();
	
	      bars.enter().append('rect').attr('class', 'bar');
	
	      bars.attr('x', '0').attr('y', function (d) {
	        return yScale(yAccessor(d));
	      }).attr('width', function (d) {
	        return xScale(xAccessor(d));
	      }).attr('height', yScale.rangeBand());
	    }
	  }]);
	
	  return HorizontalDiscreteBarChartImpls;
	})(_DiscreteBarChartDiscreteBarChartImpls2['default']);
	
	exports['default'] = HorizontalDiscreteBarChartImpls;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _Object$assign = __webpack_require__(23)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _introJs = __webpack_require__(202);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(151);
	
	var IntroManager = (function (_React$Component) {
	  _inherits(IntroManager, _React$Component);
	
	  _createClass(IntroManager, null, [{
	    key: 'propTypes',
	    value: {
	      open: _react.PropTypes.bool,
	      step: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	      steps: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	        'element': _react.PropTypes.string,
	        'intro': _react.PropTypes.string,
	        'position': function position(props, propName, componentName) {
	          if (!/top|right|bottom|left/.test(props[propName])) {
	            return new Error('`position` must be one of \'top\', \'right\', \'bottom\', or \'left\'.');
	          }
	        }
	      })).isRequired,
	      config: _react.PropTypes.object,
	      onExit: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      open: false,
	      step: 0,
	      steps: [],
	      config: {
	        'showStepNumbers': false,
	        'skipLabel': '×',
	        'nextLabel': '⟩',
	        'prevLabel': '⟨',
	        'doneLabel': '×'
	      },
	      onExit: null
	    },
	    enumerable: true
	  }]);
	
	  function IntroManager(props) {
	    _classCallCheck(this, IntroManager);
	
	    _get(Object.getPrototypeOf(IntroManager.prototype), 'constructor', this).call(this, props);
	
	    this.onIntroExit = this.onIntroExit.bind(this);
	
	    this.initIntro();
	  }
	
	  _createClass(IntroManager, [{
	    key: 'initIntro',
	    value: function initIntro() {
	
	      this.intro = (0, _introJs.introJs)(document.querySelector('body'));
	      this.intro.onexit(this.onIntroExit);
	      this.intro.oncomplete(this.onIntroExit);
	      this.introIsOpen = false;
	    }
	  }, {
	    key: 'onIntroExit',
	    value: function onIntroExit() {
	
	      this.introIsOpen = false;
	      if (this.props.onExit) {
	        this.props.onExit();
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	
	      //
	
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      //
	
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      //
	
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	
	      if (this.props.open) {
	
	        // Intro.js manages its own state when open.
	        if (this.introIsOpen) {
	          return;
	        }
	
	        if (!this.intro._introItems) {
	
	          // initialize only once
	          var options = {
	            steps: this.props.steps
	          };
	          options = _Object$assign(options, this.props.config);
	          this.intro.setOptions(options);
	
	          // start from the specified step
	          this.intro.goToStep(this.props.step).start();
	        } else {
	
	          // after initialization, Intro.js does a poor job
	          // of accurately tracking the current step,
	          // so we have to do this dance.
	          if (!this.props.step || this.props.step === 1) {
	            this.intro.start();
	          } else {
	            this.intro.goToStep(this.props.step - 1).start();
	          }
	        }
	
	        this.introIsOpen = true;
	      } else {
	
	        this.intro.exit();
	      }
	    }
	  }, {
	    key: 'getDefaultState',
	    value: function getDefaultState() {
	
	      return {};
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2['default'].createElement('div', { className: 'panorama intro-manager' });
	    }
	  }]);
	
	  return IntroManager;
	})(_react2['default'].Component);
	
	exports['default'] = IntroManager;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PanoramaDispatcherJs = __webpack_require__(31);
	
	__webpack_require__(152);
	
	var ItemSelector = (function (_React$Component) {
	  _inherits(ItemSelector, _React$Component);
	
	  _createClass(ItemSelector, null, [{
	    key: 'propTypes',
	    value: {
	      title: _react.PropTypes.string,
	      items: _react.PropTypes.array.isRequired,
	      selectedIndex: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	      selectedItem: _react.PropTypes.object,
	      onItemSelected: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      title: '',
	      items: [],
	      selectedIndex: '',
	      selectedItem: null,
	      onItemSelected: null
	    },
	    enumerable: true
	  }]);
	
	  function ItemSelector(props) {
	    _classCallCheck(this, ItemSelector);
	
	    _get(Object.getPrototypeOf(ItemSelector.prototype), 'constructor', this).call(this, props);
	
	    // manually bind event handlers,
	    // since React ES6 doesn't do this automatically
	    this.onItemClick = this.onItemClick.bind(this);
	    this.onArrowMouseDown = this.onArrowMouseDown.bind(this);
	    this.onArrowMouseUp = this.onArrowMouseUp.bind(this);
	    this.animateScrollPosition = this.animateScrollPosition.bind(this);
	  }
	
	  _createClass(ItemSelector, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	
	      //
	
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this.scrollToSelectedItem();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      //
	
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	
	      this.scrollToSelectedItem();
	    }
	  }, {
	    key: 'onItemClick',
	    value: function onItemClick(event) {
	
	      // Defense.
	      if (!event.currentTarget || !event.currentTarget.dataset) {
	        return;
	      }
	
	      // Direct communication: call callback if it was passed in.
	      if (this.props.onItemSelected) {
	        this.props.onItemSelected(this.props.items[event.currentTarget.dataset.index], event.currentTarget.dataset.index);
	      }
	
	      // Indirect communication: Notify any subscribers of item selection.
	      _PanoramaDispatcherJs.PanoramaDispatcher.ItemSelector.selected(this.props.items[event.currentTarget.dataset.index], event.currentTarget.dataset.index);
	    }
	  }, {
	    key: 'onArrowMouseDown',
	    value: function onArrowMouseDown(event) {
	
	      var dir = undefined;
	      if (event.target.classList.contains('up-arrow')) {
	        dir = -1;
	      } else if (event.target.classList.contains('down-arrow')) {
	        dir = 1;
	      }
	      if (!dir) {
	        return;
	      }
	
	      var itemList = this.refs['item-list'],
	          nextAccelCounter = 16,
	          accelCounter = 0,
	          itemEl = itemList.querySelector('li'),
	          itemMetrics = window.getComputedStyle(itemEl),
	          speed = itemEl.offsetHeight + (itemMetrics ? parseFloat(itemMetrics['margin-bottom'].replace('px', '')) : 0);
	
	      this.arrowMouseUp = false;
	
	      var onArrowMouseHold = (function () {
	        if (accelCounter-- <= 1) {
	          this.scrollToPosition(itemList.scrollTop + dir * speed);
	          accelCounter = nextAccelCounter = Math.max(1, Math.floor(nextAccelCounter * 0.75));
	        }
	
	        if (!this.arrowMouseUp) {
	          window.requestAnimationFrame(onArrowMouseHold);
	        }
	      }).bind(this);
	
	      window.requestAnimationFrame(onArrowMouseHold);
	    }
	  }, {
	    key: 'onArrowMouseUp',
	    value: function onArrowMouseUp(event) {
	
	      this.arrowMouseUp = true;
	    }
	  }, {
	    key: 'scrollToPosition',
	    value: function scrollToPosition(position) {
	
	      if (typeof this.targetScrollPosition === 'undefined') {
	        // Not currently animating, so start
	        this.targetScrollPosition = position;
	        this.animateScrollPosition();
	      } else {
	        // Already animating; just update target
	        this.targetScrollPosition = position;
	      }
	    }
	  }, {
	    key: 'scrollToSelectedItem',
	    value: function scrollToSelectedItem() {
	
	      var itemList = this.refs['item-list'],
	          selectedItem = itemList.querySelector('.selected');
	
	      if (selectedItem) {
	        this.scrollToPosition(selectedItem.offsetTop - itemList.offsetHeight);
	      }
	    }
	  }, {
	    key: 'animateScrollPosition',
	    value: function animateScrollPosition() {
	
	      var itemList = this.refs['item-list'],
	          delta = undefined;
	
	      if (typeof this.scrollPosition === 'undefined') {
	        this.scrollPosition = itemList.scrollTop;
	      }
	
	      delta = this.targetScrollPosition - this.scrollPosition;
	
	      if (Math.abs(delta) > 1) {
	        this.scrollPosition += 0.25 * delta;
	        itemList.scrollTop = this.scrollPosition; // scrollTop rounds to the nearest int
	        window.requestAnimationFrame(this.animateScrollPosition);
	      } else {
	        itemList.scrollTop = this.targetScrollPosition;
	        this.targetScrollPosition = undefined;
	        this.scrollPosition = undefined;
	      }
	    }
	  }, {
	    key: 'getDefaultState',
	    value: function getDefaultState() {
	
	      return {};
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var isSelected = undefined;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'panorama item-selector' },
	        _react2['default'].createElement(
	          'h3',
	          null,
	          this.props.title
	        ),
	        _react2['default'].createElement('div', { className: 'scroll-arrow up-arrow', onMouseDown: this.onArrowMouseDown, onMouseUp: this.onArrowMouseUp }),
	        _react2['default'].createElement(
	          'ul',
	          { ref: 'item-list' },
	          this.props.items.map(function (item, i) {
	
	            isSelected = _this.props.selectedItem.id == item.id || // selectedItem with items as Objects
	            _this.props.selectedItem === item || // selectedItem with items as Strings
	            _this.props.selectedIndex === i; // selectedIndex
	
	            return _react2['default'].createElement(
	              'li',
	              {
	                className: 'item' + (isSelected ? ' selected' : '') + (item.className ? ' ' + item.className : ''),
	                'data-index': i,
	                key: i,
	                onClick: _this.onItemClick
	              },
	              _react2['default'].createElement(
	                'span',
	                null,
	                item.name
	              )
	            );
	          })
	        ),
	        _react2['default'].createElement('div', { className: 'scroll-arrow down-arrow', onMouseDown: this.onArrowMouseDown, onMouseUp: this.onArrowMouseUp })
	      );
	    }
	  }]);
	
	  return ItemSelector;
	})(_react2['default'].Component);
	
	exports['default'] = ItemSelector;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _objectWithoutProperties = __webpack_require__(33)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLeaflet = __webpack_require__(22);
	
	var _leaflet = __webpack_require__(21);
	
	var _lodashObjectPick = __webpack_require__(181);
	
	var _lodashObjectPick2 = _interopRequireDefault(_lodashObjectPick);
	
	var _lodashLangIsObject = __webpack_require__(17);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var _lodashLangIsArray = __webpack_require__(29);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashObjectAssign = __webpack_require__(65);
	
	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
	
	var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className'];
	
	__webpack_require__(153);
	
	var Choropleth = (function (_MapLayer) {
	  _inherits(Choropleth, _MapLayer);
	
	  _createClass(Choropleth, null, [{
	    key: 'PropTypes',
	    value: {
	      styler: _react.PropTypes.func,
	      onEachFeature: _react.PropTypes.func,
	      setTooltipContent: _react.PropTypes.func,
	      selectedStyle: _react.PropTypes.object,
	      onFeatureClick: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      selectedStyle: {}
	    },
	    enumerable: true
	  }]);
	
	  function Choropleth() {
	    _classCallCheck(this, Choropleth);
	
	    _get(Object.getPrototypeOf(Choropleth.prototype), 'constructor', this).call(this);
	
	    // Internal variables
	    this.mouseTimer = null;
	    this.currentId = null;
	    this.hasTooltip = false;
	
	    // State used to update tooltip
	    this.state = {
	      showTooltip: false,
	      tooltipPosition: null,
	      tooltipContent: ''
	    };
	  }
	
	  // TODO: Handle updates
	
	  _createClass(Choropleth, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return true;
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Choropleth.prototype), 'componentWillMount', this).call(this);
	
	      var data = this.props.data;
	
	      var options = this.setGeoJSONOptions();
	      this.setTooltipFlag();
	      this.leafletElement = (0, _leaflet.geoJson)(data, options);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var map = this.props.map;
	
	      this.leafletElement.addTo(map);
	      if (this.hasTooltip) map.on('mousemove', this.onMouseMove.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var data = this.props.data;
	
	      if (prevProps.data !== data) {
	        this.leafletElement.addData(data);
	      }
	    }
	  }, {
	    key: 'setGeoJSONOptions',
	    value: function setGeoJSONOptions() {
	      var props = _objectWithoutProperties(this.props, []);
	
	      return {
	        style: props.style || null,
	        onEachFeature: props.onEachFeature || this.onEachFeature.bind(this),
	        filter: props.filter || null,
	        pointToLayer: props.pointToLayer || null,
	        coordsToLatLng: props.coordsToLatLng || null
	      };
	    }
	  }, {
	    key: 'setTooltipFlag',
	    value: function setTooltipFlag() {
	      var _this = this;
	
	      var children = this.props.children;
	
	      _react.Children.forEach(children, function (child) {
	        if (child.type && child.type.name && child.type.name === 'Tooltip') _this.hasTooltip = true;
	      });
	    }
	  }, {
	    key: 'getPathOptions',
	    value: function getPathOptions(props) {
	      return (0, _lodashObjectPick2['default'])(props, OPTIONS);
	    }
	  }, {
	    key: 'getTooltipContent',
	    value: function getTooltipContent(feature) {
	      if (typeof this.props.setTooltipContent === 'function') {
	        return this.props.setTooltipContent(feature);
	      }
	
	      return '';
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver(evt) {
	      if (this.currentId === evt.target) return;
	      evt.target.setStyle(this.props.selectedStyle);
	
	      if (this.currentId !== evt.target) {
	        this.currentId = evt.target;
	        var content = this.getTooltipContent(evt.target.feature);
	        this.setState({ showTooltip: true, tooltipPosition: evt.latlng, tooltipContent: content });
	      }
	
	      if (!L.Browser.ie && !L.Browser.opera) {
	        evt.target.bringToFront();
	      }
	    }
	  }, {
	    key: 'onMouseOut',
	    value: function onMouseOut(evt) {
	      var _this2 = this;
	
	      this.leafletElement.resetStyle(evt.target);
	      this.currentId = null;
	      clearTimeout(this.mouseTimer);
	      this.mouseTimer = setTimeout(function () {
	        if (_this2.currentId === null) {
	          _this2.currentId = null;
	          _this2.setState({ showTooltip: false });
	        }
	      }, 200);
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(evt) {
	      if (!this.currentId) return;
	      _leaflet.DomEvent.stopPropagation(evt);
	      this.setState({ tooltipPosition: evt.latlng });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(evt) {
	      if (typeof this.props.onFeatureClick === 'function') {
	        this.props.onFeatureClick(evt.target, this.props.map);
	      }
	    }
	  }, {
	    key: 'onEachFeature',
	    value: function onEachFeature(feature, layer) {
	      if (this.hasTooltip) {
	        layer.on({
	          mouseover: this.onMouseOver.bind(this),
	          mouseout: this.onMouseOut.bind(this)
	        });
	      }
	
	      layer.on('click', this.onClick.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderChildrenWithProps({
	        tooltipContainer: this.leafletElement,
	        popupContainer: this.leafletElement,
	        position: this.state.tooltipPosition,
	        isOpen: this.state.showTooltip,
	        content: this.state.tooltipContent
	      });
	    }
	  }]);
	
	  return Choropleth;
	})(_reactLeaflet.MapLayer);
	
	exports['default'] = Choropleth;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _objectWithoutProperties = __webpack_require__(33)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLeaflet = __webpack_require__(22);
	
	var _leaflet = __webpack_require__(21);
	
	var _LDonut = __webpack_require__(82);
	
	var Donut = (function (_Path) {
	  _inherits(Donut, _Path);
	
	  _createClass(Donut, null, [{
	    key: 'propTypes',
	
	    // Radii are in meters
	    value: {
	      center: _reactLeaflet.PropTypes.latlng.isRequired,
	      outerRadius: _react.PropTypes.number.isRequired,
	      innerRadius: _react.PropTypes.number.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {},
	    enumerable: true
	  }]);
	
	  function Donut() {
	    _classCallCheck(this, Donut);
	
	    _get(Object.getPrototypeOf(Donut.prototype), 'constructor', this).call(this);
	  }
	
	  _createClass(Donut, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var center = _props.center;
	      var outerRadius = _props.outerRadius;
	      var innerRadius = _props.innerRadius;
	
	      var props = _objectWithoutProperties(_props, ['center', 'outerRadius', 'innerRadius']);
	
	      _get(Object.getPrototypeOf(Donut.prototype), 'componentWillMount', this).call(this);
	      this.leafletElement = new _LDonut.LeafletDonut(center, outerRadius, innerRadius, this.getPathOptions(props));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.center !== prevProps.center) {
	        this.leafletElement.setLatLng(this.props.center);
	      }
	
	      if (this.props.outerRadius !== prevProps.outerRadius || this.props.innerRadius !== prevProps.innerRadius) {
	        this.leafletElement.setRadius(this.props.outerRadius, this.props.innerRadius);
	      }
	
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);
	
	  return Donut;
	})(_reactLeaflet.Path);
	
	exports['default'] = Donut;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(48)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _leaflet = __webpack_require__(21);
	
	var L = _interopRequireWildcard(_leaflet);
	
	var LeafletDonut = (function (L) {
	
	  return L.Circle.extend({
	
	    initialize: function initialize(latlng, outerRadius, innerRadius, options) {
	      L.Path.prototype.initialize.call(this, options);
	
	      this._latlng = L.latLng(latlng);
	      this._mOuterRadius = outerRadius;
	      this._mInnerRadius = this._validateInnerRadius(outerRadius, innerRadius);
	    },
	
	    setRadius: function setRadius(outerRadius, innerRadius) {
	      this._mOuterRadius = outerRadius;
	      this._mInnerRadius = this._validateInnerRadius(outerRadius, innerRadius);
	      return this.redraw();
	    },
	
	    projectLatlngs: function projectLatlngs() {
	      var lngRadius = this._getLngRadius(),
	          latlng = this._latlng,
	          outerPointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius[0]]),
	          innerPointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius[1]]);
	
	      this._point = this._map.latLngToLayerPoint(latlng);
	      this._outerRadius = Math.max(this._point.x - outerPointLeft.x, 1);
	      this._innerRadius = Math.max(this._point.x - innerPointLeft.x, 1);
	    },
	
	    getBounds: function getBounds() {
	      var lngRadius = this._getLngRadius()[0],
	          latRadius = this._getLatRadius()[0],
	          latlng = this._latlng;
	
	      return new L.LatLngBounds([latlng.lat - latRadius, latlng.lng - lngRadius], [latlng.lat + latRadius, latlng.lng + lngRadius]);
	    },
	
	    getRadius: function getRadius() {
	      return [this._mOuterRadius, this._mInnerRadius];
	    },
	
	    _getLatRadius: function _getLatRadius() {
	      return [this._mOuterRadius / 40075017 * 360, this._mInnerRadius / 40075017 * 360];
	    },
	
	    _getLngRadius: function _getLngRadius() {
	      var radii = this._getLatRadius();
	
	      return [radii[0] / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat), radii[1] / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat)];
	    },
	
	    _checkIfEmpty: function _checkIfEmpty() {
	      if (!this._map) {
	        return false;
	      }
	
	      var vp = this._map._pathViewport,
	          outerRadius = this._outerRadius,
	          p = this._point;
	
	      return p.x - outerRadius > vp.max.x || p.y - outerRadius > vp.max.y || p.x + outerRadius < vp.min.x || p.y + outerRadius < vp.min.y;
	    },
	
	    _validateInnerRadius: function _validateInnerRadius(outer, inner) {
	      if (inner >= outer) return outer - 1;
	      return inner;
	    },
	
	    getArc: function getArc(pt, outerRadius, innerRadius) {
	      var x2 = pt.x - 0.01;
	      var y1 = pt.y - outerRadius;
	      var y2 = pt.y - innerRadius;
	
	      return ['M', pt.x, y1, 'A', outerRadius, outerRadius, 0, 1, 1, x2, y1, 'M', x2, y2, 'A', innerRadius, innerRadius, 0, 1, 0, pt.x, y2, 'Z'].join(' ');
	    },
	
	    getPathString: function getPathString() {
	      var p = this._point,
	          outerRadius = this._outerRadius,
	          innerRadius = this._innerRadius;
	
	      if (this._checkIfEmpty()) {
	        return '';
	      }
	
	      if (L.Browser.svg) {
	        return this.getArc(p, outerRadius, innerRadius);
	      } else {
	        // TODO: VML Donut path
	        p._round();
	        r = Math.round(r);
	        return 'AL ' + p.x + ',' + p.y + ' ' + outerRadius + ',' + outerRadius + ' 0,' + 65535 * 360;
	      }
	    }
	  });
	})(L);
	exports.LeafletDonut = LeafletDonut;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _objectWithoutProperties = __webpack_require__(33)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _reactLeaflet = __webpack_require__(22);
	
	var _leaflet = __webpack_require__(21);
	
	var _lodashObjectAssign = __webpack_require__(65);
	
	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
	
	var Tooltip = (function (_Popup) {
	  _inherits(Tooltip, _Popup);
	
	  function Tooltip() {
	    _classCallCheck(this, Tooltip);
	
	    _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Tooltip, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Tooltip.prototype), 'componentWillMount', this).call(this);
	
	      var _props = this.props;
	      var children = _props.children;
	      var map = _props.map;
	
	      var props = _objectWithoutProperties(_props, ['children', 'map']);
	
	      var options = (0, _lodashObjectAssign2['default'])({}, props);
	
	      options.className = options.className ? options.className + ' panorama-leaflet-tip' : 'panorama-leaflet-tip';
	      options.closeButton = false;
	      options.offset = options.offset || [0, -3];
	
	      this.leafletElement = (0, _leaflet.popup)(options);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _props2 = this.props;
	      var map = _props2.map;
	      var position = _props2.position;
	      var isOpen = _props2.isOpen;
	      var content = _props2.content;
	
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
	  }], [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node,
	      map: _react.PropTypes.instanceOf(_leaflet.Map),
	      tooltipContainer: _react.PropTypes.object,
	      position: _reactLeaflet.PropTypes.latlng
	    },
	    enumerable: true
	  }]);
	
	  return Tooltip;
	})(_reactLeaflet.Popup);
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PanoramaDispatcherJs = __webpack_require__(31);
	
	__webpack_require__(154);
	
	var Legend = (function (_React$Component) {
	  _inherits(Legend, _React$Component);
	
	  _createClass(Legend, null, [{
	    key: 'propTypes',
	    value: {
	      /**
	       * @type {Array[String]}
	       * List of items (Strings) to display.
	       */
	      items: _react.PropTypes.array.isRequired,
	
	      /**
	       * @type {String}
	       * Currently selected item.
	       * Either the string value of the item (as displayed on-screen) or the index of the item within the `items` array.
	       */
	      selectedItem: _react.PropTypes.string,
	
	      /**
	       * @type {Function}
	       * Callback invoked on selection of an item, e.g. a mouse click.
	       */
	      onItemSelected: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      items: [],
	      selectedItem: '',
	      onItemSelected: null
	    },
	    enumerable: true
	  }]);
	
	  function Legend(props) {
	    _classCallCheck(this, Legend);
	
	    _get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).call(this, props);
	
	    // manually bind event handlers,
	    // since React ES6 doesn't do this automatically
	    this.onItemClick = this.onItemClick.bind(this);
	    this.onItemEnter = this.onItemEnter.bind(this);
	    this.onItemLeave = this.onItemLeave.bind(this);
	  }
	
	  _createClass(Legend, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	  }, {
	    key: 'onItemClick',
	    value: function onItemClick(event) {
	
	      // Defense.
	      if (!event.currentTarget || !event.currentTarget.dataset) {
	        return;
	      }
	
	      // Direct communication: call callback if it was passed in.
	      if (this.props.onItemSelected) {
	        this.props.onItemSelected(event.currentTarget.dataset.item, this.props.items.indexOf(event.currentTarget.dataset.item));
	      }
	
	      // Indirect communication: Notify any subscribers of item selection.
	      _PanoramaDispatcherJs.PanoramaDispatcher.Legend.selected(event.currentTarget.dataset.item, this.props.items.indexOf(event.currentTarget.dataset.item));
	    }
	  }, {
	    key: 'onItemEnter',
	    value: function onItemEnter(event) {
	
	      // Any desired mouse enter functionality goes here.
	      // console.log("entering:", event.currentTarget.dataset.item);
	
	    }
	  }, {
	    key: 'onItemLeave',
	    value: function onItemLeave(event) {
	
	      // Any desired mouse leave functionality goes here.
	      // console.log("leaving:", event.currentTarget.dataset.item);
	
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'panorama legend ' + this.props.className },
	        _react2['default'].createElement(
	          'ul',
	          null,
	          this.props.items.map(function (item, i) {
	            var selected = _this.props.selectedItem === item || _this.props.selectedItem == i;
	            return _react2['default'].createElement(
	              'li',
	              {
	                className: 'item' + (selected ? ' selected' : ''),
	                'data-item': item,
	                key: item,
	                onClick: _this.onItemClick,
	                onMouseEnter: _this.onItemEnter,
	                onMouseLeave: _this.onItemLeave
	              },
	              _react2['default'].createElement(
	                'span',
	                null,
	                _this.capitalize(item)
	              )
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'capitalize',
	    value: function capitalize(str) {
	
	      return str.charAt(0).toUpperCase() + str.slice(1);
	    }
	  }]);
	
	  return Legend;
	})(_react2['default'].Component);
	
	exports['default'] = Legend;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _react = __webpack_require__(6);
	
	var _chartsD3ReactBase = __webpack_require__(14);
	
	var _chartsD3ReactBase2 = _interopRequireDefault(_chartsD3ReactBase);
	
	var _LineChartImpls = __webpack_require__(86);
	
	var _LineChartImpls2 = _interopRequireDefault(_LineChartImpls);
	
	__webpack_require__(155);
	
	var LineChart = (function (_D3ReactBase) {
	  _inherits(LineChart, _D3ReactBase);
	
	  _createClass(LineChart, null, [{
	    key: 'propTypes',
	
	    // extend superclass `props` validators
	    value: _extends({}, _chartsD3ReactBase2['default'].propTypes, {
	      strokeColor: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	      strokeOpacity: _react.PropTypes.number,
	      isInterpolated: _react.PropTypes.bool,
	      interpolate: _react.PropTypes.string
	    }),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _chartsD3ReactBase2['default'].defaultProps, {
	      className: 'line-chart',
	      isInterpolated: false,
	      interpolate: 'basis',
	      xaxis: {
	        className: 'x axis',
	        orient: 'bottom',
	        position: 'bottom',
	        attr: {
	          dx: '0',
	          dy: '0.5em'
	        },
	        style: {
	          'text-anchor': 'middle'
	        }
	      },
	      yaxis: {
	        className: 'y axis',
	        orient: 'left'
	      }
	    }),
	    enumerable: true
	  }]);
	
	  function LineChart(props) {
	    _classCallCheck(this, LineChart);
	
	    _get(Object.getPrototypeOf(LineChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _LineChartImpls2['default'];
	  }
	
	  return LineChart;
	})(_chartsD3ReactBase2['default']);
	
	exports['default'] = LineChart;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _chartsD3Component = __webpack_require__(13);
	
	var _chartsD3Component2 = _interopRequireDefault(_chartsD3Component);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsCommonAxis = __webpack_require__(18);
	
	var _chartsCommonAxis2 = _interopRequireDefault(_chartsCommonAxis);
	
	var LineChartImpls = (function (_D3Component) {
	  _inherits(LineChartImpls, _D3Component);
	
	  function LineChartImpls() {
	    _classCallCheck(this, LineChartImpls);
	
	    _get(Object.getPrototypeOf(LineChartImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(LineChartImpls, [{
	    key: 'willMount',
	    value: function willMount() {
	      if (this.props.xaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.xaxis, this.props.xScale));
	      }
	
	      if (this.props.yaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.yaxis, this.props.yScale));
	      }
	
	      this.lineGenerator = _d32['default'].svg.line();
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount(props) {
	      _get(Object.getPrototypeOf(LineChartImpls.prototype), 'onMount', this).call(this, props);
	
	      this.lineLayer = this.base.append('g').classed('line-layer', true);
	
	      this._render();
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {
	      var _props = this.props;
	      var data = _props.data;
	      var xAccessor = _props.xAccessor;
	      var yAccessor = _props.yAccessor;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var isInterpolated = _props.isInterpolated;
	      var interpolate = _props.interpolate;
	
	      xScale.range([0, this.width]);
	      yScale.range([this.height, 0]);
	
	      this.updateAxis(0, xScale, this.props.xaxis);
	      this.updateAxis(1, yScale, this.props.yaxis);
	
	      var inter = isInterpolated ? interpolate : 'linear';
	      this.lineGenerator.interpolate(inter).x(function (d) {
	        return xScale(xAccessor(d));
	      }).y(function (d) {
	        return yScale(yAccessor(d));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props2 = this.props;
	      var data = _props2.data;
	      var xAccessor = _props2.xAccessor;
	      var yAccessor = _props2.yAccessor;
	      var xScale = _props2.xScale;
	      var yScale = _props2.yScale;
	      var strokeColor = _props2.strokeColor;
	      var strokeOpacity = _props2.strokeOpacity;
	
	      var lines = this.lineLayer.selectAll('path.line').data(data);
	
	      lines.exit().remove();
	
	      lines.enter().append('path').attr('class', 'line');
	
	      lines.attr('d', function (d) {
	        return _this.lineGenerator(d);
	      }).style({
	        stroke: strokeColor,
	        strokeOpacity: strokeOpacity
	      });
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {}
	  }]);
	
	  return LineChartImpls;
	})(_chartsD3Component2['default']);
	
	exports['default'] = LineChartImpls;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _react = __webpack_require__(6);
	
	var _chartsD3ReactBase = __webpack_require__(14);
	
	var _chartsD3ReactBase2 = _interopRequireDefault(_chartsD3ReactBase);
	
	var _MapChoroplethImpls = __webpack_require__(88);
	
	var _MapChoroplethImpls2 = _interopRequireDefault(_MapChoroplethImpls);
	
	__webpack_require__(156);
	
	var MapChoropleth = (function (_D3ReactBase) {
	  _inherits(MapChoropleth, _D3ReactBase);
	
	  _createClass(MapChoropleth, null, [{
	    key: 'propTypes',
	
	    // extend superclass `props` validators
	    value: _extends({}, _chartsD3ReactBase2['default'].propTypes, {
	      projection: _react.PropTypes.string,
	      mapScale: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	      selected: _react.PropTypes.any,
	      selectedAccessor: _react.PropTypes.func,
	      hoverStyle: _react.PropTypes.object
	    }),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _chartsD3ReactBase2['default'].defaultProps, {
	      projection: 'albersUsa',
	      className: 'map choropleth',
	      mapScale: 500
	    }),
	    enumerable: true
	  }]);
	
	  function MapChoropleth(props) {
	    _classCallCheck(this, MapChoropleth);
	
	    _get(Object.getPrototypeOf(MapChoropleth.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _MapChoroplethImpls2['default'];
	  }
	
	  return MapChoropleth;
	})(_chartsD3ReactBase2['default']);
	
	exports['default'] = MapChoropleth;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _slicedToArray = __webpack_require__(107)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _chartsD3Component = __webpack_require__(13);
	
	var _chartsD3Component2 = _interopRequireDefault(_chartsD3Component);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var MapChoroplethImpls = (function (_D3Component) {
	  _inherits(MapChoroplethImpls, _D3Component);
	
	  function MapChoroplethImpls() {
	    _classCallCheck(this, MapChoroplethImpls);
	
	    _get(Object.getPrototypeOf(MapChoroplethImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(MapChoroplethImpls, [{
	    key: 'willMount',
	    value: function willMount() {}
	  }, {
	    key: 'onMount',
	    value: function onMount(props) {
	      _get(Object.getPrototypeOf(MapChoroplethImpls.prototype), 'onMount', this).call(this, props);
	
	      this._path = _d32['default'].geo.path();
	      this._projection = _d32['default'].geo[this.props.projection]();
	
	      this._render();
	      this._selected = null;
	      this._hoverElement = null;
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {
	      this.updateProjection();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var styler = _props.styler;
	      var interactive = _props.interactive;
	      var selected = _props.selected;
	      var selectedAccessor = _props.selectedAccessor;
	
	      if (!data || !data.features) return;
	      var self = this;
	
	      var path = this.base.selectAll('path').data(data.features);
	
	      path.exit().remove();
	
	      path.enter().append('path').attr('class', 'geometry').attr('d', this._path);
	
	      path.each(function (d) {
	        _d32['default'].select(this).style(styler(d));
	      });
	
	      if (interactive) {
	        _d32['default'].selectAll('.hover-dupe').remove();
	        this._hoverElement = null;
	        path.on('click', null).on('mouseover', null).on('mouseout', null).on('click', this.dispatch.click).on('mouseenter', function (d) {
	          if (selectedAccessor(d) === selected) return;
	          self._hoverElement = self.bringToTop(this, 'hover-dupe sel-' + selectedAccessor(d), self.props.hoverStyle || null);
	          self.dispatch.mouseOver(d);
	        }).on('mouseleave', function (d) {
	          if (self._hoverElement) self._hoverElement.remove();
	          self._hoverElement = null;
	          self.dispatch.mouseOut(d);
	        });
	      }
	
	      if (selected && selected !== this._selected) {
	        this._selected = selected;
	        _d32['default'].selectAll('.selected-dupe').remove();
	        path.filter(function (d) {
	          return selectedAccessor(d) === selected;
	        }).each(function () {
	          // clone node then move to top
	          self.bringToTop(this, 'selected-dupe');
	        });
	      }
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {}
	  }, {
	    key: 'bringToTop',
	    value: function bringToTop(node, klass, style) {
	      var elm = _d32['default'].select(node.parentNode.appendChild(node.cloneNode(true), node.nextSibling)).classed(klass, true);
	
	      if (style) {
	        elm.style(style);
	      }
	
	      return elm;
	    }
	  }, {
	    key: 'updateProjection',
	    value: function updateProjection() {
	      var _props2 = this.props;
	      var data = _props2.data;
	      var mapScale = _props2.mapScale;
	      var projection = _props2.projection;
	
	      var scale = mapScale;
	      var translate = [this.width / 2, this.height / 2];
	
	      if (mapScale === 'auto') {
	        var _fitMap = this.fitMap(data);
	
	        var _fitMap2 = _slicedToArray(_fitMap, 2);
	
	        scale = _fitMap2[0];
	        translate = _fitMap2[1];
	      }
	
	      this._projection = _d32['default'].geo[projection]().scale(scale).translate(translate);
	
	      this._path.projection(this._projection);
	    }
	  }, {
	    key: 'fitMap',
	    value: function fitMap(geo) {
	      var projection = this.props.projection;
	
	      var proj = _d32['default'].geo[projection]().scale(1).translate([0, 0]);
	
	      var path = _d32['default'].geo.path().projection(proj);
	
	      var b = path.bounds(geo),
	          //[[left,top],[right,bottom]],
	      s = .95 / Math.max((b[1][0] - b[0][0]) / this.width, (b[1][1] - b[0][1]) / this.height),
	          t = [(this.width - s * (b[1][0] + b[0][0])) / 2, (this.height - s * (b[1][1] + b[0][1])) / 2];
	
	      return [s, t];
	    }
	  }]);
	
	  return MapChoroplethImpls;
	})(_chartsD3Component2['default']);
	
	exports['default'] = MapChoroplethImpls;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactModal = __webpack_require__(188);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	__webpack_require__(157);
	
	var Navigation = (function (_React$Component) {
	  _inherits(Navigation, _React$Component);
	
	  _createClass(Navigation, null, [{
	    key: 'propTypes',
	    value: {
	      nav_data: _react.PropTypes.array.isRequired,
	      show_menu: _react.PropTypes.bool,
	      on_hamburger_click: _react.PropTypes.func,
	      style: _react.PropTypes.object,
	      title: _react.PropTypes.string,
	      home_url: _react.PropTypes.string,
	      links: _react.PropTypes.array,
	      link_separator: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      title: 'American Panorama',
	      home_url: 'http://dsl.richmond.edu/panorama',
	      links: [],
	      link_separator: ' ',
	      nav_data: {},
	      show_menu: false,
	      on_hamburger_click: null,
	      style: {
	        overlay: {
	          position: 'fixed',
	          top: 0,
	          left: 0,
	          backgroundColor: 'rgba(0,0,0,0.5)'
	        },
	        content: {
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          bottom: 'auto',
	          right: 'auto',
	          border: 0,
	          background: 'rgba(0,0,0,0.5)',
	          overflow: 'auto',
	          WebkitOverflowScrolling: 'touch',
	          borderRadius: '4px',
	          outline: 'none',
	          padding: 0
	        }
	      }
	    },
	    enumerable: true
	  }]);
	
	  function Navigation(props) {
	    _classCallCheck(this, Navigation);
	
	    _get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Navigation, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	  }, {
	    key: 'computeDimensions',
	    value: function computeDimensions() {
	      // width of the left and right margins are 10
	      return (window.innerWidth - 40 * this.props.nav_data.length) / this.props.nav_data.length;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { id: 'hamburger' },
	          _react2['default'].createElement('img', { src: 'http://dsl.richmond.edu/panorama/static/images/menu.svg', onClick: this.props.on_hamburger_click })
	        ),
	        _react2['default'].createElement(
	          _reactModal2['default'],
	          {
	            isOpen: this.props.show_menu,
	            onRequestClose: this.props.on_hamburger_click,
	            className: 'nav_header',
	            style: this.props.style
	          },
	          _react2['default'].createElement(
	            'div',
	            { id: 'nav_header' },
	            _react2['default'].createElement(
	              'div',
	              { id: 'navburger' },
	              _react2['default'].createElement('img', { src: 'http://dsl.richmond.edu/panorama/static/images/menu-close.svg', onClick: this.props.on_hamburger_click })
	            ),
	            this.props.title && this.props.home_url ? _react2['default'].createElement(
	              'h1',
	              null,
	              _react2['default'].createElement(
	                'a',
	                { href: this.props.home_url },
	                this.props.title
	              )
	            ) : '',
	            _react2['default'].createElement(
	              'h2',
	              null,
	              this.props.links.map(function (item, i) {
	                return _react2['default'].createElement(
	                  'a',
	                  { href: item.url, key: 'pan_nav_links_' + i },
	                  i < _this.props.links.length - 1 ? item.name + _this.props.link_separator : item.name
	                );
	              })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { id: 'maps' },
	              this.props.nav_data.map(function (item, i) {
	                return _react2['default'].createElement(
	                  'div',
	                  { className: 'pan_nav_item', key: 'pan_nav_item_' + i, style: { width: _this.computeDimensions() + 'px' } },
	                  _react2['default'].createElement(
	                    'a',
	                    { href: item.url },
	                    _react2['default'].createElement('img', { src: item.screenshot, style: { width: _this.computeDimensions() + 'px' } })
	                  ),
	                  _react2['default'].createElement('br', null),
	                  _react2['default'].createElement(
	                    'h4',
	                    null,
	                    _react2['default'].createElement(
	                      'a',
	                      { href: item.url },
	                      item.title
	                    )
	                  )
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Navigation;
	})(_react2['default'].Component);
	
	exports['default'] = Navigation;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsD3ReactBase = __webpack_require__(14);
	
	var _chartsD3ReactBase2 = _interopRequireDefault(_chartsD3ReactBase);
	
	var _AreaChartAreaChartJsx = __webpack_require__(45);
	
	var _AreaChartAreaChartJsx2 = _interopRequireDefault(_AreaChartAreaChartJsx);
	
	var _OffsetAreaChartImpls = __webpack_require__(91);
	
	var _OffsetAreaChartImpls2 = _interopRequireDefault(_OffsetAreaChartImpls);
	
	__webpack_require__(158);
	
	var OffsetAreaChart = (function (_D3ReactBase) {
	  _inherits(OffsetAreaChart, _D3ReactBase);
	
	  _createClass(OffsetAreaChart, null, [{
	    key: 'propTypes',
	
	    // extend superclass `props` validators
	    value: _extends({}, _chartsD3ReactBase2['default'].propTypes, {
	      areaChartData: _react.PropTypes.array,
	      chartSpacing: _react.PropTypes.number,
	      colorPalette: _react.PropTypes.array,
	      selectedChartId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	      chartIdAccessor: _react.PropTypes.func,
	      metadataAccessor: _react.PropTypes.func,
	      interpolate: _react.PropTypes.string,
	      circleRadius: _react.PropTypes.number
	    }),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _chartsD3ReactBase2['default'].defaultProps, {
	      className: 'offset-area-chart',
	      areaChartData: [],
	      chartSpacing: 4,
	      colorPalette: null,
	      selectedChartId: null,
	      chartIdAccessor: null,
	      metadataAccessor: null,
	      interpolate: 'basis',
	      circleRadius: 2
	    }),
	    enumerable: true
	  }]);
	
	  function OffsetAreaChart(props) {
	    _classCallCheck(this, OffsetAreaChart);
	
	    _get(Object.getPrototypeOf(OffsetAreaChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _OffsetAreaChartImpls2['default'];
	
	    // This accessor is implemented by the React component as well as the d3 chart.
	    this.chartIdAccessor = props.chartIdAccessor;
	  }
	
	  return OffsetAreaChart;
	})(_chartsD3ReactBase2['default']);
	
	exports['default'] = OffsetAreaChart;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _chartsD3Component = __webpack_require__(13);
	
	var _chartsD3Component2 = _interopRequireDefault(_chartsD3Component);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsCommonAxis = __webpack_require__(18);
	
	var _chartsCommonAxis2 = _interopRequireDefault(_chartsCommonAxis);
	
	var OffsetAreaChartImpls = (function (_D3Component) {
	  _inherits(OffsetAreaChartImpls, _D3Component);
	
	  function OffsetAreaChartImpls() {
	    _classCallCheck(this, OffsetAreaChartImpls);
	
	    _get(Object.getPrototypeOf(OffsetAreaChartImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(OffsetAreaChartImpls, [{
	    key: 'willMount',
	    value: function willMount() {
	      var _props = this.props;
	      var xAccessor = _props.xAccessor;
	      var yAccessor = _props.yAccessor;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var interpolate = _props.interpolate;
	
	      this.areaGenerator = _d32['default'].svg.area().interpolate(interpolate).x(function (d) {
	        return xScale(xAccessor(d));
	      }).y0(function (d) {
	        return yScale(0);
	      }).y1(function (d) {
	        return yScale(yAccessor(d));
	      });
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount() {
	      _get(Object.getPrototypeOf(OffsetAreaChartImpls.prototype), 'onMount', this).call(this);
	
	      this.lineLayer = this.base.append('g').classed('offset-area-lines', true);
	
	      this._render();
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {
	      var _props2 = this.props;
	      var xScale = _props2.xScale;
	      var yScale = _props2.yScale;
	      var xAccessor = _props2.xAccessor;
	      var yAccessor = _props2.yAccessor;
	      var areaChartConfig = _props2.areaChartConfig;
	      var interpolate = _props2.interpolate;
	
	      var maxHeight = this.height - this.props.areaChartData.length * this.props.chartSpacing;
	      xScale.range([0, this.width]);
	      yScale.range([maxHeight, 0]);
	
	      this.areaGenerator = _d32['default'].svg.area().interpolate(interpolate).x(function (d) {
	        return xScale(areaChartConfig.xAccessor(d));
	      }).y0(function (d) {
	        return yScale(0);
	      }).y1(function (d) {
	        return yScale(areaChartConfig.yAccessor(d));
	      });
	    }
	  }, {
	    key: 'areaOffsetTranslation',
	    value: function areaOffsetTranslation(idx) {
	      var chartSpacing = this.props.chartSpacing;
	
	      return 'translate(0,' + chartSpacing * idx + ')';
	    }
	  }, {
	    key: 'lineOffsetTranslation',
	    value: function lineOffsetTranslation(idx) {
	      var _props3 = this.props;
	      var data = _props3.data;
	      var chartSpacing = _props3.chartSpacing;
	      var yScale = _props3.yScale;
	
	      var bottom = yScale(0);
	      var pos = data.length - idx;
	      var y = -chartSpacing * pos;
	      return 'translate(0,' + y + ')';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props4 = this.props;
	      var data = _props4.data;
	      var xAccessor = _props4.xAccessor;
	      var yAccessor = _props4.yAccessor;
	      var xScale = _props4.xScale;
	      var yScale = _props4.yScale;
	      var fillColor = _props4.fillColor;
	      var fillOpacity = _props4.fillOpacity;
	      var areaChartData = _props4.areaChartData;
	      var colorPalette = _props4.colorPalette;
	      var metadataAccessor = _props4.metadataAccessor;
	      var chartIdAccessor = _props4.chartIdAccessor;
	      var selectedChartId = _props4.selectedChartId;
	      var circleRadius = _props4.circleRadius;
	      var interactive = _props4.interactive;
	
	      //
	      // AreaCharts
	      //
	      var area = this.base.selectAll('g.area-container').data(areaChartData);
	
	      // exit
	      area.exit().remove();
	
	      // enter
	      area.enter().append('g').attr('class', 'area-container').append('path').attr('class', 'area');
	
	      // update
	      area.attr('transform', function (d, i) {
	        return _this.areaOffsetTranslation(i);
	      }).classed('selected', function (d) {
	        return chartIdAccessor(d) === selectedChartId ? true : false;
	      }).selectAll('path').attr('d', function (d) {
	        return _this.areaGenerator(d);
	      }).attr('fill', function (d, i, j) {
	        return colorPalette[j % colorPalette.length];
	      });
	
	      //
	      // lines
	      //
	      var baseY = yScale(0) + this.props.areaChartData.length * this.props.chartSpacing;
	      var domain = xScale.domain();
	
	      this.lineLayer.attr('transform', 'translate(0, ' + baseY + ')');
	
	      var lines = this.lineLayer.selectAll('g.line-group').data(data);
	
	      // exit
	      lines.exit().remove();
	
	      // enter
	      lines.enter().append('g').attr('class', 'line-group').append('line').attr('class', 'lifespan');
	
	      // update
	      lines.attr('transform', function (d, i) {
	        return _this.lineOffsetTranslation(i);
	      }).classed('selected', function (d) {
	        return chartIdAccessor(d) == selectedChartId ? true : false;
	      }).selectAll('line').attr('x1', function (d) {
	        return xScale(Math.max(xAccessor(d, 0), domain[0]));
	      }).attr('x2', function (d) {
	        return xScale(Math.min(xAccessor(d, 1), domain[1]));
	      }).attr('y1', 0).attr('y2', 0).style('stroke', function (d, i) {
	        return colorPalette[i % colorPalette.length];
	      });
	
	      //
	      // circles
	      //
	      var circles = lines.selectAll('circle').data(function (d) {
	        return metadataAccessor(d);
	      });
	
	      // exit
	      circles.exit().remove();
	
	      // enter
	      circles.enter().append('circle');
	
	      // update
	      circles.attr('cx', function (d) {
	        return xScale(Math.max(d, domain[0]));
	      }).attr('cy', 0).attr('r', circleRadius).style('fill', function (d, i, j) {
	        return colorPalette[j % colorPalette.length];
	      });
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {}
	  }]);
	
	  return OffsetAreaChartImpls;
	})(_chartsD3Component2['default']);
	
	exports['default'] = OffsetAreaChartImpls;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	var _interopRequireWildcard = __webpack_require__(48)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(7);
	
	var d3 = _interopRequireWildcard(_d3);
	
	__webpack_require__(159);
	
	var Punchcard = (function (_React$Component) {
	  _inherits(Punchcard, _React$Component);
	
	  _createClass(Punchcard, null, [{
	    key: 'propTypes',
	
	    // property validation
	    value: {
	      data: _react.PropTypes.array.isRequired,
	      onItemClick: _react.PropTypes.func,
	      loading: _react.PropTypes.bool,
	      noDataAvailableMsg: _react.PropTypes.string,
	      punchcardOptions: _react.PropTypes.object,
	      selectAccessor: _react.PropTypes.func,
	      textValueFormatter: _react.PropTypes.func,
	      headerMargin: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      data: [],
	      onItemClick: null,
	      loading: true,
	      noDataAvailableMsg: 'No commodities data available for this canal in the selected year.',
	      radiusExtent: [2, 10],
	      textValueFormatter: function textValueFormatter(d) {
	        return d;
	      },
	      headerMargin: 0
	    },
	    enumerable: true
	  }]);
	
	  function Punchcard(props) {
	    _classCallCheck(this, Punchcard);
	
	    _get(Object.getPrototypeOf(Punchcard.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Punchcard, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderVisualization();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      // Blow away what's there. If we want pretty transitions,
	      // remove this and handle transitions in d3Punchcard.
	      d3Punchcard.destroy(this.refs.content);
	
	      this.renderVisualization();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      d3Punchcard.destroy(this.refs.content);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'panorama punchcard' },
	        this.renderPlaceholder(),
	        _react2['default'].createElement('div', { className: 'content', ref: 'content', style: { marginTop: this.props.headerMargin + 'px' } })
	      );
	    }
	  }, {
	    key: 'renderVisualization',
	    value: function renderVisualization() {
	      if (!this.isEmpty(this.props.data) && this.refs.content) {
	        d3Punchcard.update(this.refs.content, _extends({}, this.props));
	      }
	    }
	  }, {
	    key: 'renderPlaceholder',
	    value: function renderPlaceholder() {
	      var _props = this.props;
	      var loading = _props.loading;
	      var noDataAvailableMsg = _props.noDataAvailableMsg;
	
	      // TODO: provide links to years with data, if they exist for this canal.
	      if (loading) {
	        return _react2['default'].createElement(
	          'div',
	          { className: 'placeholder', ref: 'placeholder' },
	          _react2['default'].createElement(
	            'h4',
	            null,
	            'Loading...'
	          )
	        );
	      } else if (!this.props.loading && this.isEmpty(this.props.data)) {
	        return _react2['default'].createElement(
	          'div',
	          { className: 'placeholder', ref: 'placeholder' },
	          _react2['default'].createElement(
	            'h4',
	            null,
	            noDataAvailableMsg
	          )
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty(val) {
	      return val.length < 1;
	    }
	  }]);
	
	  return Punchcard;
	})(_react2['default'].Component);
	
	exports['default'] = Punchcard;
	
	var d3Punchcard = {
	
	  _setTextValueFormatter: function _setTextValueFormatter(d) {
	    return d;
	  },
	  setTextValueFormatter: function setTextValueFormatter(fn) {
	    this._setTextValueFormatter = fn;
	  },
	
	  // layout constants
	  ROW_HEIGHT: 25,
	  COMMODITY_TEXT_OFFSET_Y: 5,
	
	  /**
	   * Logic for updating d3 component with new data.
	   *
	   * @param  {Node}    HTMLElement to which d3 will attach
	   * @param  {Object}  Categorized map of items (TODO: document expected format)
	   * @param  {Object}  Flat map of items (TODO: document expected format)
	   */
	  update: function update(node, props) {
	    var _this = this;
	
	    var colorScale = props.colorScale;
	    var valueAccessor = props.valueAccessor;
	    var onItemClick = props.onItemClick;
	    var textValueFormatter = props.textValueFormatter;
	    var selected = props.selected;
	    var selectAccessor = props.selectAccessor;
	
	    if (typeof textValueFormatter === 'function') this.setTextValueFormatter(textValueFormatter);
	
	    var MAX_RAD = props.radiusExtent[1];
	    var scope = this;
	
	    // scale by normalizedValue of all items
	    var rScale = d3.scale.sqrt().range(props.radiusExtent).domain([1, props.radiusMaxValue]);
	
	    var rScaleDomain = rScale.domain();
	    var rDomainMid = rScaleDomain[0] + Math.sqrt(0.25) * (rScaleDomain[1] - rScaleDomain[0]);
	
	    // <div> for each category
	    var categoryNodes = d3.select(node).selectAll('div').data(props.data).enter().append('div').attr('style', function (d) {
	      return 'color: ' + colorScale(props.colorAccessor(d)) + ';';
	    }).attr('class', 'category');
	
	    // each with a heading...
	    categoryNodes.append('h4').text(function (d) {
	      return d.name;
	    });
	
	    // ...and an <svg>
	    categoryNodes = categoryNodes.append('svg').attr('height', function (d) {
	      return d.commodities.length * scope.ROW_HEIGHT;
	    }).style('stroke', function (d) {
	      return colorScale(props.colorAccessor(d));
	    }).style('fill', function (d) {
	      return colorScale(props.colorAccessor(d));
	    });
	
	    // width of each category svg, minus padding for scrollbar,
	    // with cross-browser support.
	    this.categoryNodeWidth = (categoryNodes.node().offsetWidth || categoryNodes.node().getBoundingClientRect().width) - 2.5 * this.ROW_HEIGHT;
	
	    // <g> for each item within each category
	    var itemNodes = categoryNodes.selectAll('g').data(function (d) {
	      return d.commodities;
	    }).enter().append('g');
	
	    itemNodes.classed('selected', function (d) {
	      return selectAccessor(d) === selected;
	    });
	
	    // <circle> displaying scaled amount of each item
	    itemNodes.append('circle').attr('r', function (d) {
	      var v = valueAccessor(d);
	      return v ? rScale(v) : rDomainMid;
	    })
	    // render differently if normalizedValue is invalid
	    .style('fill', function (d) {
	      return valueAccessor(d) ? null : 'none';
	    }).style('stroke', function (d) {
	      return valueAccessor(d) ? 'none' : null;
	    }).style('stroke-width', function (d) {
	      return valueAccessor(d) ? null : 2;
	    });
	
	    // <text> displaying name of each item
	    itemNodes.append('text').text(function (d) {
	      return d.name;
	    }).style('stroke', 'none').attr('x', 2 * scope.ROW_HEIGHT).attr('y', scope.COMMODITY_TEXT_OFFSET_Y).call(this.wrap, this.categoryNodeWidth);
	
	    // adjust dimensions to account for text wrapping
	    var numLineWraps = undefined;
	    categoryNodes.each(function (d0, i0) {
	      d3.select(this).selectAll('g').each(function (d1, i1) {
	        if (!i1) {
	          numLineWraps = 0;
	        }
	
	        var g = d3.select(this);
	        g.attr('transform', 'translate(' + 0.5 * scope.ROW_HEIGHT + ', ' + (i1 + 0.5 + numLineWraps) * scope.ROW_HEIGHT + ')');
	
	        // Increment number of linewraps within this <g>
	        numLineWraps += g.selectAll('tspan').size() - 1;
	      });
	
	      // Increase height of <svg> accordingly
	      var svg = d3.select(this);
	      svg.attr('height', parseFloat(svg.attr('height')) + numLineWraps * scope.ROW_HEIGHT);
	    });
	
	    // Create hit areas that do not change size on interaction
	    itemNodes.append('rect').attr('x', -MAX_RAD).attr('y', -MAX_RAD).attr('width', this.categoryNodeWidth + 2.5 * this.ROW_HEIGHT).attr('height', this.ROW_HEIGHT).on('mouseover', function (d, i) {
	      scope.onItemMouseOver(this, d, i);
	    }).on('mouseout', function (d, i) {
	      scope.onItemMouseOut(this, d, i);
	    }).on('click', function (d, i) {
	      if (typeof onItemClick === 'function') {
	        onItemClick.call(_this, d, i);
	      }
	    });
	  },
	
	  onItemMouseOver: function onItemMouseOver(target, d, i) {
	    var g = d3.select(target.parentNode);
	
	    var text = g.select('text').text((d.prettyValue || this._setTextValueFormatter(d.value)) + (d.units ? ' ' + d.units : '')).style('font-weight', 400);
	  },
	
	  onItemMouseOut: function onItemMouseOut(target, d, i) {
	
	    var g = d3.select(target.parentNode);
	
	    g.select('text').text(d.name).style('font-weight', null).call(this.wrap, this.categoryNodeWidth);
	  },
	
	  /**
	   * Any necessary cleanup for d3 component goes here.
	   *
	   * @param  {Node}    HTMLElement to which d3 was attached
	   */
	  destroy: function destroy(node) {
	
	    d3.select(node).html('');
	  },
	
	  /**
	   * Wrap SVG text. Adapted from http://bl.ocks.org/mbostock/7555321
	   */
	  wrap: function wrap(text, width) {
	
	    text.each(function () {
	
	      var breakChars = ['/', '&'],
	          text = d3.select(this),
	          textContent = text.text(),
	          spanContent = undefined;
	
	      breakChars.forEach(function (char) {
	        // Add a space after each break char for the function to use to determine line breaks
	        textContent = textContent.replace(char, char + ' ');
	      });
	
	      var words = textContent.split(/\s+/).reverse(),
	          word = undefined,
	          line = [],
	          lineNumber = 0,
	          lineHeight = 1.1,
	          // ems
	      x = text.attr('x'),
	          y = text.attr('y'),
	          dy = parseFloat(text.attr('dy') || 0),
	          tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em');
	
	      while (word = words.pop()) {
	        line.push(word);
	        tspan.text(line.join(' '));
	        if (tspan.node().getComputedTextLength() > width) {
	          line.pop();
	          spanContent = line.join(' ');
	          breakChars.forEach(function (char) {
	            // Remove spaces trailing breakChars that were added above
	            spanContent = spanContent.replace(char + ' ', char);
	          });
	          tspan.text(spanContent);
	          line = [word];
	          tspan = text.append('tspan').attr('x', x).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
	        }
	      }
	    });
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _react = __webpack_require__(6);
	
	var _chartsD3ReactBase = __webpack_require__(14);
	
	var _chartsD3ReactBase2 = _interopRequireDefault(_chartsD3ReactBase);
	
	var _ScatterPlotImpls = __webpack_require__(94);
	
	var _ScatterPlotImpls2 = _interopRequireDefault(_ScatterPlotImpls);
	
	__webpack_require__(160);
	
	var ScatterPlot = (function (_D3ReactBase) {
	  _inherits(ScatterPlot, _D3ReactBase);
	
	  function ScatterPlot(props) {
	    _classCallCheck(this, ScatterPlot);
	
	    _get(Object.getPrototypeOf(ScatterPlot.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = _ScatterPlotImpls2['default'];
	  }
	
	  _createClass(ScatterPlot, null, [{
	    key: 'propTypes',
	    value: _extends({}, _chartsD3ReactBase2['default'].propTypes, {
	      dotRadiusScale: _react.PropTypes.func,
	      dotRadius: _react.PropTypes.number,
	      dotRadiusAccessor: _react.PropTypes.func,
	      dotColorScale: _react.PropTypes.func,
	      dotColorAccessor: _react.PropTypes.func
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _extends({}, _chartsD3ReactBase2['default'].defaultProps, {
	      xScale: _d32['default'].scale.linear(),
	      yScale: _d32['default'].scale.linear(),
	      className: 'scatterplot',
	      dotRadius: 3,
	      xaxis: {
	        className: 'x axis',
	        orient: 'bottom',
	        position: 'bottom',
	        attr: {
	          dx: '0',
	          dy: '0.5em'
	        },
	        style: {
	          'text-anchor': 'middle'
	        }
	      },
	      yaxis: {
	        className: 'y axis',
	        orient: 'left'
	      }
	    }),
	    enumerable: true
	  }]);
	
	  return ScatterPlot;
	})(_chartsD3ReactBase2['default']);
	
	exports['default'] = ScatterPlot;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _chartsD3Component = __webpack_require__(13);
	
	var _chartsD3Component2 = _interopRequireDefault(_chartsD3Component);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _chartsCommonAxis = __webpack_require__(18);
	
	var _chartsCommonAxis2 = _interopRequireDefault(_chartsCommonAxis);
	
	var ScatterPlotImpls = (function (_D3Component) {
	  _inherits(ScatterPlotImpls, _D3Component);
	
	  function ScatterPlotImpls() {
	    _classCallCheck(this, ScatterPlotImpls);
	
	    _get(Object.getPrototypeOf(ScatterPlotImpls.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ScatterPlotImpls, [{
	    key: 'willMount',
	    value: function willMount() {
	      if (this.props.xaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.xaxis, this.props.xScale));
	      }
	
	      if (this.props.yaxis) {
	        this.setAxis(new _chartsCommonAxis2['default'](this.props.yaxis, this.props.yScale));
	      }
	    }
	  }, {
	    key: 'onMount',
	    value: function onMount(props) {
	      _get(Object.getPrototypeOf(ScatterPlotImpls.prototype), 'onMount', this).call(this, props);
	      this._render();
	    }
	  }, {
	    key: 'preRender',
	    value: function preRender() {
	      var _props = this.props;
	      var data = _props.data;
	      var xAccessor = _props.xAccessor;
	      var yAccessor = _props.yAccessor;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var dotRadiusScale = _props.dotRadiusScale;
	      var dotRadiusAccessor = _props.dotRadiusAccessor;
	
	      xScale.range([0, this.width]);
	      xScale.domain(_d32['default'].extent(data, function (d) {
	        return xAccessor(d);
	      })).nice();
	
	      yScale.range([this.height, 0]);
	      yScale.domain(_d32['default'].extent(data, function (d) {
	        return yAccessor(d);
	      })).nice();
	
	      if (dotRadiusScale && dotRadiusAccessor) {
	        dotRadiusScale.domain(_d32['default'].extent(data, function (d) {
	          return dotRadiusAccessor(d);
	        }));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var data = _props2.data;
	      var xAccessor = _props2.xAccessor;
	      var yAccessor = _props2.yAccessor;
	      var xScale = _props2.xScale;
	      var yScale = _props2.yScale;
	      var dotRadius = _props2.dotRadius;
	      var dotRadiusScale = _props2.dotRadiusScale;
	      var dotRadiusAccessor = _props2.dotRadiusAccessor;
	      var dotColorScale = _props2.dotColorScale;
	      var dotColorAccessor = _props2.dotColorAccessor;
	
	      var dots = this.base.selectAll('.dot').data(data);
	
	      dots.exit().remove();
	
	      dots.enter().append('circle').attr('class', 'dot');
	
	      dots.attr('r', function (d) {
	        if (!dotRadiusScale && !dotRadiusAccessor) return dotRadius;
	        return dotRadiusScale(dotRadiusAccessor(d));
	      }).attr('cx', function (d) {
	        return xScale(xAccessor(d));
	      }).attr('cy', function (d) {
	        return yScale(yAccessor(d));
	      }).style('fill', function (d) {
	        if (!dotColorScale || !dotColorAccessor) return 'lime';
	        return dotColorScale(dotColorAccessor(d));
	      });
	    }
	  }, {
	    key: 'postRender',
	    value: function postRender() {
	      var _props3 = this.props;
	      var selected = _props3.selected;
	      var selectionAccessor = _props3.selectionAccessor;
	      var interactive = _props3.interactive;
	
	      var dots = this.base.selectAll('.dot');
	      if (interactive) {
	        dots.on('click', this.dispatch.click).on('mouseover', this.dispatch.mouseOver).on('mouseout', this.dispatch.mouseOut);
	      }
	      if (selected) {
	        dots.classed('selected', function (d) {
	          return selectionAccessor(d) === selected;
	        });
	      }
	    }
	  }]);
	
	  return ScatterPlotImpls;
	})(_chartsD3Component2['default']);
	
	exports['default'] = ScatterPlotImpls;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(30);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _TexturalListItem = __webpack_require__(96);
	
	var _TexturalListItem2 = _interopRequireDefault(_TexturalListItem);
	
	__webpack_require__(161);
	
	var TexturalList = (function (_Component) {
	  _inherits(TexturalList, _Component);
	
	  _createClass(TexturalList, null, [{
	    key: 'propTypes',
	    value: {
	      items: _react.PropTypes.array.isRequired,
	      keyAccessor: _react.PropTypes.func.isRequired,
	      renderItem: _react.PropTypes.func.isRequired,
	      onItemClicked: _react.PropTypes.func,
	      selected: _react.PropTypes.string,
	      height: _react.PropTypes.any,
	      isItemDirty: _react.PropTypes.func,
	      onStoryScroll: _react.PropTypes.func,
	      sensitivity: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      selected: null,
	      height: 400,
	      sensitivity: 30
	    },
	    enumerable: true
	  }]);
	
	  function TexturalList(props) {
	    _classCallCheck(this, TexturalList);
	
	    _get(Object.getPrototypeOf(TexturalList.prototype), 'constructor', this).call(this, props);
	    this.selectedKey = null;
	    this.currentKey = null;
	    this.handleScroll = this.handleScroll.bind(this);
	    this.onClickHandler = this.onClickHandler.bind(this);
	  }
	
	  _createClass(TexturalList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.listContainer = _reactDom2['default'].findDOMNode(this.refs.list);
	      this.listContainer.addEventListener('scroll', this.handleScroll, false);;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.listContainer.removeEventListener('scroll', this.handleScroll);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var selected = this.props.selected;
	
	      this.buildItemCache();
	
	      if (!this.anchors.length) return;
	      if (selected !== this.selectedKey) {
	        this.selectedKey = selected;
	        this.setScrollPosition();
	      }
	    }
	  }, {
	    key: 'buildItemCache',
	    value: function buildItemCache() {
	      var _this = this;
	
	      this.anchors = [];
	      this.anchorMap = {};
	      var listItems = this.listContainer.querySelectorAll('.textural-list--item');
	
	      [].forEach.call(listItems, function (item) {
	        var o = {
	          t: item.offsetTop,
	          key: item.getAttribute('data-id')
	        };
	
	        _this.anchorMap[o.key] = item;
	        _this.anchors.push(o);
	      });
	    }
	  }, {
	    key: 'setScrollPosition',
	    value: function setScrollPosition() {
	      if (!this.selectedKey || !this.listContainer) return;
	      var pos = this.selectedKey in this.anchorMap ? this.anchorMap[this.selectedKey].offsetTop : null;
	      if (pos) this.listContainer.scrollTop = pos;
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var onStoryScroll = _props.onStoryScroll;
	      var sensitivity = _props.sensitivity;
	
	      var top = this.listContainer.scrollTop;
	      var prev = this.currentKey;
	      var scrollHeight = this.listContainer.scrollHeight;
	      var clientHeight = this.listContainer.clientHeight;
	      var dist = undefined;
	
	      if (this.anchors) {
	        if (top <= 0) {
	          this.currentKey = this.anchors[0].key;
	        } else if (scrollHeight - top === clientHeight) {
	          this.currentKey = this.anchors[this.anchors.length - 1].key;
	        } else {
	          this.anchors.forEach(function (anchor) {
	            dist = top - anchor.t;
	            if (dist < sensitivity && dist > -sensitivity && _this2.currentKey !== anchor.key) {
	              _this2.currentKey = anchor.key;
	            }
	          });
	        };
	
	        if (prev !== this.currentKey) {
	          if (typeof onStoryScroll === 'function') onStoryScroll(this.currentKey);
	        }
	      }
	    }
	  }, {
	    key: 'getClosestItemNode',
	    value: function getClosestItemNode(elm) {
	      for (; elm && elm !== document; elm = elm.parentNode) {
	        if (elm.classList.contains('textural-list--item')) {
	          return elm;
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'getDataItemForKey',
	    value: function getDataItemForKey(key) {
	      var _this3 = this;
	
	      var _props2 = this.props;
	      var items = _props2.items;
	      var keyAccessor = _props2.keyAccessor;
	
	      var matches = items.filter(function (d) {
	        return _this3.coerceKey(keyAccessor(d)) === key;
	      });
	
	      return matches.length ? matches : null;
	    }
	  }, {
	    key: 'onClickHandler',
	    value: function onClickHandler(evt) {
	      var onItemClicked = this.props.onItemClicked;
	
	      var target = evt.target || null;
	
	      if (!target) return;
	
	      var node = target.classList.contains('textural-list--item') ? target : this.getClosestItemNode(target);
	
	      if (!node) return;
	
	      var key = node.getAttribute('data-id');
	
	      if (!key) return;
	
	      var matches = this.getDataItemForKey(key);
	
	      if (!matches.length) return;
	
	      if (typeof onItemClicked === 'function') {
	        onItemClicked(matches);
	      }
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var _this4 = this;
	
	      var _props3 = this.props;
	      var renderItem = _props3.renderItem;
	      var items = _props3.items;
	      var keyAccessor = _props3.keyAccessor;
	      var isItemDirty = _props3.isItemDirty;
	
	      var keyAccessorIsFn = typeof keyAccessor === 'function' ? true : false;
	      var hasIsItemDirty = typeof isItemDirty === 'function' ? true : false;
	
	      return items.map(function (item, idx) {
	        var dirty = hasIsItemDirty ? isItemDirty(item) : true;
	        var key = keyAccessorIsFn ? keyAccessor(item) : idx;
	        return _react2['default'].createElement(_TexturalListItem2['default'], { key: key, renderItem: renderItem, index: idx, identifier: _this4.coerceKey(key), dirty: dirty });
	      });
	    }
	  }, {
	    key: 'coerceKey',
	    value: function coerceKey(key) {
	      return '' + key;
	    }
	  }, {
	    key: 'isNumeric',
	    value: function isNumeric(val) {
	      return !isNaN(val);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var height = this.props.height;
	
	      var innerStyle = this.isNumeric(height) ? { maxHeight: height } : null;
	      return _react2['default'].createElement(
	        'div',
	        { className: 'panorama textural-list' },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'list', className: 'textural-list--inner', style: innerStyle, onClick: this.onClickHandler },
	          this.renderItems()
	        )
	      );
	    }
	  }]);
	
	  return TexturalList;
	})(_react.Component);
	
	exports['default'] = TexturalList;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TexturalListItem = (function (_Component) {
	  _inherits(TexturalListItem, _Component);
	
	  _createClass(TexturalListItem, null, [{
	    key: 'propTypes',
	    value: {
	      renderItem: _react.PropTypes.func.isRequired,
	      index: _react.PropTypes.number.isRequired,
	      dirty: _react.PropTypes.bool,
	      identifier: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      dirty: true
	    },
	    enumerable: true
	  }]);
	
	  function TexturalListItem(props) {
	    _classCallCheck(this, TexturalListItem);
	
	    _get(Object.getPrototypeOf(TexturalListItem.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(TexturalListItem, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return nextProps.dirty;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var renderItem = _props.renderItem;
	      var index = _props.index;
	      var identifier = _props.identifier;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'textural-list--item', 'data-id': identifier },
	        renderItem(index)
	      );
	    }
	  }]);
	
	  return TexturalListItem;
	})(_react.Component);
	
	exports['default'] = TexturalListItem;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _reactLeaflet = __webpack_require__(22);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	__webpack_require__(162);
	
	var TimeBasedMarkers = (function (_MapLayer) {
	  _inherits(TimeBasedMarkers, _MapLayer);
	
	  _createClass(TimeBasedMarkers, null, [{
	    key: 'propTypes',
	    value: {
	      features: _react.PropTypes.object.isRequired,
	      currentDate: _react.PropTypes.instanceOf(Date)
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      features: {},
	      currentDate: null
	    },
	    enumerable: true
	  }]);
	
	  function TimeBasedMarkers(props) {
	    _classCallCheck(this, TimeBasedMarkers);
	
	    _get(Object.getPrototypeOf(TimeBasedMarkers.prototype), 'constructor', this).call(this, props);
	
	    this.map = null;
	  }
	
	  _createClass(TimeBasedMarkers, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this.markers = [];
	
	      this.map = this.props.map;
	
	      this._el = L.DomUtil.create('div', 'panorama time-based-markers-layer leaflet-zoom-hide leaflet-d3-overlay');
	      this.map.getPanes().overlayPane.appendChild(this._el);
	
	      this.svg = _d32['default'].select(this._el).append('svg');
	
	      this.container = this.svg.append('g').attr('class', 'panorama time-based-markers-container');
	
	      this.setOverlayPosition();
	
	      this.map.on('viewreset', this._reset, this);
	      if (this.dirty) {
	        this.draw(this.props.features);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      this.map.getPanes().overlayPane.removeChild(this._el);
	      this.map.off('viewreset', this._reset, this);
	      this.markers = [];
	      this.line = null;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var _this = this;
	
	      if (this.props.features && this.props.features.features.length && !this.loaded) {
	        this.draw(this.props.features);
	      }
	
	      if (this.props.currentDate !== this.currentDate) {
	        this.currentDate = this.props.currentDate;
	        this.filter();
	      }
	
	      // Re-append to ensure this layer always draws on top of other overlay layers.
	      // Do it in a timeout to ensure it happens after all React render() stack has cleared.
	      setTimeout(function () {
	        _this.map.getPanes().overlayPane.appendChild(_this._el);
	      }, 1);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return false;
	    }
	  }, {
	    key: 'setOverlayPosition',
	    value: function setOverlayPosition() {
	
	      var bounds = this.map.getBounds(),
	          topLeft = this.map.latLngToLayerPoint(bounds.getNorthWest()),
	          bottomRight = this.map.latLngToLayerPoint(bounds.getSouthEast());
	
	      if (this.svg) {
	        _d32['default'].select(this._el).style('width', this.map.getSize().x + 'px').style('height', this.map.getSize().y + 'px').style('margin-left', '0px').style('margin-top', '0px').attr('transform', 'translate(' + -topLeft.x + ',' + -topLeft.y + ')');
	
	        this.svg.style('width', this.map.getSize().x + 'px').style('height', this.map.getSize().y + 'px');
	      }
	    }
	  }, {
	    key: '_reset',
	    value: function _reset() {
	
	      this.setOverlayPosition();
	      this.filter();
	      this.position();
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	
	      if (!this.map) return;
	      var date = this.props.currentDate || null;
	      var zoom = this.map.getZoom();
	      var anyShowing = false;
	      this.markers.forEach(function (m) {
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
	  }, {
	    key: 'position',
	    value: function position() {
	
	      if (this.markers && this.map) {
	        var that = this;
	        this.markers.forEach(function (m) {
	          if (m.show === 'none') return;
	
	          var pt;
	          if (m.markerType === 'icon') {
	            pt = that.map.latLngToLayerPoint(m.coords);
	            m.elm.attr('cx', pt.x + 'px').attr('cy', pt.y + 'px');
	          } else if (m.markerType === 'label') {
	            pt = that.map.latLngToLayerPoint(m.coords);
	            m.elm.attr('x', pt.x + 'px').attr('y', pt.y + 'px');
	          } else if (m.markerType === 'line') {
	            m.elm.attr('d', that.line(m.coords));
	          }
	        });
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(data) {
	
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
	
	      this.line = _d32['default'].svg.line().x(function (d) {
	        return that.map.latLngToLayerPoint(d).x;
	      }).y(function (d) {
	        return that.map.latLngToLayerPoint(d).y;
	      }).interpolate('linear');
	
	      this.markers = [];
	
	      function createIcon(pt, props) {
	        return that.container.append('circle').attr('class', 'time-based-' + [props.maptype, props.type].join(' ')).attr('cx', pt.x + 'px').attr('cy', pt.y + 'px').attr('r', 3);
	      }
	
	      function createLabel(pt, props) {
	        var ta = props.justify === 'left' ? 'start' : 'end';
	        return that.container.append('text').attr('class', 'with-outlines time-based-' + [props.maptype, props.type].join(' ')).attr('x', pt.x + 'px').attr('y', pt.y + 'px').attr('text-anchor', ta).text(props.location);
	      }
	
	      function createLine(coords, props) {
	        return that.container.append('path').attr('class', 'time-based-' + [props.maptype, props.type].join(' ')).attr('d', that.line(coords));
	      }
	
	      function drawByMaptype(thisType) {
	        data.features.forEach(function (f) {
	
	          var props = f.properties,
	              type = f.geometry.type;
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
	            coords.forEach(function (c) {
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
	  }]);
	
	  return TimeBasedMarkers;
	})(_reactLeaflet.MapLayer);
	
	exports['default'] = TimeBasedMarkers;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _extends = __webpack_require__(11)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _props = __webpack_require__(32);
	
	var Tooltip = (function () {
	  function Tooltip(element, options) {
	    _classCallCheck(this, Tooltip);
	
	    this._options = _extends({}, _props.tooltipDefaultOptions, options);
	    this._element = _d32['default'].select(element);
	    this.closeTimer = null;
	  }
	
	  _createClass(Tooltip, [{
	    key: 'unMount',
	    value: function unMount() {
	      this._options = {};
	      this._element = null;
	      this._relativeContainer = null;
	      if (this.closeTimer) {
	        clearTimeout(this.closeTimer);
	        this.closeTimer = null;
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(evt) {
	      if (!this.isShowing) return;
	      var position = this.calcPosition(evt);
	      this.element.style('left', position[0] + 'px').style('top', position[1] + 'px');
	    }
	
	    // event normalization from: http://www.jacklmoore.com/notes/mouse-position/
	  }, {
	    key: 'calcPosition',
	    value: function calcPosition(evt) {
	      var _options = this.options;
	      var offset = _options.offset;
	      var align = _options.align;
	
	      var alignment = align.split(' ');
	      var offsetWidth = this.element.node().offsetWidth;
	      var offsetHeight = this.element.node().offsetHeight;
	      var target = this.relativeContainer || evt.target || evt.srcElement;
	      var rect = target.getBoundingClientRect();
	      var offsetX = evt.clientX - rect.left;
	      var offsetY = evt.clientY - rect.top;
	
	      // vertical
	      switch (alignment[0]) {
	        case 'top':
	          offsetY -= offsetHeight - offset[1];
	          break;
	
	        case 'bottom':
	        default:
	          offsetY -= offset[1];
	          break;
	      }
	
	      // horizontal
	      switch (alignment[1]) {
	        case 'center':
	          offsetX -= offsetWidth / 2 + offset[0];
	          break;
	
	        case 'right':
	          offsetX -= offsetWidth + offset[0];
	          break;
	
	        case 'left':
	        default:
	          offsetX += offset[0];
	          break;
	      }
	
	      return [offsetX, offsetY];
	    }
	  }, {
	    key: 'setContent',
	    value: function setContent(item) {
	      if (typeof this.options.onSetTooltipContent === 'function') {
	        this.options.onSetTooltipContent(this.element, item);
	      } else {
	        this.element.text('');
	      }
	
	      return this;
	    }
	  }, {
	    key: 'show',
	    value: function show(evt, item) {
	      if (this.isShowing) return;
	      this.isShowing = true;
	      this.element.classed('active', true);
	      if (evt) this.setPosition(evt);
	      if (item) this.setContent(item);
	
	      return this;
	    }
	  }, {
	    key: 'hide',
	    value: function hide(immediate) {
	      var _this = this;
	
	      if (!this.isShowing) return;
	
	      if (this.closeTimer) {
	        clearTimeout(this.closeTimer);
	        this.closeTimer = null;
	      }
	
	      this.isShowing = false;
	
	      if (immediate || this.options.closeDelay < 1) {
	        this.setActiveToFalse();
	      } else {
	        this.closeTimer = setTimeout(function () {
	          if (!_this.isShowing) _this.setActiveToFalse();
	        }, this.options.closeDelay);
	      }
	
	      return this;
	    }
	  }, {
	    key: 'setActiveToFalse',
	    value: function setActiveToFalse() {
	      this.closeTimer = null;
	      this.element.classed('active', false);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return 'Tooltip';
	    }
	  }, {
	    key: 'element',
	    get: function get() {
	      return this._element;
	    },
	    set: function set(val) {
	      this._element = _d32['default'].select(val);
	    }
	  }, {
	    key: 'options',
	    get: function get() {
	      return this._options;
	    },
	    set: function set(obj) {
	      this._options = _extends({}, this.options, { obj: obj });
	    }
	  }, {
	    key: 'relativeContainer',
	    get: function get() {
	      return this._relativeContainer;
	    },
	    set: function set(val) {
	      this._relativeContainer = val.node ? val.node() : val;
	    }
	  }]);
	
	  return Tooltip;
	})();
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(99)["default"];
	
	var _isIterable = __webpack_require__(100)["default"];
	
	exports["default"] = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (_isIterable(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(41);
	module.exports = __webpack_require__(139);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(41);
	module.exports = __webpack_require__(140);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	__webpack_require__(143);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	module.exports = __webpack_require__(8).Object.keys;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(145);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(146);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(147);
	module.exports = __webpack_require__(8).Promise;

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25)
	  , document = __webpack_require__(12).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(19)
	  , call        = __webpack_require__(123)
	  , isArrayIter = __webpack_require__(122)
	  , anObject    = __webpack_require__(15)
	  , toLength    = __webpack_require__(137)
	  , getIterFn   = __webpack_require__(60);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).document && document.documentElement;

/***/ },
/* 121 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(16)
	  , ITERATOR   = __webpack_require__(10)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(15);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(9)
	  , descriptor     = __webpack_require__(54)
	  , setToStringTag = __webpack_require__(40)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(39)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(10)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , macrotask = __webpack_require__(136).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(24)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(9)
	  , toObject = __webpack_require__(59)
	  , IObject  = __webpack_require__(50);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(38)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(55);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(8)
	  , $           = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(37)
	  , SPECIES     = __webpack_require__(10)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(15)
	  , aFunction = __webpack_require__(34)
	  , SPECIES   = __webpack_require__(10)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , defined   = __webpack_require__(36);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(19)
	  , invoke             = __webpack_require__(121)
	  , html               = __webpack_require__(120)
	  , cel                = __webpack_require__(118)
	  , global             = __webpack_require__(12)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(24)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(57)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(15)
	  , get      = __webpack_require__(60);
	module.exports = __webpack_require__(8).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(35)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(16);
	module.exports = __webpack_require__(8).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(117)
	  , step             = __webpack_require__(126)
	  , Iterators        = __webpack_require__(16)
	  , toIObject        = __webpack_require__(58);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(51)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(20);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(128)});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(58);
	
	__webpack_require__(53)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(59);
	
	__webpack_require__(53)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(20);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(56).set});

/***/ },
/* 146 */
/***/ function(module, exports) {



/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(9)
	  , LIBRARY    = __webpack_require__(52)
	  , global     = __webpack_require__(12)
	  , ctx        = __webpack_require__(19)
	  , classof    = __webpack_require__(35)
	  , $export    = __webpack_require__(20)
	  , isObject   = __webpack_require__(25)
	  , anObject   = __webpack_require__(15)
	  , aFunction  = __webpack_require__(34)
	  , strictNew  = __webpack_require__(134)
	  , forOf      = __webpack_require__(119)
	  , setProto   = __webpack_require__(56).set
	  , same       = __webpack_require__(130)
	  , SPECIES    = __webpack_require__(10)('species')
	  , speciesConstructor = __webpack_require__(133)
	  , asap       = __webpack_require__(127)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(37)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(129)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(40)(P, PROMISE);
	__webpack_require__(131)(PROMISE);
	Wrapper = __webpack_require__(8)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(125)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 149 */
148,
/* 150 */
148,
/* 151 */
148,
/* 152 */
148,
/* 153 */
148,
/* 154 */
148,
/* 155 */
148,
/* 156 */
148,
/* 157 */
148,
/* 158 */
148,
/* 159 */
148,
/* 160 */
148,
/* 161 */
148,
/* 162 */
148,
/* 163 */
148,
/* 164 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(66);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(167),
	    keys = __webpack_require__(66);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(164),
	    isArguments = __webpack_require__(44),
	    isArray = __webpack_require__(29),
	    isArrayLike = __webpack_require__(26),
	    isObjectLike = __webpack_require__(28);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(173);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(169),
	    keysIn = __webpack_require__(67);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(62),
	    isIterateeCall = __webpack_require__(175),
	    restParam = __webpack_require__(61);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(64);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(171);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(26),
	    isIndex = __webpack_require__(43),
	    isObject = __webpack_require__(17);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(64);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);
	
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}
	
	module.exports = pickByArray;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(170);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}
	
	module.exports = pickByCallback;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(44),
	    isArray = __webpack_require__(29),
	    isIndex = __webpack_require__(43),
	    isLength = __webpack_require__(27),
	    keysIn = __webpack_require__(67);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(179),
	    isObjectLike = __webpack_require__(28);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(168),
	    bindCallback = __webpack_require__(62),
	    pickByArray = __webpack_require__(176),
	    pickByCallback = __webpack_require__(177),
	    restParam = __webpack_require__(61);
	
	/**
	 * Creates an object composed of the picked `object` properties. Property
	 * names may be specified as individual arguments or as arrays of property
	 * names. If `predicate` is provided it's invoked for each property of `object`
	 * picking the properties `predicate` returns truthy for. The predicate is
	 * bound to `thisArg` and invoked with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to pick, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.pick(object, 'user');
	 * // => { 'user': 'fred' }
	 *
	 * _.pick(object, _.isString);
	 * // => { 'user': 'fred' }
	 */
	var pick = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  return typeof props[0] == 'function'
	    ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	    : pickByArray(object, baseFlatten(props));
	});
	
	module.exports = pick;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var ReactDOM = __webpack_require__(30);
	var ExecutionEnvironment = __webpack_require__(190);
	var ModalPortal = React.createFactory(__webpack_require__(184));
	var ariaAppHider = __webpack_require__(185);
	var elementClass = __webpack_require__(189);
	var renderSubtreeIntoContainer = __webpack_require__(30).unstable_renderSubtreeIntoContainer;
	
	var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
	
	var Modal = module.exports = React.createClass({
	
	  displayName: 'Modal',
	  statics: {
	    setAppElement: ariaAppHider.setElement,
	    injectCSS: function() {
	      "production" !== ("production")
	        && console.warn('React-Modal: injectCSS has been deprecated ' +
	                        'and no longer has any effect. It will be removed in a later version');
	    }
	  },
	
	  propTypes: {
	    isOpen: React.PropTypes.bool.isRequired,
	    style: React.PropTypes.shape({
	      content: React.PropTypes.object,
	      overlay: React.PropTypes.object
	    }),
	    appElement: React.PropTypes.instanceOf(SafeHTMLElement),
	    onRequestClose: React.PropTypes.func,
	    closeTimeoutMS: React.PropTypes.number,
	    ariaHideApp: React.PropTypes.bool
	  },
	
	  getDefaultProps: function () {
	    return {
	      isOpen: false,
	      ariaHideApp: true,
	      closeTimeoutMS: 0
	    };
	  },
	
	  componentDidMount: function() {
	    this.node = document.createElement('div');
	    this.node.className = 'ReactModalPortal';
	    document.body.appendChild(this.node);
	    this.renderPortal(this.props);
	  },
	
	  componentWillReceiveProps: function(newProps) {
	    this.renderPortal(newProps);
	  },
	
	  componentWillUnmount: function() {
	    ReactDOM.unmountComponentAtNode(this.node);
	    document.body.removeChild(this.node);
	  },
	
	  renderPortal: function(props) {
	    if (props.isOpen) {
	      elementClass(document.body).add('ReactModal__Body--open');
	    } else {
	      elementClass(document.body).remove('ReactModal__Body--open');
	    }
	
	    if (props.ariaHideApp) {
	      ariaAppHider.toggle(props.isOpen, props.appElement);
	    }
	    sanitizeProps(props);
	    this.portal = renderSubtreeIntoContainer(this, ModalPortal(props), this.node);
	  },
	
	  render: function () {
	    return React.DOM.noscript();
	  }
	});
	
	function sanitizeProps(props) {
	  delete props.ref;
	}


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var div = React.DOM.div;
	var focusManager = __webpack_require__(186);
	var scopeTab = __webpack_require__(187);
	var Assign = __webpack_require__(191);
	
	
	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: {
	    base: 'ReactModal__Overlay',
	    afterOpen: 'ReactModal__Overlay--after-open',
	    beforeClose: 'ReactModal__Overlay--before-close'
	  },
	  content: {
	    base: 'ReactModal__Content',
	    afterOpen: 'ReactModal__Content--after-open',
	    beforeClose: 'ReactModal__Content--before-close'
	  }
	};
	
	var defaultStyles = {
	  overlay: {
	    position        : 'fixed',
	    top             : 0,
	    left            : 0,
	    right           : 0,
	    bottom          : 0,
	    backgroundColor : 'rgba(255, 255, 255, 0.75)'
	  },
	  content: {
	    position                : 'absolute',
	    top                     : '40px',
	    left                    : '40px',
	    right                   : '40px',
	    bottom                  : '40px',
	    border                  : '1px solid #ccc',
	    background              : '#fff',
	    overflow                : 'auto',
	    WebkitOverflowScrolling : 'touch',
	    borderRadius            : '4px',
	    outline                 : 'none',
	    padding                 : '20px'
	  }
	};
	
	function stopPropagation(event) {
	  event.stopPropagation();
	}
	
	var ModalPortal = module.exports = React.createClass({
	
	  displayName: 'ModalPortal',
	
	  getDefaultProps: function() {
	    return {
	      style: {
	        overlay: {},
	        content: {}
	      }
	    };
	  },
	
	  getInitialState: function() {
	    return {
	      afterOpen: false,
	      beforeClose: false
	    };
	  },
	
	  componentDidMount: function() {
	    // Focus needs to be set when mounting and already open
	    if (this.props.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    }
	  },
	
	  componentWillUnmount: function() {
	    clearTimeout(this.closeTimer);
	  },
	
	  componentWillReceiveProps: function(newProps) {
	    // Focus only needs to be set once when the modal is being opened
	    if (!this.props.isOpen && newProps.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    } else if (this.props.isOpen && !newProps.isOpen) {
	      this.close();
	    }
	  },
	
	  componentDidUpdate: function () {
	    if (this.focusAfterRender) {
	      this.focusContent();
	      this.setFocusAfterRender(false);
	    }
	  },
	
	  setFocusAfterRender: function (focus) {
	    this.focusAfterRender = focus;
	  },
	
	  open: function() {
	    focusManager.setupScopedFocus(this.node);
	    focusManager.markForFocusLater();
	    this.setState({isOpen: true}, function() {
	      this.setState({afterOpen: true});
	    }.bind(this));
	  },
	
	  close: function() {
	    if (!this.ownerHandlesClose())
	      return;
	    if (this.props.closeTimeoutMS > 0)
	      this.closeWithTimeout();
	    else
	      this.closeWithoutTimeout();
	  },
	
	  focusContent: function() {
	    this.refs.content.focus();
	  },
	
	  closeWithTimeout: function() {
	    this.setState({beforeClose: true}, function() {
	      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.props.closeTimeoutMS);
	    }.bind(this));
	  },
	
	  closeWithoutTimeout: function() {
	    this.setState({
	      afterOpen: false,
	      beforeClose: false
	    }, this.afterClose);
	  },
	
	  afterClose: function() {
	    focusManager.returnFocus();
	    focusManager.teardownScopedFocus();
	  },
	
	  handleKeyDown: function(event) {
	    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
	    if (event.keyCode == 27 /*esc*/) this.requestClose();
	  },
	
	  handleOverlayClick: function() {
	    if (this.ownerHandlesClose())
	      this.requestClose();
	    else
	      this.focusContent();
	  },
	
	  requestClose: function() {
	    if (this.ownerHandlesClose())
	      this.props.onRequestClose();
	  },
	
	  ownerHandlesClose: function() {
	    return this.props.onRequestClose;
	  },
	
	  shouldBeClosed: function() {
	    return !this.props.isOpen && !this.state.beforeClose;
	  },
	
	  buildClassName: function(which, additional) {
	    var className = CLASS_NAMES[which].base;
	    if (this.state.afterOpen)
	      className += ' '+CLASS_NAMES[which].afterOpen;
	    if (this.state.beforeClose)
	      className += ' '+CLASS_NAMES[which].beforeClose;
	    return additional ? className + ' ' + additional : className;
	  },
	
	  render: function() {
	    return this.shouldBeClosed() ? div() : (
	      div({
	        ref: "overlay",
	        className: this.buildClassName('overlay', this.props.overlayClassName),
	        style: Assign({}, defaultStyles.overlay, this.props.style.overlay || {}),
	        onClick: this.handleOverlayClick
	      },
	        div({
	          ref: "content",
	          style: Assign({}, defaultStyles.content, this.props.style.content || {}),
	          className: this.buildClassName('content', this.props.className),
	          tabIndex: "-1",
	          onClick: stopPropagation,
	          onKeyDown: this.handleKeyDown
	        },
	          this.props.children
	        )
	      )
	    );
	  }
	});


/***/ },
/* 185 */
/***/ function(module, exports) {

	var _element = typeof document !== 'undefined' ? document.body : null;
	
	function setElement(element) {
	  if (typeof element === 'string') {
	    var el = document.querySelectorAll(element);
	    element = 'length' in el ? el[0] : el;
	  }
	  _element = element || _element;
	}
	
	function hide(appElement) {
	  validateElement(appElement);
	  (appElement || _element).setAttribute('aria-hidden', 'true');
	}
	
	function show(appElement) {
	  validateElement(appElement);
	  (appElement || _element).removeAttribute('aria-hidden');
	}
	
	function toggle(shouldHide, appElement) {
	  if (shouldHide)
	    hide(appElement);
	  else
	    show(appElement);
	}
	
	function validateElement(appElement) {
	  if (!appElement && !_element)
	    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
	}
	
	function resetForTesting() {
	  _element = document.body;
	}
	
	exports.toggle = toggle;
	exports.setElement = setElement;
	exports.show = show;
	exports.hide = hide;
	exports.resetForTesting = resetForTesting;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(68);
	var modalElement = null;
	var focusLaterElement = null;
	var needToFocus = false;
	
	function handleBlur(event) {
	  needToFocus = true;
	}
	
	function handleFocus(event) {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation 
	    // is that the document.body gets focus, and then we focus our element right 
	    // after, seems fine.
	    setTimeout(function() {
	      if (modalElement.contains(document.activeElement))
	        return;
	      var el = (findTabbable(modalElement)[0] || modalElement);
	      el.focus();
	    }, 0);
	  }
	}
	
	exports.markForFocusLater = function() {
	  focusLaterElement = document.activeElement;
	};
	
	exports.returnFocus = function() {
	  try {
	    focusLaterElement.focus();
	  }
	  catch (e) {
	    console.warn('You tried to return focus to '+focusLaterElement+' but it is not in the DOM anymore');
	  }
	  focusLaterElement = null;
	};
	
	exports.setupScopedFocus = function(element) {
	  modalElement = element;
	
	  if (window.addEventListener) {
	    window.addEventListener('blur', handleBlur, false);
	    document.addEventListener('focus', handleFocus, true);
	  } else {
	    window.attachEvent('onBlur', handleBlur);
	    document.attachEvent('onFocus', handleFocus);
	  }
	};
	
	exports.teardownScopedFocus = function() {
	  modalElement = null;
	
	  if (window.addEventListener) {
	    window.removeEventListener('blur', handleBlur);
	    document.removeEventListener('focus', handleFocus);
	  } else {
	    window.detachEvent('onBlur', handleBlur);
	    document.detachEvent('onFocus', handleFocus);
	  }
	};
	
	


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(68);
	
	module.exports = function(node, event) {
	  var tabbable = findTabbable(node);
	  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
	  var leavingFinalTabbable = (
	    finalTabbable === document.activeElement ||
	    // handle immediate shift+tab after opening with mouse
	    node === document.activeElement
	  );
	  if (!leavingFinalTabbable) return;
	  event.preventDefault();
	  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
	  target.focus();
	};


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(183);
	


/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}
	
	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}
	
	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}
	
	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}
	
	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}
	
	ElementClass.prototype.add = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return el.className = className
	  var classes = el.className.split(' ')
	  if (indexOf(classes, className) > -1) return classes
	  classes.push(className)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.remove = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return
	  var classes = el.className.split(' ')
	  var idx = indexOf(classes, className)
	  if (idx > -1) classes.splice(idx, 1)
	  el.className = classes.join(' ')
	  return classes
	}
	
	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}
	
	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseAssign = __webpack_require__(192),
	    createAssigner = __webpack_require__(194),
	    keys = __webpack_require__(69);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it is invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(193),
	    keys = __webpack_require__(69);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 193 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(195),
	    isIterateeCall = __webpack_require__(196),
	    restParam = __webpack_require__(197);
	
	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 195 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = bindCallback;


/***/ },
/* 196 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 197 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 198 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;


/***/ },
/* 199 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 200 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_201__;

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_202__;

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_203__;

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=components.js.map