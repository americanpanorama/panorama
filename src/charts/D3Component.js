import d3 from 'd3';

export default class D3Component {
  constructor(props) {
    this._props = props;
    this.root = null;
    this.mounted = false;
    this.axes = [];
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

  willMount() {
    // Not doing anything here, but someone else in the
    // inheritance chain could find it useful
  }

  onMount() {
    if (this.mounted) return;

    this.root = d3.select(this.selector);
    this.svg = this.root.append('svg');

    // add chart to `this.base`
    this.base = this.svg.append('g');

    this.updateDimensions();

    this.axes.forEach(axis => axis.onMount(this.base));

    this.mounted = true;
  }

  onUpdate() {
    if (!mounted) return;

    this.updateDimensions();
    this._render();
  }

  onUnMount() {
    this.axes.forEach(axis => axis.onUnMount());
    this.svg.remove();
    this.root = this.svg = null;
    this.mounted = false;
    this.props = null;
  }

  setAxis(axis) {
    if (axis.toString() !== 'Axis') return;
    this.axes.push(axis);
  }

  _render() {
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