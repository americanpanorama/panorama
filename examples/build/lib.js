require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],2:[function(require,module,exports){
module.exports = require('cssify');
},{"cssify":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

// flip for Sassify support

require('./style.scss');

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

			return React.createElement(
				'div',
				{ className: 'panorama legend' },
				React.createElement(
					'ul',
					null,
					this.props.data.items.map(function (item) {
						return React.createElement(
							'li',
							{
								className: 'item' + (_this.state.selectedItem === item ? ' selected' : ''),
								'data-item': item,
								key: item,
								onClick: _this.onItemClick,
								onMouseEnter: _this.onItemEnter,
								onMouseLeave: _this.onItemLeave
							},
							React.createElement(
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
})(React.Component);

exports['default'] = Legend;
module.exports = exports['default'];

},{"./style.scss":4,"react":"react"}],4:[function(require,module,exports){
module.exports = require('sassify')('.panorama.legend {   position: absolute; }   .panorama.legend ul {     margin: 0;     padding: 0; }     .panorama.legend ul li {       position: relative;       opacity: 0.5;       margin: 0;       margin-bottom: 0;       cursor: pointer;       list-style-type: none;       background-color: #E9EDEC;       border-radius: 4px;       border: 1px solid #b3b3b3;       border-bottom: 0;       padding: 5px;       padding-left: 22px; }       .panorama.legend ul li:last-child {         border-bottom: 1px solid #b3b3b3; }       .panorama.legend ul li.selected {         opacity: 1.0; }       .panorama.legend ul li span:before {         display: inline-block;         position: absolute;         left: calc(0.5 * 10px);         content: "";         border: solid 1px black;         width: 10px;         height: 10px;         top: calc(50% - 0.5 * 12px); }       .panorama.legend ul li:nth-child(1) span:before {         border-radius: 100%;         background-color: black; }       .panorama.legend ul li:nth-child(2) span:before {         border-color: #92836a;         background-color: rgba(146, 131, 106, 0.7); }       .panorama.legend ul li:nth-child(3) span:before {         border-color: #768a66;         background-color: rgba(118, 138, 102, 0.7); } ');;
},{"sassify":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var React = _interopRequireWildcard(_react);

require('./styles/style.scss');

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

			return React.createElement('div', { className: 'categorized-quantities punchcard' });
		}
	}]);

	return Punchcard;
})(React.Component);

exports['default'] = Punchcard;
module.exports = exports['default'];

},{"./styles/style.scss":6,"react":"react"}],6:[function(require,module,exports){
module.exports = require('sassify')('');;
},{"sassify":2}],"@panorama/toolkit":[function(require,module,exports){
// exports for use of @panorama/toolkit as a node module

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _LegendLegendJsx = require('./Legend/Legend.jsx');

var _LegendLegendJsx2 = _interopRequireDefault(_LegendLegendJsx);

exports.Legend = _LegendLegendJsx2['default'];

var _PunchcardPunchcardJsx = require('./Punchcard/Punchcard.jsx');

var _PunchcardPunchcardJsx2 = _interopRequireDefault(_PunchcardPunchcardJsx);

exports.Punchcard = _PunchcardPunchcardJsx2['default'];

},{"./Legend/Legend.jsx":3,"./Punchcard/Punchcard.jsx":5}]},{},[]);
