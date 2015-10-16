(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
})();

var _get = function get(_x, _x2, _x3) {
	var _again = true;_function: while (_again) {
		var object = _x,
		    property = _x2,
		    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
			}
		} else if ('value' in desc) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	}
};

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj['default'] = obj;return newObj;
	}
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _panoramaToolkit = require('@panorama/toolkit');

var LegendExample = (function (_React$Component) {
	_inherits(LegendExample, _React$Component);

	function LegendExample() {
		_classCallCheck(this, LegendExample);

		_get(Object.getPrototypeOf(LegendExample.prototype), 'constructor', this).call(this);
	}

	_createClass(LegendExample, [{
		key: 'render',
		value: function render() {

			var legendData = {
				items: ['narratives', 'cotton', 'sugar'],
				initialSelection: 'narratives'
			};

			return React.createElement(_panoramaToolkit.Legend, { data: legendData });
		}
	}]);

	return LegendExample;
})(React.Component);

exports['default'] = LegendExample;
module.exports = exports['default'];

},{"@panorama/toolkit":"@panorama/toolkit","react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
})();

var _get = function get(_x, _x2, _x3) {
	var _again = true;_function: while (_again) {
		var object = _x,
		    property = _x2,
		    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);if (parent === null) {
				return undefined;
			} else {
				_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
			}
		} else if ('value' in desc) {
			return desc.value;
		} else {
			var getter = desc.get;if (getter === undefined) {
				return undefined;
			}return getter.call(receiver);
		}
	}
};

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj['default'] = obj;return newObj;
	}
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _panoramaToolkit = require('@panorama/toolkit');

var PunchcardExample = (function (_React$Component) {
	_inherits(PunchcardExample, _React$Component);

	function PunchcardExample() {
		_classCallCheck(this, PunchcardExample);

		_get(Object.getPrototypeOf(PunchcardExample.prototype), 'constructor', this).call(this);
	}

	_createClass(PunchcardExample, [{
		key: 'render',
		value: function render() {

			// TODO: friday: finish this example,
			// push and link to source in comment for sean,
			// npm version and publish and include in canals.

			var punchcardData = {
				"header": {
					"title": "Erie Canal",
					"subtitle": 1850,
					"caption": 1635089
				},
				"categories": [{
					"commodities": [{
						"name": "Wheat",
						"value": 3670754,
						"normalizedValue": 359733.892
					}, {
						"name": "Flour",
						"value": 3256077,
						"normalizedValue": 319095.546
					}, {
						"name": "Grain",
						"value": 7339865,
						"normalizedValue": 172486.8275
					}],
					"name": "Grains, Alcohol & Tobacco",
					"aggregateNormalizedValue": 851316.2655
				}, {
					"commodities": [{
						"name": "Boards & scantling",
						"value": 425095442,
						"normalizedValue": 637643.163
					}, {
						"name": "Shingles",
						"value": 58433000,
						"normalizedValue": 29216.5
					}],
					"name": "Building Materials",
					"aggregateNormalizedValue": 666859.663
				}, {
					"commodities": [{
						"name": "Product of the Forest",
						"value": 1261991,
						"normalizedValue": 1261991
					}, {
						"name": "Staves",
						"value": 202224000,
						"normalizedValue": 101112
					}, {
						"name": "Timber",
						"value": 1666262,
						"normalizedValue": 25993.6872
					}, {
						"name": "Wood",
						"value": 12411,
						"normalizedValue": 18616.5
					}],
					"name": "Lumber\/Timber\/Wood",
					"aggregateNormalizedValue": 1407713.1872
				}, {
					"commodities": [{
						"name": "Agriculture",
						"value": 965619,
						"normalizedValue": 965619
					}],
					"name": "Agricultural Products (other than grains)",
					"aggregateNormalizedValue": 965619
				}, {
					"commodities": [{
						"name": "Merchandise",
						"value": 269370,
						"normalizedValue": 269370
					}, {
						"name": "Manufactures",
						"value": 200218,
						"normalizedValue": 200218
					}],
					"name": "Finished Products",
					"aggregateNormalizedValue": 469588
				}, {
					"commodities": [{
						"name": "Miscellaneous\/Other Articles",
						"value": 379419,
						"normalizedValue": 379419
					}],
					"name": "Other Articles",
					"aggregateNormalizedValue": 379419
				}],
				"items": [{
					"name": "Boards & scantling",
					"value": 425095442,
					"normalizedValue": 637643.163
				}, {
					"name": "Flour",
					"value": 3256077,
					"normalizedValue": 319095.546
				}, {
					"name": "Grain",
					"value": 7339865,
					"normalizedValue": 172486.8275
				}, {
					"name": "Product of the Forest",
					"value": 1261991,
					"normalizedValue": 1261991
				}, {
					"name": "Shingles",
					"value": 58433000,
					"normalizedValue": 29216.5
				}, {
					"name": "Timber",
					"value": 1666262,
					"normalizedValue": 25993.6872
				}, {
					"name": "Miscellaneous\/Other Articles",
					"value": 379419,
					"normalizedValue": 379419
				}, {
					"name": "Wood",
					"value": 12411,
					"normalizedValue": 18616.5
				}, {
					"name": "Agriculture",
					"value": 965619,
					"normalizedValue": 965619
				}, {
					"name": "Wheat",
					"value": 3670754,
					"normalizedValue": 359733.892
				}, {
					"name": "Staves",
					"value": 202224000,
					"normalizedValue": 101112
				}, {
					"name": "Manufactures",
					"value": 200218,
					"normalizedValue": 200218
				}, {
					"name": "Merchandise",
					"value": 269370,
					"normalizedValue": 269370
				}]
			};

			return React.createElement(_panoramaToolkit.Punchcard, punchcardData);
		}
	}]);

	return PunchcardExample;
})(React.Component);

exports['default'] = PunchcardExample;
module.exports = exports['default'];

},{"@panorama/toolkit":"@panorama/toolkit","react":"react"}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { 'default': obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj['default'] = obj;return newObj;
	}
}

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _exampleLegendJsx = require('./example-legend.jsx');

var _exampleLegendJsx2 = _interopRequireDefault(_exampleLegendJsx);

// import BarchartExample from './example-barchart.jsx';

var _examplePunchcardJsx = require('./example-punchcard.jsx');

var _examplePunchcardJsx2 = _interopRequireDefault(_examplePunchcardJsx);

var examples = React.createElement('div', null, React.createElement('h1', null, 'Panorama Toolkit examples'), React.createElement('h2', null, 'Legend'), React.createElement(_exampleLegendJsx2['default'], null), React.createElement('h2', null, 'Punchcard'), React.createElement(_examplePunchcardJsx2['default'], null));

React.render(examples, document.body);
/*
<h2>Barchart</h2>
<BarchartExample />
*/

},{"./example-legend.jsx":1,"./example-punchcard.jsx":2,"react":"react"}]},{},[3]);
