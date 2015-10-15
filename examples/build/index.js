(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

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

var BarchartExample = (function (_React$Component) {
  _inherits(BarchartExample, _React$Component);

  function BarchartExample() {
    _classCallCheck(this, BarchartExample);

    _get(Object.getPrototypeOf(BarchartExample.prototype), 'constructor', this).call(this);
  }

  _createClass(BarchartExample, [{
    key: 'render',
    value: function render() {
      var opts = {
        data: [{ key: 'red', value: 20 }, { key: 'blue', value: 40 }, { key: 'green', value: 10 }],
        klass: 'barchart',
        width: 600,
        height: 400,
        margin: { top: 20, right: 30, bottom: 20, left: 30 },
        barSpacing: 0.1,
        xAccessor: function xAccessor(d) {
          return d.key;
        },
        yAccessor: function yAccessor(d) {
          return d.value;
        }
      };

      return React.createElement(_panoramaToolkit.PanoramaChart, _extends({ type: 'DiscreteBarChart' }, opts));
    }
  }]);

  return BarchartExample;
})(React.Component);

exports['default'] = BarchartExample;
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

var _exampleBarchartJsx = require('./example-barchart.jsx');

var _exampleBarchartJsx2 = _interopRequireDefault(_exampleBarchartJsx);

var examples = React.createElement('div', null, React.createElement('h1', null, 'Panorama Toolkit examples'), React.createElement('h2', null, 'Legend'), React.createElement(_exampleLegendJsx2['default'], null), React.createElement('h2', null, 'Barchart'), React.createElement(_exampleBarchartJsx2['default'], null));

React.render(examples, document.body);

},{"./example-barchart.jsx":1,"./example-legend.jsx":2,"react":"react"}]},{},[3]);
