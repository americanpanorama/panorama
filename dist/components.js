(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["d3", "react"], factory);
	else if(typeof exports === 'object')
		exports["@panorama/toolkit"] = factory(require("d3"), require("react"));
	else
		root["@panorama/toolkit"] = factory(root["d3"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _AreaChartAreaChart = __webpack_require__(35);
	
	var _AreaChartAreaChart2 = _interopRequireDefault(_AreaChartAreaChart);
	
	var _DiscreteBarChartDiscreteBarChart = __webpack_require__(20);
	
	var _DiscreteBarChartDiscreteBarChart2 = _interopRequireDefault(_DiscreteBarChartDiscreteBarChart);
	
	var _HorizontalDiscreteBarChartHorizontalDiscreteBarChart = __webpack_require__(36);
	
	var _HorizontalDiscreteBarChartHorizontalDiscreteBarChart2 = _interopRequireDefault(_HorizontalDiscreteBarChartHorizontalDiscreteBarChart);
	
	var _LegendLegend = __webpack_require__(37);
	
	var _LegendLegend2 = _interopRequireDefault(_LegendLegend);
	
	var _MapChoroplethMapChoropleth = __webpack_require__(38);
	
	var _MapChoroplethMapChoropleth2 = _interopRequireDefault(_MapChoroplethMapChoropleth);
	
	var _PunchcardPunchcard = __webpack_require__(39);
	
	var _PunchcardPunchcard2 = _interopRequireDefault(_PunchcardPunchcard);
	
	exports['default'] = {
	  AreaChart: _AreaChartAreaChart2['default'],
	  DiscreteBarChart: _DiscreteBarChartDiscreteBarChart2['default'],
	  HorizontalDiscreteBarChart: _HorizontalDiscreteBarChartHorizontalDiscreteBarChart2['default'],
	  Legend: _LegendLegend2['default'],
	  MapChoropleth: _MapChoroplethMapChoropleth2['default'],
	  Punchcard: _PunchcardPunchcard2['default']
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
	
	var _Object$defineProperty = __webpack_require__(43)["default"];
	
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
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(44)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
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
	
	var _Object$create = __webpack_require__(42)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(45)["default"];
	
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
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(64)('wks')
	  , Symbol = __webpack_require__(17).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(69))('Symbol.' + name));
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(17)
	  , core      = __webpack_require__(8)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

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
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var BASE_CLASS_NAME = 'panorama chart ';
	
	var PanoramaChart = (function (_React$Component) {
	  _inherits(PanoramaChart, _React$Component);
	
	  _createClass(PanoramaChart, null, [{
	    key: 'propTypes',
	    value: {
	      data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
	      width: _react.PropTypes.number,
	      height: _react.PropTypes.number,
	      margin: _react.PropTypes.shape({
	        top: _react.PropTypes.number,
	        right: _react.PropTypes.number,
	        bottom: _react.PropTypes.number,
	        left: _react.PropTypes.number
	      }),
	      xScale: _react.PropTypes.func,
	      yScale: _react.PropTypes.func,
	      xAccessor: _react.PropTypes.func,
	      yAccessor: _react.PropTypes.func,
	      axisProps: _react.PropTypes.shape({
	        scale: _react.PropTypes.func,
	        ticks: _react.PropTypes.number,
	        orient: _react.PropTypes.string,
	        offset: _react.PropTypes.array
	      })
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      data: [],
	      width: 600,
	      height: 400,
	      margin: {
	        top: 20,
	        right: 30,
	        bottom: 20,
	        left: 30
	      },
	      xScale: d3.scale.linear(),
	      yScale: d3.scale.linear(),
	      xAccessor: function xAccessor(d) {
	        return d.key;
	      },
	      yAccessor: function yAccessor(d) {
	        return d.value;
	      },
	      axisProps: {
	        scale: d3.scale.linear(),
	        ticks: 5,
	        xOrient: 'bottom',
	        yOrient: 'left',
	        offset: [0, 0]
	      }
	    },
	    enumerable: true
	  }]);
	
	  function PanoramaChart(props) {
	    _classCallCheck(this, PanoramaChart);
	
	    _get(Object.getPrototypeOf(PanoramaChart.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(PanoramaChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this.update();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      if (this.chart) this.chart.destroy(this.refs.chart);
	      this.chart = null;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	
	      this.update();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      if (!this.chart) {
	        this.chart = new this.chartConstructor(d3.select(this.refs.chart), this.props);
	      }
	
	      if (this.chart.updateConfigs) {
	        this.chart.updateConfigs(this.props);
	      }
	
	      this.chart.draw(this.props.data);
	    }
	
	    /**
	     * Determine class name to be appended to container element.
	     * Typically overridden by subclasses.
	     */
	  }, {
	    key: 'getClassSuffix',
	    value: function getClassSuffix() {
	
	      return '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2['default'].createElement(
	        'div',
	        { className: BASE_CLASS_NAME + this.getClassSuffix() },
	        _react2['default'].createElement('svg', { ref: 'chart', className: 'wrapper' })
	      );
	    }
	  }]);
	
	  return PanoramaChart;
	})(_react2['default'].Component);
	
	exports['default'] = PanoramaChart;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(6)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(66) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e(__webpack_require__(7)):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.Koto=e(require("d3")):t.Koto=e(t.d3)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1)["default"],o=n(2)["default"],i=n(17)["default"],s=n(28)["default"],c=n(65)["default"],u=n(75)["default"],a=n(78)["default"],f=n(82)["default"];e.__esModule=!0;var l=n(83),h=f(l),p=n(84),d=f(p),v=n(85),y=f(v);d["default"](h["default"],"d3 js is required.");var g=function(){function t(e){var n=this;r(this,t),this.base=e,this.hasDrawn=!1,this.merge={},this.merge.configs=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return n.configs=i.apply(Object,[{},n.configs].concat(e)),n.configs},this.merge.accessors=function(){for(var t=arguments.length,e=Array(t),r=0;t>r;r++)e[r]=arguments[r];return n.accessors=i.apply(Object,[{},n.accessors].concat(e)),n.accessors},this.configs={},this.accessors={},this.promise=null,this._layers=new s,this._attached=new s,this._events=new s,this.c=this.config,this.a=this.accessor}return t.prototype.transform=function(t){return t},t.prototype.demux=function(t,e){return e},t.prototype.preDraw=function(){},t.prototype.postDraw=function(){},t.prototype.postTransition=function(){},t.prototype.unlayer=function(t){var e=this.layer(t);return this._layers["delete"](t),delete e._chart,e},t.prototype.layer=function(t,e,n){var r,o=this;if(1===arguments.length)return this._layers.get(t);if(2===arguments.length){if(e instanceof y["default"])return e._chart=this,this._layers.set(t,e),this._layers.get(t);d["default"](!1,"When reattaching a layer, the second argument must be a koto layer")}return e._chart=this,r=new y["default"](e,n),r.remove=function(){return o._layers["delete"](t),this},this._layers.set(t,r),r},t.prototype.attach=function(t,e){return 1===arguments.length?this._attached.get(t):(this._attached.set(t,e),e)},t.prototype.draw=function(t){var e,n,r=this,o=[];return c.resolve(this.transform(t)).then(function(t){r.preDraw(t),r.trigger("preDraw",t);for(var i=r._layers.values(),s=Array.isArray(i),a=0,i=s?i:u(i);;){if(s){if(a>=i.length)break;e=i[a++]}else{if(a=i.next(),a.done)break;e=a.value}e.draw(t),o.push(e.promise)}for(var f=r._attached.entries(),l=Array.isArray(f),h=0,f=l?f:u(f);;){var p;if(l){if(h>=f.length)break;p=f[h++]}else{if(h=f.next(),h.done)break;p=h.value}var d=p[0],v=p[1];n=r.demux?r.demux(d,t):t,v.draw(n),o.push(v.promise)}return r.hasDrawn=!0,r.promise=c.all(o),r.postDraw(),r.trigger("postDraw",t),r.promise.then(function(){r.postTransition(t),r.trigger("postTransition",t)}),t})},t.prototype.on=function(t,e,n){var r;return r=this._events.has(t)?this._events.get(t):new a,r.add({callback:e,context:n||this,_chart:this}),this._events.set(t,r),this},t.prototype.once=function(t,e,n){var r=this,o=function i(){r.off(t,i),e.apply(this,arguments)};return this.on(t,o,n)},t.prototype.off=function(t,e,n){return 0===arguments.length?(this._events.clear(),this):1===arguments.length?(this._events.has(t)&&this._events.get(t).clear(),this):(this._events.get(t).forEach(function(t,r,o){(e&&e===r.callback||n&&n===r.context)&&o["delete"](t)}),this)},t.prototype.trigger=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];return this._events.has(t)&&this._events.get(t).forEach(function(t){var e;(e=t.callback).call.apply(e,[t.context].concat(n))}),this},t.prototype.config=function(t,e){function n(){function t(t,e){var n=Math.min.call(null,t.map(function(t){return i.config(t)}));return e/n}o.constrain===!0?o.percentage=t(["width","height"],o.value):Array.isArray(o.constrain)?o.percentage=t(o.constrain,o.value):o.percentage=t([o.constrain],o.value)}var r,o,i=this;if(0===arguments.length)return this.configs;if(1===arguments.length){if("object"==typeof t){for(r in t)this.configs.hasOwnProperty(r)?(o=this.configs[r],o.hasOwnProperty("setter")?o.value=o.setter.call(o,t[r]):o.value=t[r],o.hasOwnProperty("constrain")&&n(),this.configs[r]=o):console.warn("config with name "+t+" is not defined.");return this}return d["default"](this.configs.hasOwnProperty(t),t+" is not a valid option."),o=this.configs[t],o.hasOwnProperty("getter")?o.getter.call(o):o.value}return 2===arguments.length?(this.configs.hasOwnProperty(t)?(o=this.configs[t],o.hasOwnProperty("setter")?o.value=o.setter.call(o,e):o.value=e,o.hasOwnProperty("constrain")&&n(),this.configs[t]=o):console.warn("config with name "+t+" is not defined."),this):void 0},t.prototype.accessor=function(t,e){var n;if(0===arguments.length)return this.accessors;if(1===arguments.length){if("string"==typeof t)return d["default"](this.accessors.hasOwnProperty(t),t+" is not a valid accessor."),this.accessors[t];for(n in t)this.accessors[n]=t[n]}else this.accessors[t]=e;return this},t.extend=function(t){var e=function(e){function n(o){r(this,n);var i;if(e.call(this,o),"function"==typeof t)t.call(this);else{for(i in t)this[i]=t[i];this.initialize.call(this)}}return o(n,e),n}(this);return e},t}();e["default"]=g,t.exports=e["default"]},function(t,e){"use strict";e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e.__esModule=!0},function(t,e,n){"use strict";var r=n(3)["default"],o=n(6)["default"];e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=r(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o?o(t,e):t.__proto__=e)},e.__esModule=!0},function(t,e,n){t.exports={"default":n(4),__esModule:!0}},function(t,e,n){var r=n(5);t.exports=function(t,e){return r.create(t,e)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){t.exports={"default":n(7),__esModule:!0}},function(t,e,n){n(8),t.exports=n(11).Object.setPrototypeOf},function(t,e,n){var r=n(9);r(r.S,"Object",{setPrototypeOf:n(12).set})},function(t,e,n){var r=n(10),o=n(11),i="prototype",s=function(t,e){return function(){return t.apply(e,arguments)}},c=function(t,e,n){var u,a,f,l,h=t&c.G,p=t&c.P,d=h?r:t&c.S?r[e]:(r[e]||{})[i],v=h?o:o[e]||(o[e]={});h&&(n=e);for(u in n)a=!(t&c.F)&&d&&u in d,a&&u in v||(f=a?d[u]:n[u],h&&"function"!=typeof d[u]?l=n[u]:t&c.B&&a?l=s(f,r):t&c.W&&d[u]==f?!function(t){l=function(e){return this instanceof t?new t(e):t(e)},l[i]=t[i]}(f):l=p&&"function"==typeof f?s(Function.call,f):f,v[u]=l,p&&((v[i]||(v[i]={}))[u]=f))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},function(t,e){var n="undefined",r=t.exports=typeof window!=n&&window.Math==Math?window:typeof self!=n&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var n=t.exports={version:"1.2.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(5).getDesc,o=n(13),i=n(14),s=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(15)(Function.call,r(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:s}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports={"default":n(18),__esModule:!0}},function(t,e,n){n(19),t.exports=n(11).Object.assign},function(t,e,n){var r=n(9);r(r.S+r.F,"Object",{assign:n(20)})},function(t,e,n){var r=n(21),o=n(23),i=n(25),s=n(26);t.exports=n(27)(function(){var t=Object.assign,e={},n={},r=Symbol(),o="abcdefghijklmnopqrst";return e[r]=7,o.split("").forEach(function(t){n[t]=t}),7!=t({},e)[r]||Object.keys(t({},n)).join("")!=o})?function(t,e){for(var n=r(t),c=arguments.length,u=1;c>u;)for(var a,f=o(arguments[u++]),l=i(f),h=l.length,p=0;h>p;)s(f,a=l[p++])&&(n[a]=f[a]);return n}:Object.assign},function(t,e,n){var r=n(22);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(24);t.exports=0 in Object("z")?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5);t.exports=function(t){var e=r.getKeys(t),n=r.getSymbols;if(n)for(var o,i=n(t),s=r.isEnum,c=0;i.length>c;)s.call(t,o=i[c++])&&e.push(o);return e}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){t.exports={"default":n(29),__esModule:!0}},function(t,e,n){n(30),n(31),n(46),n(51),n(63),t.exports=n(11).Map},function(t,e){},function(t,e,n){"use strict";var r=n(32)(!0);n(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(33),o=n(22);t.exports=function(t){return function(e,n){var i,s,c=String(o(e)),u=r(n),a=c.length;return 0>u||u>=a?t?"":void 0:(i=c.charCodeAt(u),55296>i||i>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?t?c.charAt(u):i:t?c.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(35),o=n(9),i=n(36),s=n(37),c=n(26),u=n(40)("iterator"),a=n(43),f=!([].keys&&"next"in[].keys()),l="@@iterator",h="keys",p="values",d=function(){return this};t.exports=function(t,e,v,y,g,_,m){n(44)(v,e,y);var x,w,b=function(t){switch(t){case h:return function(){return new v(this,t)};case p:return function(){return new v(this,t)}}return function(){return new v(this,t)}},O=e+" Iterator",j=t.prototype,k=j[u]||j[l]||g&&j[g],P=k||b(g);if(k){var M=n(5).getProto(P.call(new t));n(45)(M,O,!0),!r&&c(j,l)&&s(M,u,d)}if((!r||m)&&s(j,u,P),a[e]=P,a[O]=d,g)if(x={keys:_?P:b(h),values:g==p?P:b(p),entries:g!=p?P:b("entries")},m)for(w in x)w in j||i(j,w,x[w]);else o(o.P+o.F*f,e,x)}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(37)},function(t,e,n){var r=n(5),o=n(38);t.exports=n(39)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=!n(27)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(41)("wks"),o=n(10).Symbol;t.exports=function(t){return r[t]||(r[t]=o&&o[t]||(o||n(42))("Symbol."+t))}},function(t,e,n){var r=n(10),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(5),o={};n(37)(o,n(40)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=r.create(o,{next:n(38)(1,i)}),n(45)(t,e+" Iterator")}},function(t,e,n){var r=n(26),o=n(37),i=n(40)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,e)}},function(t,e,n){n(47);var r=n(43);r.NodeList=r.HTMLCollection=r.Array},function(t,e,n){"use strict";var r=n(48),o=n(49),i=n(43),s=n(50);n(34)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(23),o=n(22);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";var r=n(52);n(62)("Map",function(t){return function(){return t(this,arguments[0])}},{get:function(t){var e=r.getEntry(this,t);return e&&e.v},set:function(t,e){return r.def(this,0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(5),o=n(37),i=n(15),s=n(53),c=n(54),u=n(22),a=n(55),f=n(49),l=n(42)("id"),h=n(26),p=n(13),d=Object.isExtensible||p,v=n(39),y=v?"_s":"size",g=0,_=function(t,e){if(!p(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!h(t,l)){if(!d(t))return"F";if(!e)return"E";o(t,l,++g)}return"O"+t[l]},m=function(t,e){var n,r=_(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,o,s){var f=t(function(t,n){c(t,f,e),t._i=r.create(null),t._f=void 0,t._l=void 0,t[y]=0,void 0!=n&&a(n,o,t[s],t)});return n(61)(f.prototype,{clear:function(){for(var t=this,e=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete e[n.i];t._f=t._l=void 0,t[y]=0},"delete":function(t){var e=this,n=m(e,t);if(n){var r=n.n,o=n.p;delete e._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),e._f==n&&(e._f=r),e._l==n&&(e._l=o),e[y]--}return!!n},forEach:function(t){for(var e,n=i(t,arguments[1],3);e=e?e.n:this._f;)for(n(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!m(this,t)}}),v&&r.setDesc(f.prototype,"size",{get:function(){return u(this[y])}}),f},def:function(t,e,n){var r,o,i=m(t,e);return i?i.v=n:(t._l=i={i:o=_(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[y]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,e,r){n(34)(t,e,function(t,e){this._t=t,this._k=e,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?f(0,n.k):"values"==e?f(0,n.v):f(0,[n.k,n.v]):(t._t=void 0,f(1))},r?"entries":"values",!r,!0),s(t),s(n(11)[e])}}},function(t,e,n){"use strict";var r=n(5),o=n(40)("species");t.exports=function(t){!n(39)||o in t||r.setDesc(t,o,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError(n+": use the 'new' operator!");return t}},function(t,e,n){var r=n(15),o=n(56),i=n(57),s=n(14),c=n(58),u=n(59);t.exports=function(t,e,n,a){var f,l,h,p=u(t),d=r(n,a,e?2:1),v=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(i(p))for(f=c(t.length);f>v;v++)e?d(s(l=t[v])[0],l[1]):d(t[v]);else for(h=p.call(t);!(l=h.next()).done;)o(h,d,l.value,e)}},function(t,e,n){var r=n(14);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){var s=t["return"];throw void 0!==s&&r(s.call(t)),i}}},function(t,e,n){var r=n(43),o=n(40)("iterator");t.exports=function(t){return(r.Array||Array.prototype[o])===t}},function(t,e,n){var r=n(33),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(60),o=n(40)("iterator"),i=n(43);t.exports=n(11).getIteratorMethod=function(t){return void 0!=t?t[o]||t["@@iterator"]||i[r(t)]:void 0}},function(t,e,n){var r=n(24),o=n(40)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[o])?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(36);t.exports=function(t,e){for(var n in e)r(t,n,e[n]);return t}},function(t,e,n){"use strict";var r=n(5),o=n(9),i=n(37),s=n(55),c=n(54);t.exports=function(t,e,u,a,f,l){var h=n(10)[t],p=h,d=f?"set":"add",v=p&&p.prototype,y={};return n(39)&&"function"==typeof p&&(l||v.forEach&&!n(27)(function(){(new p).entries().next()}))?(p=e(function(e,n){c(e,p,t),e._c=new h,void 0!=n&&s(n,f,e[d],e)}),r.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","),function(t){var e="add"==t||"set"==t;t in v&&(!l||"clear"!=t)&&i(p.prototype,t,function(n,r){var o=this._c[t](0===n?0:n,r);return e?this:o})}),"size"in v&&r.setDesc(p.prototype,"size",{get:function(){return this._c.size}})):(p=a.getConstructor(e,t,f,d),n(61)(p.prototype,u)),n(45)(p,t),y[t]=p,o(o.G+o.W+o.F,y),l||a.setStrong(p,t,f),p}},function(t,e,n){var r=n(9);r(r.P,"Map",{toJSON:n(64)("Map")})},function(t,e,n){var r=n(55),o=n(60);t.exports=function(t){return function(){if(o(this)!=t)throw TypeError(t+"#toJSON isn't generic");var e=[];return r(this,!1,e.push,e),e}}},function(t,e,n){t.exports={"default":n(66),__esModule:!0}},function(t,e,n){n(30),n(31),n(46),n(67),t.exports=n(11).Promise},function(t,e,n){"use strict";var r,o=n(5),i=n(35),s=n(10),c=n(15),u=n(60),a=n(9),f=n(13),l=n(14),h=n(16),p=n(54),d=n(55),v=n(12).set,y=n(68),g=n(53),_=n(40)("species"),m=n(42)("record"),x=n(69),w="Promise",b=s.process,O="process"==u(b),j=s[w],k=function(t){var e=new j(function(){});return t&&(e.constructor=Object),j.resolve(e)===e},P=function(){function t(e){var n=new j(e);return v(n,t.prototype),n}var e=!1;try{if(e=j&&j.resolve&&k(),v(t,j),t.prototype=o.create(j.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(e=!1),e&&n(39)){var r=!1;j.resolve(o.setDesc({},"then",{get:function(){r=!0}})),e=r}}catch(i){e=!1}return e}(),M=function(t){return f(t)&&(P?"Promise"==u(t):m in t)},S=function(t,e){return i&&t===j&&e===r?!0:y(t,e)},E=function(t){var e=l(t)[_];return void 0!=e?e:t},A=function(t){var e;return f(t)&&"function"==typeof(e=t.then)?e:!1},T=function(t,e){if(!t.n){t.n=!0;var n=t.c;x(function(){for(var r=t.v,o=1==t.s,i=0,c=function(e){var n,i,s=o?e.ok:e.fail;try{s?(o||(t.h=!0),n=s===!0?r:s(r),n===e.P?e.rej(TypeError("Promise-chain cycle")):(i=A(n))?i.call(n,e.res,e.rej):e.res(n)):e.rej(r)}catch(c){e.rej(c)}};n.length>i;)c(n[i++]);n.length=0,t.n=!1,e&&setTimeout(function(){var e,n,o=t.p;D(o)&&(O?b.emit("unhandledRejection",r,o):(e=s.onunhandledrejection)?e({promise:o,reason:r}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",r)),t.a=void 0},1)})}},D=function(t){var e,n=t[m],r=n.a||n.c,o=0;if(n.h)return!1;for(;r.length>o;)if(e=r[o++],e.fail||!D(e.P))return!1;return!0},F=function(t){var e=this;e.d||(e.d=!0,e=e.r||e,e.v=t,e.s=2,e.a=e.c.slice(),T(e,!0))},z=function(t){var e,n=this;if(!n.d){n.d=!0,n=n.r||n;try{(e=A(t))?x(function(){var r={r:n,d:!1};try{e.call(t,c(z,r,1),c(F,r,1))}catch(o){F.call(r,o)}}):(n.v=t,n.s=1,T(n,!1))}catch(r){F.call({r:n,d:!1},r)}}};P||(j=function(t){h(t);var e={p:p(this,j,w),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};this[m]=e;try{t(c(z,e,1),c(F,e,1))}catch(n){F.call(e,n)}},n(61)(j.prototype,{then:function(t,e){var n=l(l(this).constructor)[_],r={ok:"function"==typeof t?t:!0,fail:"function"==typeof e?e:!1},o=r.P=new(void 0!=n?n:j)(function(t,e){r.res=t,r.rej=e});h(r.res),h(r.rej);var i=this[m];return i.c.push(r),i.a&&i.a.push(r),i.s&&T(i,!1),o},"catch":function(t){return this.then(void 0,t)}})),a(a.G+a.W+a.F*!P,{Promise:j}),n(45)(j,w),g(j),g(r=n(11)[w]),a(a.S+a.F*!P,w,{reject:function(t){return new this(function(e,n){n(t)})}}),a(a.S+a.F*(!P||k(!0)),w,{resolve:function(t){return M(t)&&S(t.constructor,this)?t:new this(function(e){e(t)})}}),a(a.S+a.F*!(P&&n(74)(function(t){j.all(t)["catch"](function(){})})),w,{all:function(t){var e=E(this),n=[];return new e(function(r,i){d(t,!1,n.push,n);var s=n.length,c=Array(s);s?o.each.call(n,function(t,n){e.resolve(t).then(function(t){c[n]=t,--s||r(c)},i)}):r(c)})},race:function(t){var e=E(this);return new e(function(n,r){d(t,!1,function(t){e.resolve(t).then(n,r)})})}})},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},function(t,e,n){var r,o,i,s=n(10),c=n(70).set,u=s.MutationObserver||s.WebKitMutationObserver,a=s.process,f="process"==n(24)(a),l=function(){var t,e;for(f&&(t=a.domain)&&(a.domain=null,t.exit());r;)e=r.domain,e&&e.enter(),r.fn.call(),e&&e.exit(),r=r.next;o=void 0,t&&t.enter()};if(f)i=function(){a.nextTick(l)};else if(u){var h=1,p=document.createTextNode("");new u(l).observe(p,{characterData:!0}),i=function(){p.data=h=-h}}else i=function(){c.call(s,l)};t.exports=function(t){var e={fn:t,next:void 0,domain:f&&a.domain};o&&(o.next=e),r||(r=e,i()),o=e}},function(t,e,n){"use strict";var r,o,i,s=n(15),c=n(71),u=n(72),a=n(73),f=n(10),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=0,y={},g="onreadystatechange",_=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},m=function(t){_.call(t.data)};h&&p||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++v]=function(){c("function"==typeof t?t:Function(t),e)},r(v),v},p=function(t){delete y[t]},"process"==n(24)(l)?r=function(t){l.nextTick(s(_,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=m,r=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScript?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):r=g in a("script")?function(t){u.appendChild(a("script"))[g]=function(){u.removeChild(this),_.call(t)}}:function(t){setTimeout(s(_,t,1),0)}),t.exports={set:h,clear:p}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){t.exports=n(10).document&&document.documentElement},function(t,e,n){var r=n(13),o=n(10).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(40)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(t){if(!o)return!1;var e=!1;try{var n=[7],i=n[r]();i.next=function(){e=!0},n[r]=function(){return i},t(n)}catch(s){}return e}},function(t,e,n){t.exports={"default":n(76),__esModule:!0}},function(t,e,n){n(46),n(31),t.exports=n(77)},function(t,e,n){var r=n(14),o=n(59);t.exports=n(11).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){t.exports={"default":n(79),__esModule:!0}},function(t,e,n){n(30),n(31),n(46),n(80),n(81),t.exports=n(11).Set},function(t,e,n){"use strict";var r=n(52);n(62)("Set",function(t){return function(){return t(this,arguments[0])}},{add:function(t){return r.def(this,t=0===t?0:t,t)}},r)},function(t,e,n){var r=n(9);r(r.P,"Set",{toJSON:n(64)("Set")})},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(e,n){e.exports=t},function(t,e){"use strict";function n(t,e){if(!t)throw new Error("[koto] "+e)}e.__esModule=!0,e["default"]=n,t.exports=e["default"]},function(t,e,n){"use strict";var r=n(1)["default"],o=n(65)["default"],i=n(82)["default"];e.__esModule=!0;var s=n(84),c=i(s),u=function(){function t(e,n){if(r(this,t),this._base=e,this._handlers={},this._lifecycleRe=/^(enter|update|merge|exit)(:transition)?$/,n&&(this.dataBind=n.dataBind,this.insert=n.insert,"events"in n))for(var o in n.events)this.on(o,n.events[o])}return t.prototype.dataBind=function(){c["default"](!1,"Layers must specify a dataBind method.")},t.prototype.insert=function(){c["default"](!1,"Layers must specify an `insert` method.")},t.prototype.on=function(t,e,n){return n=n||{},c["default"](this._lifecycleRe.test(t),"Unrecognized lifecycle event name specified to 'Layer#on': '"+t+"'."),t in this._handlers||(this._handlers[t]=[]),this._handlers[t].push({callback:e,chart:n.chart||null}),this},t.prototype.off=function(t,e){var n,r=this._handlers[t];if(c["default"](this._lifecycleRe.test(t),"Unrecognized lifecycle event name specified to 'Layer#on': '"+t+"'."),!r)return this;if(1===arguments.length)return r.length=0,this;for(n=r.length-1;n>-1;--n)r[n].callback===e&&r.splice(n,1);return this},t.prototype.draw=function(t){function e(t,e){var n=0;0===t.size()?e():t.each(function(){++n}).each("interrupt.promise",function(){e.apply(this,arguments)}).each("end.promise",function(){--n||e.apply(this,arguments)})}function n(t){u.call(e,function(){t(!0)})}var r,i,s,u,a,f,l,h,p,d,v,y=[];r=this.dataBind.call(this._base,t),c["default"](r instanceof d3.selection,"Invalid selection defined by `Layer#dataBind` method."),c["default"](r.enter,"Layer selection not properly bound."),i=r.enter(),i._chart=this._base._chart,s=[{name:"update",selection:r},{name:"enter",selection:i,method:this.insert},{name:"merge",selection:r},{name:"exit",selection:r,method:r.exit}];for(var g=0,_=s.length;_>g;++g)if(l=s[g].name,u=s[g].selection,a=s[g].method,"function"==typeof a&&(u=a.call(u,u)),!u.empty()){if(c["default"](u&&u instanceof d3.selection,"Invalid selection defined for "+l+" lifecycle event."),f=this._handlers[l])for(h=0,p=f.length;p>h;++h)u._chart=f[h].chart||this._base._chart,f[h].callback.call(u,u);if(f=this._handlers[l+":transition"],f&&f.length)for(u=u.transition(),v=f.length,d=0;v>d;++d)u._chart=f[d].chart||this._base._chart,f[d].callback.call(u,u),y.push(new o(n));this.promise=o.all(y)}},t}();e["default"]=u,t.exports=e["default"]}])});
	//# sourceMappingURL=koto.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _Object$assign = __webpack_require__(12)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _chartsPanoramaChart = __webpack_require__(14);
	
	var _chartsPanoramaChart2 = _interopRequireDefault(_chartsPanoramaChart);
	
	var _chartsChartBase = __webpack_require__(21);
	
	var _chartsChartBase2 = _interopRequireDefault(_chartsChartBase);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	__webpack_require__(79);
	
	var DiscreteBarChart = (function (_PanoramaChart) {
	  _inherits(DiscreteBarChart, _PanoramaChart);
	
	  _createClass(DiscreteBarChart, null, [{
	    key: 'propTypes',
	
	    // extend superclass `props` validators
	    value: _Object$assign({}, _chartsPanoramaChart2['default'].propTypes, {
	      barSpacing: _react.PropTypes.number
	    }),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _Object$assign({}, _chartsPanoramaChart2['default'].defaultProps, {
	      barSpacing: 0.1,
	      xScale: _d32['default'].scale.ordinal()
	    }),
	    enumerable: true
	  }]);
	
	  function DiscreteBarChart(props) {
	    _classCallCheck(this, DiscreteBarChart);
	
	    _get(Object.getPrototypeOf(DiscreteBarChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = DiscreteBarChartImpl;
	  }
	
	  _createClass(DiscreteBarChart, [{
	    key: 'getClassSuffix',
	    value: function getClassSuffix() {
	      return 'bar-chart vertical';
	    }
	  }]);
	
	  return DiscreteBarChart;
	})(_chartsPanoramaChart2['default']);
	
	exports['default'] = DiscreteBarChart;
	
	var DiscreteBarChartImpl = (function (_ChartBase) {
	  _inherits(DiscreteBarChartImpl, _ChartBase);
	
	  function DiscreteBarChartImpl(selection, props) {
	    _classCallCheck(this, DiscreteBarChartImpl);
	
	    _get(Object.getPrototypeOf(DiscreteBarChartImpl.prototype), 'constructor', this).call(this, selection, props);
	
	    var _Chart = this;
	
	    this.configs['barSpacing'] = { value: props.barSpacing };
	
	    // append group to chart
	    var bars = this.baseLayer = this.base.append('g').classed('bars', true);
	
	    this.updateDimensions();
	
	    // define layer
	    var layer = this.layer('bars', bars, {
	      dataBind: function dataBind(data) {
	        return this.selectAll('rect').data(data);
	      },
	      insert: function insert() {
	        return this.append('rect').attr('class', 'bar').attr('width', _Chart.config('xScale').rangeBand());
	      }
	    });
	
	    // Set up lifecycle events on layers
	    layer.on('enter', function () {
	      return this.attr('x', function (d) {
	        return _Chart.config('xScale')(_Chart.accessor('x')(d));
	      }).attr('y', function (d) {
	        return _Chart.config('yScale')(_Chart.accessor('y')(d));
	      }).attr('height', function (d) {
	        return _Chart._innerHeight - _Chart.config('yScale')(_Chart.accessor('y')(d));
	      });
	    }).on('merge', function () {
	      // this => base selection
	    }).on('exit', function () {
	      // this => exit selection
	    });
	  }
	
	  _createClass(DiscreteBarChartImpl, [{
	    key: 'updateScales',
	    value: function updateScales(data) {
	      var _this = this;
	
	      // TODO: I think this is a bug waiting to happen.
	      // When xScale and yScale are set from default React `props`,
	      // they point at a single instance of d3.scale that is
	      // shared across all instances. `props` should be considered immutable
	      // for this reason; however, this code will mutate the
	      // d3 scales used by all instances of DiscreteBarChart.
	      // Could the default prop instead be a factory function?
	
	      this.config('xScale').rangeRoundBands([0, this._innerWidth], this.config('barSpacing'));
	      this.config('yScale').range([this._innerHeight, 0]);
	      this.config('xScale').domain(data.map(function (d) {
	        return _this.accessor('x')(d);
	      }));
	      this.config('yScale').domain([0, _d32['default'].max(data, function (d) {
	        return _this.accessor('y')(d);
	      })]);
	    }
	  }]);
	
	  return DiscreteBarChartImpl;
	})(_chartsChartBase2['default']);

	exports.DiscreteBarChartImpl = DiscreteBarChartImpl;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _Object$assign = __webpack_require__(12)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _koto = __webpack_require__(19);
	
	var _koto2 = _interopRequireDefault(_koto);
	
	var _Axis = __webpack_require__(40);
	
	var _Axis2 = _interopRequireDefault(_Axis);
	
	var ChartBase = (function (_Koto) {
	  _inherits(ChartBase, _Koto);
	
	  function ChartBase(selection, props) {
	    _classCallCheck(this, ChartBase);
	
	    _get(Object.getPrototypeOf(ChartBase.prototype), 'constructor', this).call(this, selection);
	
	    var xAxisProps = _Object$assign({}, props.axisProps, {
	      orient: props.axisProps.xOrient
	    }),
	        yAxisProps = _Object$assign({}, props.axisProps, {
	      orient: props.axisProps.yOrient
	    });
	
	    _Object$assign(this.configs, {
	      width: { value: props.width },
	      height: { value: props.height },
	      margin: { value: props.margin },
	      xScale: { value: props.xScale },
	      yScale: { value: props.yScale },
	      xAxis: { value: new _Axis2['default'](this.base, 'x', xAxisProps) },
	      yAxis: { value: new _Axis2['default'](this.base, 'y', yAxisProps) }
	    });
	  }
	
	  _createClass(ChartBase, [{
	    key: 'updateConfigs',
	    value: function updateConfigs(props) {
	
	      this.config('height', props.height).config('width', props.width).config('margin', props.margin).config('xScale', props.xScale).config('yScale', props.yScale).accessor('x', props.xAccessor).accessor('y', props.yAccessor);
	    }
	
	    /**
	     * Default implementation of d3-style 'conventional margins'
	     * (sim. to: http://bl.ocks.org/mbostock/3019563)
	     */
	  }, {
	    key: 'updateDimensions',
	    value: function updateDimensions() {
	
	      var margin = this.config('margin');
	
	      this._innerWidth = this.config('width') - margin.left - margin.right;
	      this._innerHeight = this.config('height') - margin.top - margin.bottom;
	
	      this.base.attr('width', this.config('width'));
	      this.base.attr('height', this.config('height'));
	
	      this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	    }
	  }, {
	    key: 'updateScales',
	    value: function updateScales(data) {
	      var _this = this;
	
	      this.config('xScale').range([0, this._innerWidth]);
	      this.config('yScale').range([this._innerHeight, 0]);
	
	      // default to set domain to all xAccesssor values along x-axis,
	      // and 0 <> max yAccessor value along y-axis.
	      this.config('xScale').domain(data.map(function (d) {
	        return _this.accessor('x')(d);
	      }));
	      this.config('yScale').domain([0, _d32['default'].max(data, function (d) {
	        return _this.accessor('y')(d);
	      })]);
	    }
	
	    // Do something before `dataBind`
	  }, {
	    key: 'preDraw',
	    value: function preDraw(data) {
	
	      this.updateDimensions();
	      this.updateScales(data);
	
	      var margin = this.config('margin');
	
	      if (this.config('xAxis')) {
	        this.config('xAxis').update(this.config('xScale'), [margin.left, this._innerHeight + margin.bottom]);
	      }
	      if (this.config('yAxis')) {
	        this.config('yAxis').update(this.config('yScale'), [margin.left, margin.top]);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	
	      this.base.remove();
	      this.base = null;
	    }
	  }]);
	
	  return ChartBase;
	})(_koto2['default']);
	
	exports['default'] = ChartBase;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(25)
	  , TAG = __webpack_require__(9)('toStringTag')
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
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(25);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(60)
	  , $def            = __webpack_require__(13)
	  , $redef          = __webpack_require__(62)
	  , hide            = __webpack_require__(18)
	  , has             = __webpack_require__(26)
	  , SYMBOL_ITERATOR = __webpack_require__(9)('iterator')
	  , Iterators       = __webpack_require__(10)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(58)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(6).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(31)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(6).setDesc
	  , has = __webpack_require__(26)
	  , TAG = __webpack_require__(9)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(15);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(65)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function(iterated){
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	var Iterators = __webpack_require__(10);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 35 */
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
	
	var _chartsChartBase = __webpack_require__(21);
	
	var _chartsChartBase2 = _interopRequireDefault(_chartsChartBase);
	
	var _chartsPanoramaChartJsx = __webpack_require__(14);
	
	var _chartsPanoramaChartJsx2 = _interopRequireDefault(_chartsPanoramaChartJsx);
	
	__webpack_require__(78);
	
	var AreaChart = (function (_PanoramaChart) {
	  _inherits(AreaChart, _PanoramaChart);
	
	  function AreaChart(props) {
	    _classCallCheck(this, AreaChart);
	
	    _get(Object.getPrototypeOf(AreaChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = AreaChartImpl;
	  }
	
	  _createClass(AreaChart, [{
	    key: 'getClassSuffix',
	    value: function getClassSuffix() {
	      return 'area-chart';
	    }
	  }]);
	
	  return AreaChart;
	})(_chartsPanoramaChartJsx2['default']);
	
	exports['default'] = AreaChart;
	
	var AreaChartImpl = (function (_ChartBase) {
	  _inherits(AreaChartImpl, _ChartBase);
	
	  function AreaChartImpl(selection, props) {
	    var _this = this;
	
	    _classCallCheck(this, AreaChartImpl);
	
	    _get(Object.getPrototypeOf(AreaChartImpl.prototype), 'constructor', this).call(this, selection, props);
	
	    var areaGenerator = _d32['default'].svg.area().interpolate('basis').x(function (d) {
	      return _this.config('xScale')(_this.accessor('x')(d));
	    }).y0(function (d) {
	      return _this.config('yScale')(0);
	    }).y1(function (d) {
	      return _this.config('yScale')(_this.accessor('y')(d));
	    });
	
	    // append group to chart
	    var area = this.baseLayer = this.base.append('g').classed('area-layer', true);
	
	    this.updateDimensions();
	
	    // define layer
	    var layer = this.layer('area-layer', area, {
	      dataBind: function dataBind(data) {
	        return this.selectAll('path.area').data(data);
	      },
	
	      insert: function insert() {
	        return this.append('path').attr('class', 'area');
	      }
	    });
	
	    // Setup life-cycle events on layers
	    layer.on('update', function () {
	      // this => base selection
	      return this.attr('d', function (d) {
	        return areaGenerator(d);
	      });
	    }).on('enter', function () {
	      // this => enter selection
	      return this.attr('d', function (d) {
	        return areaGenerator(d);
	      });
	    }).on('merge', function () {
	      // this => base selection
	    }).on('exit', function () {
	      // this => exit selection
	    });
	  }
	
	  _createClass(AreaChartImpl, [{
	    key: 'updateScales',
	    value: function updateScales(data) {
	
	      this.config('xScale').range([0, this._innerWidth]);
	      this.config('yScale').range([this._innerHeight, 0]);
	    }
	  }]);
	
	  return AreaChartImpl;
	})(_chartsChartBase2['default']);

	exports.AreaChartImpl = AreaChartImpl;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _Object$assign = __webpack_require__(12)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _DiscreteBarChartDiscreteBarChart = __webpack_require__(20);
	
	var _DiscreteBarChartDiscreteBarChart2 = _interopRequireDefault(_DiscreteBarChartDiscreteBarChart);
	
	var HorizontalDiscreteBarChart = (function (_DiscreteBarChart) {
	  _inherits(HorizontalDiscreteBarChart, _DiscreteBarChart);
	
	  _createClass(HorizontalDiscreteBarChart, null, [{
	    key: 'propTypes',
	
	    // extend superclass `props` validators
	    value: _Object$assign({}, _DiscreteBarChartDiscreteBarChart2['default'].propTypes),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _Object$assign({}, _DiscreteBarChartDiscreteBarChart2['default'].defaultProps, {
	      xScale: _d32['default'].scale.linear(),
	      yScale: _d32['default'].scale.ordinal()
	    }),
	    enumerable: true
	  }]);
	
	  function HorizontalDiscreteBarChart(props) {
	    _classCallCheck(this, HorizontalDiscreteBarChart);
	
	    _get(Object.getPrototypeOf(HorizontalDiscreteBarChart.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = HorizontalDiscreteBarChartImpl;
	  }
	
	  /*
	  TODO NEXT:
	  refactor this and map choropleth
	  then bring areachart in
	  then push to master
	  */
	
	  _createClass(HorizontalDiscreteBarChart, [{
	    key: 'getClassSuffix',
	    value: function getClassSuffix() {
	      return 'bar-chart horizontal';
	    }
	  }]);
	
	  return HorizontalDiscreteBarChart;
	})(_DiscreteBarChartDiscreteBarChart2['default']);
	
	exports['default'] = HorizontalDiscreteBarChart;
	
	var HorizontalDiscreteBarChartImpl = (function (_DiscreteBarChartImpl) {
	  _inherits(HorizontalDiscreteBarChartImpl, _DiscreteBarChartImpl);
	
	  function HorizontalDiscreteBarChartImpl(selection, props) {
	    _classCallCheck(this, HorizontalDiscreteBarChartImpl);
	
	    _get(Object.getPrototypeOf(HorizontalDiscreteBarChartImpl.prototype), 'constructor', this).call(this, selection, props);
	
	    var _Chart = this;
	
	    var layer = this.layer('bars');
	
	    layer.insert = function () {
	      return this.append('rect').attr('class', 'bar').attr('height', _Chart.config('yScale').rangeBand());
	    };
	
	    layer.on('enter', function () {
	      return this.attr('x', function (d) {
	        return '0';
	      }).attr('y', function (d) {
	        return _Chart.config('yScale')(_Chart.accessor('y')(d));
	      }).attr('width', function (d) {
	        return _Chart.config('xScale')(_Chart.accessor('x')(d));
	      }).attr('height', _Chart.config('yScale').rangeBand());
	    });
	  }
	
	  _createClass(HorizontalDiscreteBarChartImpl, [{
	    key: 'updateScales',
	    value: function updateScales(data) {
	      var _this = this;
	
	      // TODO: I think this is a bug waiting to happen.
	      // See TODO in DiscreteBarChart.updateScales().
	      this.config('yScale').rangeRoundBands([0, this._innerHeight], this.config('barSpacing'));
	      this.config('yScale').domain(data.map(function (d) {
	        return _this.accessor('y')(d);
	      }));
	
	      this.config('xScale').range([0, this._innerWidth]);
	      this.config('xScale').domain([0, _d32['default'].max(data, function (d) {
	        return _this.accessor('x')(d);
	      })]);
	    }
	  }]);
	
	  return HorizontalDiscreteBarChartImpl;
	})(_DiscreteBarChartDiscreteBarChart.DiscreteBarChartImpl);

	exports.HorizontalDiscreteBarChartImpl = HorizontalDiscreteBarChartImpl;

/***/ },
/* 37 */
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
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(80);
	
	var Legend = (function (_React$Component) {
	  _inherits(Legend, _React$Component);
	
	  _createClass(Legend, null, [{
	    key: 'propTypes',
	    value: {
	      initialSelection: _react.PropTypes.string,
	      items: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      initialSelection: '',
	      items: []
	    },
	    enumerable: true
	  }]);
	
	  function Legend(props) {
	    _classCallCheck(this, Legend);
	
	    _get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      selectedItem: this.props.initialSelection
	    };
	
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
	
	      // Store the selected item for use in render().
	      this.setState({ selectedItem: event.currentTarget.dataset.item });
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
	        { className: 'panorama legend' },
	        _react2['default'].createElement(
	          'ul',
	          null,
	          this.props.items.map(function (item) {
	            return _react2['default'].createElement(
	              'li',
	              {
	                className: 'item' + (_this.state.selectedItem === item ? ' selected' : ''),
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _slicedToArray = __webpack_require__(47)['default'];
	
	var _Object$assign = __webpack_require__(12)['default'];
	
	var _getIterator = __webpack_require__(22)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _d3 = __webpack_require__(7);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _koto = __webpack_require__(19);
	
	var _koto2 = _interopRequireDefault(_koto);
	
	var _chartsPanoramaChart = __webpack_require__(14);
	
	var _chartsPanoramaChart2 = _interopRequireDefault(_chartsPanoramaChart);
	
	var MapChoropleth = (function (_PanoramaChart) {
	  _inherits(MapChoropleth, _PanoramaChart);
	
	  _createClass(MapChoropleth, null, [{
	    key: 'propTypes',
	
	    // TODO: create a MapBase class, similar to ChartBase?
	    // TODO: pass in accessors for more flexibility with data?
	
	    // extend superclass `props` validators
	    value: _Object$assign({}, _chartsPanoramaChart2['default'].propTypes, {
	      range: _react.PropTypes.arrayOf(_react.PropTypes.string),
	      projection: _react.PropTypes.string,
	      mapScale: _react.PropTypes.number
	    }),
	
	    // extend superclass `props` defaults
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: _Object$assign({}, _chartsPanoramaChart2['default'].defaultProps, {
	      range: ['#EDF8FB', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1', '#88419D', '#6E016B'],
	      projection: 'albersUsa',
	      mapScale: 500
	    }),
	    enumerable: true
	  }]);
	
	  function MapChoropleth(props) {
	    _classCallCheck(this, MapChoropleth);
	
	    _get(Object.getPrototypeOf(MapChoropleth.prototype), 'constructor', this).call(this, props);
	    this.chartConstructor = MapChoroplethImpl;
	  }
	
	  _createClass(MapChoropleth, [{
	    key: 'getClassSuffix',
	    value: function getClassSuffix() {
	      return 'map choropleth';
	    }
	  }]);
	
	  return MapChoropleth;
	})(_chartsPanoramaChart2['default']);
	
	exports['default'] = MapChoropleth;
	
	var MapChoroplethImpl = (function (_Koto) {
	  _inherits(MapChoroplethImpl, _Koto);
	
	  function MapChoroplethImpl(selection, props) {
	    _classCallCheck(this, MapChoroplethImpl);
	
	    _get(Object.getPrototypeOf(MapChoroplethImpl.prototype), 'constructor', this).call(this, selection);
	
	    _Object$assign(this.configs, {
	      width: { value: props.width },
	      height: { value: props.height },
	      margin: { value: props.margin },
	      range: { value: props.range },
	      projection: { value: props.projection },
	      mapScale: { value: props.mapScale }
	    });
	
	    var _Chart = this;
	
	    this._path = _d32['default'].geo.path();
	    this._projection = _d32['default'].geo[this.config('projection')]();
	
	    this.data = {
	      geometry: [],
	      values: []
	    };
	
	    this.colorScale = _d32['default'].scale.quantize().range(this.config('range'));
	
	    this.baseLayer = this.base.append('g').classed('map', true);
	
	    this.updateDimensions();
	
	    // define layer
	    var layer = this.layer('geo', this.baseLayer, {
	      dataBind: function dataBind(data) {
	        _Chart.data.geometry = data.geometry;
	        _Chart.data.values = data.values;
	
	        return this.selectAll('path').data(_Chart.data.geometry.features);
	      },
	      insert: function insert() {
	        return this.append('path').attr('class', 'geometry').style('fill', function (d) {
	          return _Chart.colorScale(_Chart.data.values.get(d.id));
	        }).attr('d', _Chart._path);
	      }
	    });
	
	    // Setup life-cycle events on layers
	    layer.on('enter', function () {
	      // this => enter selection
	    }).on('merge', function () {
	      // this => base selection
	    }).on('exit', function () {
	      // this => exit selection
	    });
	  }
	
	  _createClass(MapChoroplethImpl, [{
	    key: 'fitMap',
	    value: function fitMap(geo) {
	      var projection = _d32['default'].geo[this.config('projection')]().scale(1).translate([0, 0]);
	
	      var path = _d32['default'].geo.path().projection(projection);
	
	      var b = path.bounds(geo),
	          //[[left,top],[right,bottom]],
	      s = .95 / Math.max((b[1][0] - b[0][0]) / this._innerWidth, (b[1][1] - b[0][1]) / this._innerHeight),
	          t = [(this._innerWidth - s * (b[1][0] + b[0][0])) / 2, (this._innerHeight - s * (b[1][1] + b[0][1])) / 2];
	
	      return [s, t];
	    }
	
	    /**
	     * Default implementation of d3-style 'conventional margins'
	     * (sim. to: http://bl.ocks.org/mbostock/3019563)
	     */
	  }, {
	    key: 'updateDimensions',
	    value: function updateDimensions() {
	
	      var margin = this.config('margin');
	
	      this._innerWidth = this.config('width') - margin.left - margin.right;
	      this._innerHeight = this.config('height') - margin.top - margin.bottom;
	
	      this.base.attr('width', this.config('width'));
	      this.base.attr('height', this.config('height'));
	
	      this.baseLayer.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	    }
	  }, {
	    key: 'updateProjection',
	    value: function updateProjection(data) {
	
	      var scale = this.config('mapScale');
	      var translate = [this._innerWidth / 2, this._innerHeight / 2];
	
	      if (this.config('mapScale') === 'auto') {
	        var _fitMap = this.fitMap(data.geometry);
	
	        var _fitMap2 = _slicedToArray(_fitMap, 2);
	
	        scale = _fitMap2[0];
	        translate = _fitMap2[1];
	      }
	
	      this._projection = _d32['default'].geo[this.config('projection')]().scale(scale).translate(translate);
	
	      this._path.projection(this._projection);
	    }
	  }, {
	    key: 'updateColorScale',
	    value: function updateColorScale(data) {
	
	      var max = -Infinity;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = _getIterator(data.values.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var value = _step.value;
	
	          if (value > max) max = value;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      this.colorScale.domain([0, max]).range(this.config('range'));
	    }
	  }, {
	    key: 'preDraw',
	    value: function preDraw(data) {
	
	      this.updateDimensions();
	      this.updateProjection(data);
	      this.updateColorScale(data);
	    }
	  }]);
	
	  return MapChoroplethImpl;
	})(_koto2['default']);

	exports.MapChoroplethImpl = MapChoroplethImpl;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(4)['default'];
	
	var _inherits = __webpack_require__(5)['default'];
	
	var _createClass = __webpack_require__(3)['default'];
	
	var _classCallCheck = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	var _interopRequireWildcard = __webpack_require__(46)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(7);
	
	var d3 = _interopRequireWildcard(_d3);
	
	__webpack_require__(81);
	
	var Punchcard = (function (_React$Component) {
	  _inherits(Punchcard, _React$Component);
	
	  _createClass(Punchcard, null, [{
	    key: 'propTypes',
	
	    // property validation
	    value: {
	      header: _react.PropTypes.object,
	      categories: _react.PropTypes.array.isRequired,
	      items: _react.PropTypes.array.isRequired
	    },
	
	    // property defaults (ES7-style React)
	    // (instead of ES5-style getDefaultProps)
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      header: {
	        title: '',
	        subtitle: '',
	        caption: ''
	      },
	      categories: [],
	      items: []
	    },
	    enumerable: true
	  }]);
	
	  function Punchcard(props) {
	    _classCallCheck(this, Punchcard);
	
	    _get(Object.getPrototypeOf(Punchcard.prototype), 'constructor', this).call(this, props);
	
	    // set up initial state (instead of ES5-style getInitialState)
	    // this.state =
	
	    // bind handlers to this component instance,
	    // since React no longer does this automatically when using ES6
	    // this.onThingClicked = this.onThingClicked.bind(this);
	  }
	
	  _createClass(Punchcard, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      d3Punchcard.create(this.refs.content, this.props.categories, this.props.items);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	
	      d3Punchcard.update(this.refs.content, this.props.categories, this.props.items);
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
	        this.renderHeaderContent(),
	        _react2['default'].createElement('div', { className: 'content', ref: 'content' })
	      );
	    }
	  }, {
	    key: 'renderHeaderContent',
	    value: function renderHeaderContent() {
	
	      if (!this.props.header) {
	        return null;
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'header', ref: 'header' },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          this.props.header.title.toUpperCase()
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          _react2['default'].createElement(
	            'span',
	            { className: 'subtitle' },
	            this.props.header.subtitle
	          ),
	          _react2['default'].createElement(
	            'span',
	            { className: 'caption' },
	            this.props.header.caption,
	            ' total tonnage'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Punchcard;
	})(_react2['default'].Component);
	
	exports['default'] = Punchcard;
	
	var d3Punchcard = {
	
	  // layout constants
	  ROW_HEIGHT: 20,
	  COMMODITY_TEXT_OFFSET_Y: 5,
	
	  /**
	   * Any necessary setup for d3 component goes here.
	   *
	   * @param  {Node}    HTMLElement to which d3 will attach
	   * @param  {Object}  Categorized map of items (TODO: document expected format)
	   * @param  {Object}  Flat map of items (TODO: document expected format)
	   */
	  create: function create(node, categories, items) {
	
	    if (categories && items) {
	      this.update(node, categories, items);
	    }
	  },
	
	  /**
	   * Logic for updating d3 component with new data.
	   *
	   * @param  {Node}    HTMLElement to which d3 will attach
	   * @param  {Object}  Categorized map of items (TODO: document expected format)
	   * @param  {Object}  Flat map of items (TODO: document expected format)
	   */
	  update: function update(node, categories, items) {
	
	    var scope = this,
	
	    // scale by normalizedValue of all items
	    rScale = d3.scale.sqrt().range([2, 8]).domain([1, d3.max(items, function (d) {
	      return d.normalizedValue;
	    })]),
	
	    // color by aggregateNormalizedValue of all categories
	    colorScale = d3.scale.ordinal().range(['rgb(188, 35, 64)', 'rgb(228, 104, 75)', 'rgb(187, 27, 105)', 'rgb(103, 116, 99)', 'rgb(26, 169, 143)', 'rgb(10, 103, 150)', 'rgb(67, 40, 93)', 'rgb(86, 96, 99)']).domain([1, d3.max(categories, function (d) {
	      return d.aggregateNormalizedValue;
	    })]);
	
	    // <div> for each category
	    var categoryNodes = d3.select(node).selectAll('div').data(categories).enter().append('div').attr('style', function (d) {
	      return 'color: ' + colorScale(d.aggregateNormalizedValue) + ';';
	    }).attr('class', 'category');
	
	    // each with a heading...
	    categoryNodes.append('h4').text(function (d) {
	      return d.name;
	    });
	
	    // ...and an <svg>
	    categoryNodes = categoryNodes.append('svg')
	    // .attr('width', '50%')
	    .attr('height', function (d) {
	      return d.commodities.length * scope.ROW_HEIGHT;
	    }).style('fill', function (d) {
	      return colorScale(d.aggregateNormalizedValue);
	    });
	
	    // <g> for each commodity within each category
	    var commodityNodes = categoryNodes.selectAll('g').data(function (d) {
	      return d.commodities;
	    }).enter().append('g').attr('transform', function (d, i) {
	      return 'translate(' + 0.5 * scope.ROW_HEIGHT + ', ' + (i + 0.5) * scope.ROW_HEIGHT + ')';
	    });
	
	    // <circle> displaying scaled amount of each commodity
	    commodityNodes.append('circle').attr('r', function (d) {
	      return rScale(d.normalizedValue);
	    });
	
	    // <text> displaying name of each commodity
	    commodityNodes.append('text').text(function (d) {
	      return d.name;
	    }).attr('x', 2 * scope.ROW_HEIGHT).attr('y', scope.COMMODITY_TEXT_OFFSET_Y);
	  },
	
	  /**
	   * Any necessary cleanup for d3 component goes here.
	   *
	   * @param  {Node}    HTMLElement to which d3 was attached
	   */
	  destroy: function destroy(node) {
	
	    //
	
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 40 */
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
	
	var _koto = __webpack_require__(19);
	
	var _koto2 = _interopRequireDefault(_koto);
	
	var Axis = (function (_Koto) {
	  _inherits(Axis, _Koto);
	
	  function Axis(selection, axisType, props) {
	    _classCallCheck(this, Axis);
	
	    _get(Object.getPrototypeOf(Axis.prototype), 'constructor', this).call(this, selection);
	
	    this.configs['scale'] = { value: props.scale };
	    this.configs['ticks'] = { value: props.ticks };
	    this.configs['orient'] = { value: props.orient };
	    this.configs['offset'] = { value: props.offset };
	
	    this.axis = _d32['default'].svg.axis();
	    this.baseLayer = this.base.append('g').classed(axisType + ' axis', true);
	  }
	
	  _createClass(Axis, [{
	    key: 'update',
	    value: function update(scale, offset) {
	
	      if (scale) {
	        this.config('scale', scale);
	      }
	      if (offset) {
	        this.config('offset', offset);
	      } else {
	        offset = this.config('offset');
	      }
	
	      this.axis.scale(this.config('scale')).ticks(this.config('ticks')).orient(this.config('orient'));
	
	      this.baseLayer.attr('transform', 'translate(' + offset[0] + ',' + offset[1] + ')').call(this.axis);
	    }
	  }]);
	
	  return Axis;
	})(_koto2['default']);
	
	exports['default'] = Axis;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getIterator = __webpack_require__(22)["default"];
	
	var _isIterable = __webpack_require__(41)["default"];
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(33);
	module.exports = __webpack_require__(72);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(33);
	module.exports = __webpack_require__(73);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(76);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(6)
	  , toObject = __webpack_require__(68)
	  , IObject  = __webpack_require__(27);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(16)(function(){
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(55);
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(6)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(30)(1,next)});
	  __webpack_require__(31)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(13)
	    , fn   = (__webpack_require__(8).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(16)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(6).getDesc
	  , isObject = __webpack_require__(28)
	  , anObject = __webpack_require__(23);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(57)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(67)
	  , defined   = __webpack_require__(15);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 67 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(24)
	  , ITERATOR  = __webpack_require__(9)('iterator')
	  , Iterators = __webpack_require__(10);
	module.exports = __webpack_require__(8).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(23)
	  , get      = __webpack_require__(71);
	module.exports = __webpack_require__(8).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(24)
	  , ITERATOR  = __webpack_require__(9)('iterator')
	  , Iterators = __webpack_require__(10);
	module.exports = __webpack_require__(8).isIterable = function(it){
	  var O = Object(it);
	  return ITERATOR in O
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(70)
	  , step       = __webpack_require__(59)
	  , Iterators  = __webpack_require__(10)
	  , toIObject  = __webpack_require__(32);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(29)(Array, 'Array', function(iterated, kind){
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
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(13);
	
	$def($def.S + $def.F, 'Object', {assign: __webpack_require__(56)});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(32);
	
	__webpack_require__(61)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(13);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(63).set});

/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
78,
/* 80 */
78,
/* 81 */
78
/******/ ])))
});
;
//# sourceMappingURL=components.js.map