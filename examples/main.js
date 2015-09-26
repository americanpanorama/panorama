(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Legend/Legend.jsx":[function(require,module,exports){
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

var Legend = (function (_React$Component) {
	_inherits(Legend, _React$Component);

	function Legend(props) {
		_classCallCheck(this, Legend);

		_get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).call(this, props);

		this.state = {
			selectedItem: this.props.data.initialSelection || null
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

			return React.createElement('div', { className: 'panorama legend' }, React.createElement('ul', null, this.props.data.items.map(function (item) {
				return React.createElement('li', {
					className: 'item' + (_this.state.selectedItem === item ? ' selected' : ''),
					'data-item': item,
					key: item,
					onClick: _this.onItemClick,
					onMouseEnter: _this.onItemEnter,
					onMouseLeave: _this.onItemLeave
				}, React.createElement('span', null, _this.capitalize(item)));
			})));
		}
	}, {
		key: 'capitalize',
		value: function capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	}]);

	return Legend;
})(React.Component);

exports['default'] = Legend;
module.exports = exports['default'];

},{"react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Legend/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _LegendJsx = require('./Legend.jsx');

var _LegendJsx2 = _interopRequireDefault(_LegendJsx);

exports.Legend = _LegendJsx2['default'];

},{"./Legend.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Legend/Legend.jsx"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Punchcard/Punchcard.jsx":[function(require,module,exports){
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

var Punchcard = (function (_React$Component) {
	_inherits(Punchcard, _React$Component);

	_createClass(Punchcard, null, [{
		key: 'propTypes',

		// property validation
		value: {},

		// property defaults (ES7-style React)
		// (instead of ES5-style getDefaultProps)
		enumerable: true
	}, {
		key: 'defaultProps',

		// title: React.PropTypes.string

		value: {},
		enumerable: true
	}]);

	//

	function Punchcard() {
		_classCallCheck(this, Punchcard);

		_get(Object.getPrototypeOf(Punchcard.prototype), 'constructor', this).call(this);

		// set up initial state (instead of ES5-style getInitialState)
		// this.state =

		// bind handlers to this component instance,
		// since React no longer does this automatically when using ES6
		// this.onThingClicked = this.onThingClicked.bind(this);
	}

	_createClass(Punchcard, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			//

		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			// ExampleStore.addChangeListener(this.onChange);

		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {

			// ExampleStore.removeChangeListener(this.onChange);

		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {

			//

		}
	}, {
		key: 'render',
		value: function render() {

			return React.createElement('div', { className: 'categorized-quantities' });
		}
	}]);

	return Punchcard;
})(React.Component);

exports['default'] = Punchcard;
module.exports = exports['default'];

},{"react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Punchcard/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _PunchcardJsx = require('./Punchcard.jsx');

var _PunchcardJsx2 = _interopRequireDefault(_PunchcardJsx);

exports.Punchcard = _PunchcardJsx2['default'];

},{"./Punchcard.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Punchcard/Punchcard.jsx"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/index.jsx":[function(require,module,exports){
'use strict';

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

// import { Legend, Punchcard } from '@panorama/toolkit';

var _mainJs = require('./main.js');

var legendData = {
	items: ['narratives', 'cotton', 'sugar'],
	initialSelection: 'narratives'
};

React.render(React.createElement(_mainJs.Legend, { data: legendData }), document.body);

},{"./main.js":"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/main.js","react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/main.js":[function(require,module,exports){
// exports for use of panorama as a node module

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _Legend2 = require('./Legend');

var _Legend3 = _interopRequireDefault(_Legend2);

exports.Legend = _Legend3['default'];

var _Punchcard2 = require('./Punchcard');

var _Punchcard3 = _interopRequireDefault(_Punchcard2);

exports.Punchcard = _Punchcard3['default'];

},{"./Legend":"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Legend/index.js","./Punchcard":"/Users/ericsocolofsky/Documents/stamen/git/panorama/src/Punchcard/index.js"}]},{},["/Users/ericsocolofsky/Documents/stamen/git/panorama/src/index.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEvc3JjL0xlZ2VuZC9MZWdlbmQuanN4IiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hL3NyYy9MZWdlbmQvaW5kZXguanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEvc3JjL1B1bmNoY2FyZC9QdW5jaGNhcmQuanN4IiwiL1VzZXJzL2VyaWNzb2NvbG9mc2t5L0RvY3VtZW50cy9zdGFtZW4vZ2l0L3Bhbm9yYW1hL3NyYy9QdW5jaGNhcmQvaW5kZXguanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEvc3JjL2luZGV4LmpzeCIsIi9Vc2Vycy9lcmljc29jb2xvZnNreS9Eb2N1bWVudHMvc3RhbWVuL2dpdC9wYW5vcmFtYS9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDNUMsTUFBSyxFQUFFLElBQUk7Q0FDWCxDQUFDLENBQUM7O0FBRUgsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsVUFBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxPQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFBQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLEFBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQUFBQyxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQUFBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0dBQUU7RUFBRSxBQUFDLE9BQU8sVUFBVSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUFFLE1BQUksVUFBVSxFQUFFLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQUFBQyxJQUFJLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsQUFBQyxPQUFPLFdBQVcsQ0FBQztFQUFFLENBQUM7Q0FBRSxDQUFBLEVBQUcsQ0FBQzs7QUFFdGpCLElBQUksSUFBSSxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQUUsS0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEFBQUMsU0FBUyxFQUFFLE9BQU8sTUFBTSxFQUFFO0FBQUUsTUFBSSxNQUFNLEdBQUcsRUFBRTtNQUFFLFFBQVEsR0FBRyxHQUFHO01BQUUsUUFBUSxHQUFHLEdBQUcsQ0FBQyxBQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxBQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQUFBQyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQUFBQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEFBQUMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQUUsT0FBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxBQUFDLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUFFLFdBQU8sU0FBUyxDQUFDO0lBQUUsTUFBTTtBQUFFLE1BQUUsR0FBRyxNQUFNLENBQUMsQUFBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEFBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxBQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQUFBQyxTQUFTLFNBQVMsQ0FBQztJQUFFO0dBQUUsTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFBRSxVQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7R0FBRSxNQUFNO0FBQUUsT0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxBQUFDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUFFLFdBQU8sU0FBUyxDQUFDO0lBQUUsQUFBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7R0FBRTtFQUFFO0NBQUUsQ0FBQzs7QUFFM3BCLFNBQVMsdUJBQXVCLENBQUMsR0FBRyxFQUFFO0FBQUUsS0FBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtBQUFFLFNBQU8sR0FBRyxDQUFDO0VBQUUsTUFBTTtBQUFFLE1BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxBQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtBQUFFLFFBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQUUsUUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFBRTtHQUFFLEFBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxBQUFDLE9BQU8sTUFBTSxDQUFDO0VBQUU7Q0FBRTs7QUFFaFIsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUFFLEtBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFBLEFBQUMsRUFBRTtBQUFF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LE1BQU0sQ0FBQyxDQUFDLEFBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQUUsV0FBTyxTQUFTLENBQUM7SUFBRSxNQUFNO0FBQUUsTUFBRSxHQUFHLE1BQU0sQ0FBQyxBQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQUFBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEFBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxBQUFDLFNBQVMsU0FBUyxDQUFDO0lBQUU7R0FBRSxNQUFNLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUFFLFVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztHQUFFLE1BQU07QUFBRSxPQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEFBQUMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQUUsV0FBTyxTQUFTLENBQUM7SUFBRSxBQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUFFO0VBQUU7Q0FBRSxDQUFDOztBQUUzcEIsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUU7QUFBRSxLQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQUUsU0FBTyxHQUFHLENBQUM7RUFBRSxNQUFNO0FBQUUsTUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEFBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUUsUUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBRSxRQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFFO0dBQUUsQUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLEFBQUMsT0FBTyxNQUFNLENBQUM7RUFBRTtDQUFFOztBQUVoUixTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQUUsS0FBSSxFQUFFLFFB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QUksT0FBTyxHQUFHLE9BQU8sQ0FQYSxXQUFXLENBQUEsQ0FBQTs7QUFFN0MsSUFBSSxVQUFVLEdBQUc7QUFDaEIsTUFBSyxFQUFFLENBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixPQUFPLENBQ1A7QUFDRCxpQkFBZ0IsRUFBRSxZQUFZO0NBQzlCLENBQUM7O0FBRUYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFBLENBQUEsYUFBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLEVBQUEsRUFBUSxJQUFJLEVBQUUsVUFBVSxFQUFBLENBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0FDWnpELFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUVqRyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBUkgsVUFBVSxDQUFBLENBQUE7O0FBVTdCLElBQUksUUFBUSxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVoRCxPQUFPLENBWkEsTUFBTSxHQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTs7QUFjYixJQUFJLFdBQVcsR0FBRyxPQUFPLENBYkgsYUFBYSxDQUFBLENBQUE7O0FBZW5DLElBQUksV0FBVyxHQUFHLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUV0RCxPQUFPLENBakJBLFNBQVMsR0FBQSxXQUFBLENBQUEsU0FBQSxDQUFBLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdlbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yIChwcm9wcykge1xuXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkSXRlbTogdGhpcy5wcm9wcy5kYXRhLmluaXRpYWxTZWxlY3Rpb24gfHwgbnVsbFxuXHRcdH07XG5cblx0XHQvLyBtYW51YWxseSBiaW5kIGV2ZW50IGhhbmRsZXJzLFxuXHRcdC8vIHNpbmNlIFJlYWN0IEVTNiBkb2Vzbid0IGRvIHRoaXMgYXV0b21hdGljYWxseVxuXHRcdHRoaXMub25JdGVtQ2xpY2sgPSB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkl0ZW1FbnRlciA9IHRoaXMub25JdGVtRW50ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uSXRlbUxlYXZlID0gdGhpcy5vbkl0ZW1MZWF2ZS5iaW5kKHRoaXMpO1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCAoKSB7XG5cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcblxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlICgpIHtcblxuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGV2ZW50KSB7XG5cblx0XHQvLyBEZWZlbnNlLlxuXHRcdGlmICghZXZlbnQuY3VycmVudFRhcmdldCB8fCAhZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0KSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gU3RvcmUgdGhlIHNlbGVjdGVkIGl0ZW0gZm9yIHVzZSBpbiByZW5kZXIoKS5cblx0XHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtOiBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSB9KTtcblxuXHR9XG5cblx0b25JdGVtRW50ZXIgKGV2ZW50KSB7XG5cblx0XHQvLyBBbnkgZGVzaXJlZCBtb3VzZSBlbnRlciBmdW5jdGlvbmFsaXR5IGdvZXMgaGVyZS5cblx0XHQvLyBjb25zb2xlLmxvZyhcImVudGVyaW5nOlwiLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XG5cblx0fVxuXG5cdG9uSXRlbUxlYXZlIChldmVudCkge1xuXG5cdFx0Ly8gQW55IGRlc2lyZWQgbW91c2UgbGVhdmUgZnVuY3Rpb25hbGl0eSBnb2VzIGhlcmUuXG5cdFx0Ly8gY29uc29sZS5sb2coXCJsZWF2aW5nOlwiLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XG5cdFx0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5vcmFtYSBsZWdlbmRcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5kYXRhLml0ZW1zLm1hcChpdGVtID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IHsnaXRlbScgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGl0ZW0gPyAnIHNlbGVjdGVkJyA6ICcnKX1cblx0XHRcdFx0XHRcdFx0ZGF0YS1pdGVtID0ge2l0ZW19XG5cdFx0XHRcdFx0XHRcdGtleSA9IHtpdGVtfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrID0ge3RoaXMub25JdGVtQ2xpY2t9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlciA9IHt0aGlzLm9uSXRlbUVudGVyfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmUgPSB7dGhpcy5vbkl0ZW1MZWF2ZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMuY2FwaXRhbGl6ZShpdGVtKX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblxuXHR9XG5cblx0Y2FwaXRhbGl6ZSAoc3RyKSB7XG5cdFx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fVxuXG59XG4iLCJleHBvcnQgTGVnZW5kIGZyb20gJy4vTGVnZW5kLmpzeCc7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1bmNoY2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Ly8gcHJvcGVydHkgdmFsaWRhdGlvblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXG5cdFx0Ly8gdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcblxuXHR9O1xuXG5cdC8vIHByb3BlcnR5IGRlZmF1bHRzIChFUzctc3R5bGUgUmVhY3QpXG5cdC8vIChpbnN0ZWFkIG9mIEVTNS1zdHlsZSBnZXREZWZhdWx0UHJvcHMpXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cblx0XHQvL1xuXHRcdFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBzZXQgdXAgaW5pdGlhbCBzdGF0ZSAoaW5zdGVhZCBvZiBFUzUtc3R5bGUgZ2V0SW5pdGlhbFN0YXRlKVxuXHRcdC8vIHRoaXMuc3RhdGUgPSBcblxuXHRcdC8vIGJpbmQgaGFuZGxlcnMgdG8gdGhpcyBjb21wb25lbnQgaW5zdGFuY2UsXG5cdFx0Ly8gc2luY2UgUmVhY3Qgbm8gbG9uZ2VyIGRvZXMgdGhpcyBhdXRvbWF0aWNhbGx5IHdoZW4gdXNpbmcgRVM2XG5cdFx0Ly8gdGhpcy5vblRoaW5nQ2xpY2tlZCA9IHRoaXMub25UaGluZ0NsaWNrZWQuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50ICgpIHtcblxuXHRcdC8vXG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuXHRcdC8vIEV4YW1wbGVTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlKTtcblxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXG5cdFx0Ly8gRXhhbXBsZVN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMub25DaGFuZ2UpO1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG5cdFx0Ly9cblxuXHR9XG5cblx0cmVuZGVyICgpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcml6ZWQtcXVhbnRpdGllcyc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdH1cblxufVxuIiwiZXhwb3J0IFB1bmNoY2FyZCBmcm9tICcuL1B1bmNoY2FyZC5qc3gnOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gaW1wb3J0IHsgTGVnZW5kLCBQdW5jaGNhcmQgfSBmcm9tICdAcGFub3JhbWEvdG9vbGtpdCc7XG5pbXBvcnQgeyBMZWdlbmQsIFB1bmNoY2FyZCB9IGZyb20gJy4vbWFpbi5qcyc7XG5cbnZhciBsZWdlbmREYXRhID0ge1xuXHRpdGVtczogW1xuXHRcdCduYXJyYXRpdmVzJyxcblx0XHQnY290dG9uJyxcblx0XHQnc3VnYXInXG5cdF0sXG5cdGluaXRpYWxTZWxlY3Rpb246ICduYXJyYXRpdmVzJ1xufTtcblxuUmVhY3QucmVuZGVyKDxMZWdlbmQgZGF0YT17bGVnZW5kRGF0YX0vPiwgZG9jdW1lbnQuYm9keSk7XG4iLCIvLyBleHBvcnRzIGZvciB1c2Ugb2YgcGFub3JhbWEgYXMgYSBub2RlIG1vZHVsZVxuXG5leHBvcnQgTGVnZW5kIGZyb20gJy4vTGVnZW5kJztcbmV4cG9ydCBQdW5jaGNhcmQgZnJvbSAnLi9QdW5jaGNhcmQnO1xuIl19
