import d3 from 'd3';
import {tooltipDefaultOptions} from './props';

export default class Tooltip {
  constructor(element, options) {
    this._options = {...tooltipDefaultOptions, ...options};
    this._element = d3.select(element);
    this.closeTimer = null;
  }

  get element() {
    return this._element;
  }

  set element(val) {
    this._element = d3.select(val);
  }

  get options() {
    return this._options;
  }

  set options(obj) {
    this._options = {...this.options, obj};
  }

  get relativeContainer() {
    return this._relativeContainer;
  }

  set relativeContainer(val) {
    this._relativeContainer = (val.node) ? val.node() : val;
  }

  unMount() {
    this._options = {};
    this._element = null;
    this._relativeContainer = null;
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  setPosition(evt) {
    if (!this.isShowing) return;
    const position = this.calcPosition(evt);
    this.element.style('left', (position[0]) + 'px')
      .style('top', (position[1]) + 'px');
  }

  // event normalization from: http://www.jacklmoore.com/notes/mouse-position/
  calcPosition(evt) {
    let {offset, align} = this.options;

    const alignment = align.split(' ');
    const offsetWidth = this.element.node().offsetWidth;
    const offsetHeight = this.element.node().offsetHeight;
    const target = this.relativeContainer || evt.target || evt.srcElement;
    const rect = target.getBoundingClientRect();
    let offsetX = evt.clientX - rect.left;
    let offsetY = evt.clientY - rect.top;

    // vertical
    switch(alignment[0]) {
    case 'top':
      offsetY -= offsetHeight - offset[1];
      break;

    case 'bottom':
    default:
      offsetY -= offset[1];
      break;
    }

    // horizontal
    switch(alignment[1]) {
    case 'center':
      offsetX -= offsetWidth/2 + offset[0];
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

  setContent(item) {
    if (typeof this.options.onSetTooltipContent === 'function') {
      this.options.onSetTooltipContent(this.element, item);
    } else {
      this.element.text('');
    }

    return this;
  }

  show(evt, item) {
    if (this.isShowing) return;
    this.isShowing = true;
    this.element.classed('active', true);
    if (evt) this.setPosition(evt);
    if (item) this.setContent(item);

    return this;
  }

  hide(immediate) {
    if (!this.isShowing) return;

    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }

    this.isShowing = false;

    if (immediate || this.options.closeDelay < 1) {
      this.setActiveToFalse();
    } else {
      this.closeTimer = setTimeout(() => {
        if (!this.isShowing) this.setActiveToFalse();
      }, this.options.closeDelay);
    }

    return this;
  }

  setActiveToFalse() {
    this.closeTimer = null;
    this.element.classed('active', false);
  }

  toString() {
    return 'Tooltip';
  }
}