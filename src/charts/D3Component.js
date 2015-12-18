import d3 from 'd3';
import Tooltip from './common/Tooltip';

export default class D3Component {
  constructor(props) {
    this._props = props;
    this.root = null;
    this.mounted = false;
    this.axes = [];
    this.tooltip = null;
    this.dispatch = d3.dispatch('mounted', 'updated','mouseOver', 'mouseOut', 'mouseMove', 'click');
  }

  get selector() {
    return this._selector;
  }

  set selector(elm) {
    this._selector = elm;
  }

  get props() {
    return this._props;
  }

  set props(val) {
    this._props = val;
  }

  set tooltipRef(val) {
    this._tooltipRef = val;
  }

  get tooltipRef() {
    return this._tooltipRef;
  }

  /*----------  Lifecycle methods  ----------*/

  willMount() {
    // Not doing anything here, but someone else in the
    // inheritance chain could find it useful
  }

  onMount() {
    if (this.mounted) return;

    this.addEvents();

    this.root = d3.select(this.selector);
    this.svg = this.root.append('svg')
      .classed('interactive', this.props.interactive);

    if (this.props.interactive && this.props.tooltip) {
      this.svg.on('mousemove', this.dispatch.mouseMove);
    }

    // add chart to `this.base`
    this.base = this.svg.append('g');

    this.updateDimensions();

    this.axes.forEach(axis => axis.onMount(this.base));

    if (this.tooltipRef) {
      this.tooltip = new Tooltip(this.tooltipRef, this.props.tooltipOptions || {});
      this.tooltip.relativeContainer = this.svg;
    }

    this.mounted = true;
    this.dispatch.mounted();
  }

  onUpdate() {
    if (!this.mounted) return;

    this.updateDimensions();
    this._render();
    this.dispatch.updated();
  }

  onUnMount() {
    this.axes.forEach(axis => axis.onUnMount());
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
  addEvents() {
    this.dispatch.on('mounted', this.onMountedHandler.bind(this));
    this.dispatch.on('updated', this.onUpdatedHandler.bind(this));
    this.dispatch.on('mouseOver', this.onMouseOverHandler.bind(this));
    this.dispatch.on('mouseOut', this.onMouseOutHandler.bind(this));
    this.dispatch.on('click', this.onClickHandler.bind(this));
    this.dispatch.on('mouseMove', this.onMouseMoveHandler.bind(this));
  }

  removeEvents() {
    this.dispatch.on('mounted', null);
    this.dispatch.on('updated', null);
    this.dispatch.on('mouseOver', null);
    this.dispatch.on('mouseOut', null);
    this.dispatch.on('mouseMove', null);
    this.dispatch.on('click', null);
  }

  onMountedHandler() {
    if (typeof this.props.onMountHandler === 'function') {
      this.props.onMountHandler();
    }
  }

  onUpdatedHandler() {
    if (typeof this.props.onUpdatedHandler === 'function') {
      this.props.onUpdatedHandler();
    }
  }

  onMouseOverHandler(d) {
    if (this.tooltip) {
      this.tooltip.show(d3.event, d);
    }
    if (typeof this.props.onMouseOverHandler === 'function') {
      this.props.onMouseOverHandler(d);
    }
  }

  onMouseOutHandler(d) {
    if (this.tooltip) {
      this.tooltip.hide();
    }
    if (typeof this.props.onMouseOutHandler === 'function') {
      this.props.onMouseOutHandler(d);
    }
  }

  onMouseMoveHandler() {
    if (this.tooltip) {
      this.tooltip.setPosition(d3.event);
    }
  }

  onClickHandler(d) {
    if (typeof this.props.onClickHandler === 'function') {
      this.props.onClickHandler(d);
    }
  }

  setAxis(axis) {
    if (axis.toString() !== 'Axis') return;
    this.axes.push(axis);
  }

  updateAxis(pos, scale, opts) {
    this.axes[pos].update(scale, opts);
  }

  _render() {
    if (!this.props.data) return;

    this.preRender();
    this.axes.forEach(axis => axis.render());
    this.render();
    this.postRender();
  }

  preRender() {}

  render() {
    throw new Error('render function should be implemented');
  }

  postRender() {}

  updateDimensions() {
    let {width, height, margin} = this.props;

    if (this.width === width && this.height === height) return;

    this.width = width - margin.left - margin.right;
    this.height = height - margin.top - margin.bottom;

    this.svg
      .attr('width', width)
      .attr('height', height);

    this.base
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    this.axes.forEach((axis) => {
      axis.width = this.width;
      axis.height = this.height;
    });
  }
}