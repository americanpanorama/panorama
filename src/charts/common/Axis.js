import d3 from 'd3';
import {axisMethods} from './props';

export default class Axis {
  constructor(options, scale) {
    this._options = options;
    this.axis = d3.svg.axis().scale(scale);
    this.element = null;
  }

  get options() {
    return this._options;
  }

  set options(val) {
    this._options = val;
  }

  get width() {
    return this._width;
  }

  set width(w) {
    this._width = w;
  }

  get height() {
    return this._height;
  }

  set height(h) {
    this._height = h;
  }

  onMount(base) {
    this.element = base.append('g')
      .attr('class', this.options.className);

    this.setAxisMethods();
    this.axisLabel();
  }

  onUpdate() {}

  onUnMount() {
    if (this.element) this.element.remove();
    this._options = null;
    this.element = null;
    this.axis = null;
  }

  render() {
    this.setPosition();
    this.element.call(this.axis);
    this.renderExtras();
  }

  renderExtras() {
    const text = this.element.selectAll('text');

    if (this.options.attr) {
      text.attr(this.options.attr);
    }

    if (this.options.style) {
      text.style(this.options.style);
    }
  }

  setPosition() {
    const {position} = this.options;

    if (position) {
      switch(position) {
      case 'bottom':
        this.element
          .attr('transform', 'translate(0,' + this.height + ')');
        break;
      case 'right':
        this.element
          .attr('transform', 'translate(' + this.width + ',0)');
      default:
        break;
      }
    }
  }

  setAxisMethods() {
    axisMethods.forEach((method) => {
      if (this.options.hasOwnProperty(method)) {
        this.axis[method](this.options[method]);
      }
    });
  }

  axisLabel() {
    if (this.options.label) {
      const {label} = this.options;
      this.label = this.element.append('text').text(label.text);

      if (label.attr) {
        this.label.attr(label.attr);
      }
      if (label.style) {
        this.label.style(label.style);
      }
    }
  }

  toString() {
    return 'Axis';
  }
}