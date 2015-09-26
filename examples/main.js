(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ericsocolofsky/Documents/stamen/git/panorama-legend/src/index.jsx":[function(require,module,exports){
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

var _legendJsx = require('./legend.jsx');

var _legendJsx2 = _interopRequireDefault(_legendJsx);

var legendData = {
	items: ['narratives', 'cotton', 'sugar'],
	initialSelection: 'narratives'
};

React.render(React.createElement(_legendJsx2['default'], { data: legendData }), document.body);

},{"./legend.jsx":"/Users/ericsocolofsky/Documents/stamen/git/panorama-legend/src/legend.jsx","react":"react"}],"/Users/ericsocolofsky/Documents/stamen/git/panorama-legend/src/legend.jsx":[function(require,module,exports){
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

},{"react":"react"}]},{},["/Users/ericsocolofsky/Documents/stamen/git/panorama-legend/src/index.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtbGVnZW5kL3NyYy9pbmRleC5qc3giLCIvVXNlcnMvZXJpY3NvY29sb2Zza3kvRG9jdW1lbnRzL3N0YW1lbi9naXQvcGFub3JhbWEtbGVnZW5kL3NyYy9sZWdlbmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsUUFBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUU7QUFBRSxLQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQUUsU0FBTyxHQUFHLENBQUM7RUFBRSxNQUFNO0FBQUUsTUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEFBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUUsUUFBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFBRSxRQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFFO0dBQUUsQUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLEFBQUMsT0FBTyxNQUFNLENBQUM7RUFBRTtDQUFFOztBQUVoUixJQUFJLE1BQU0sR0FBRyxPQUFPLENBTkcsT0FBTyxDQUFBLENBQUE7O0FBUTlCLElBUlksS0FBSyxHQUFBLHVCQUFBLENBQUEsTUFBQSxDQUFBLENBQUE7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ImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVnZW5kIGZyb20gJy4vbGVnZW5kLmpzeCc7XG5cbnZhciBsZWdlbmREYXRhID0ge1xuXHRpdGVtczogW1xuXHRcdCduYXJyYXRpdmVzJyxcblx0XHQnY290dG9uJyxcblx0XHQnc3VnYXInXG5cdF0sXG5cdGluaXRpYWxTZWxlY3Rpb246ICduYXJyYXRpdmVzJ1xufTtcblxuUmVhY3QucmVuZGVyKDxMZWdlbmQgZGF0YT17bGVnZW5kRGF0YX0vPiwgZG9jdW1lbnQuYm9keSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XG5cblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWRJdGVtOiB0aGlzLnByb3BzLmRhdGEuaW5pdGlhbFNlbGVjdGlvbiB8fCBudWxsXG5cdFx0fTtcblxuXHRcdC8vIG1hbnVhbGx5IGJpbmQgZXZlbnQgaGFuZGxlcnMsXG5cdFx0Ly8gc2luY2UgUmVhY3QgRVM2IGRvZXNuJ3QgZG8gdGhpcyBhdXRvbWF0aWNhbGx5XG5cdFx0dGhpcy5vbkl0ZW1DbGljayA9IHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uSXRlbUVudGVyID0gdGhpcy5vbkl0ZW1FbnRlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25JdGVtTGVhdmUgPSB0aGlzLm9uSXRlbUxlYXZlLmJpbmQodGhpcyk7XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG5cdH1cblxuXHRvbkl0ZW1DbGljayAoZXZlbnQpIHtcblxuXHRcdC8vIERlZmVuc2UuXG5cdFx0aWYgKCFldmVudC5jdXJyZW50VGFyZ2V0IHx8ICFldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBTdG9yZSB0aGUgc2VsZWN0ZWQgaXRlbSBmb3IgdXNlIGluIHJlbmRlcigpLlxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtIH0pO1xuXG5cdH1cblxuXHRvbkl0ZW1FbnRlciAoZXZlbnQpIHtcblxuXHRcdC8vIEFueSBkZXNpcmVkIG1vdXNlIGVudGVyIGZ1bmN0aW9uYWxpdHkgZ29lcyBoZXJlLlxuXHRcdC8vIGNvbnNvbGUubG9nKFwiZW50ZXJpbmc6XCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtKTtcblxuXHR9XG5cblx0b25JdGVtTGVhdmUgKGV2ZW50KSB7XG5cblx0XHQvLyBBbnkgZGVzaXJlZCBtb3VzZSBsZWF2ZSBmdW5jdGlvbmFsaXR5IGdvZXMgaGVyZS5cblx0XHQvLyBjb25zb2xlLmxvZyhcImxlYXZpbmc6XCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtKTtcblx0XHRcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbm9yYW1hIGxlZ2VuZFwiPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmRhdGEuaXRlbXMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0geydpdGVtJyArICh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gaXRlbSA/ICcgc2VsZWN0ZWQnIDogJycpfVxuXHRcdFx0XHRcdFx0XHRkYXRhLWl0ZW0gPSB7aXRlbX1cblx0XHRcdFx0XHRcdFx0a2V5ID0ge2l0ZW19XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2sgPSB7dGhpcy5vbkl0ZW1DbGlja31cblx0XHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyID0ge3RoaXMub25JdGVtRW50ZXJ9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZSA9IHt0aGlzLm9uSXRlbUxlYXZlfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5jYXBpdGFsaXplKGl0ZW0pfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdH1cblxuXHRjYXBpdGFsaXplIChzdHIpIHtcblx0XHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9XG5cbn1cbiJdfQ==
