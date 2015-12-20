import D3Component from '../charts/D3Component';
import d3 from 'd3';

export default class MapChoroplethImpls extends D3Component {

  willMount() {}

  onMount(props) {
    super.onMount(props);

    this._path = d3.geo.path();
    this._projection = d3.geo[this.props.projection]();

    this._render();
    this._selected = null;
    this._hoverElement = null;
  }

  preRender() {
    this.updateProjection();
  }

  render() {
    let {data, styler, interactive, selected, selectedAccessor} = this.props;
    if (!data || !data.features) return;
    const self = this;

    const path = this.base.selectAll('path')
      .data(data.features);

    path.exit().remove();

    path
      .enter()
      .append('path')
      .attr('class', 'geometry')
      .attr('d', this._path);

    path
      .each(function(d) {
        d3.select(this).style(styler(d));
      });


    if (interactive) {
      d3.selectAll('.hover-dupe').remove();
      this._hoverElement = null;
      path
        .on('click', null)
        .on('mouseover', null)
        .on('mouseout', null)
        .on('click', this.dispatch.click)
        .on('mouseenter', function(d) {
          if (selectedAccessor(d) === selected) return;
          self._hoverElement = self.bringToTop(this, 'hover-dupe sel-' + selectedAccessor(d), self.props.hoverStyle || null);
          self.dispatch.mouseOver(d);
        })
        .on('mouseleave', function(d) {
          if (self._hoverElement) self._hoverElement.remove();
          self._hoverElement = null;
          self.dispatch.mouseOut(d);
        });
    }

    if (selected && selected !== this._selected) {
      this._selected = selected;
      d3.selectAll('.selected-dupe').remove();
      path
        .filter((d) => {
          return selectedAccessor(d) === selected;
        })
        .each(function() {
          // clone node then move to top
          self.bringToTop(this, 'selected-dupe');
        });
    }
  }

  postRender() {}

  bringToTop(node, klass, style) {
    const elm = d3.select(node.parentNode.appendChild(node.cloneNode(true), node.nextSibling))
      .classed(klass, true);

    if (style) {
      elm.style(style);
    }

    return elm;
  }

  updateProjection () {
    let {data, mapScale, projection} = this.props;
    let scale = mapScale;
    let translate = [this.width/2, this.height/2];

    if (mapScale === 'auto') {
      [scale, translate] = this.fitMap(data);
    }

    this._projection = d3.geo[projection]()
        .scale(scale)
        .translate(translate);

    this._path.projection(this._projection);
  }

  fitMap (geo) {
    let {projection} = this.props;
    const proj = d3.geo[projection]()
      .scale(1)
      .translate([0, 0]);

    const path = d3.geo.path()
      .projection(proj);

    const b = path.bounds(geo),//[[left,top],[right,bottom]],
      s = .95 / Math.max((b[1][0] - b[0][0]) / this.width, (b[1][1] - b[0][1]) / this.height),
      t = [(this.width - s * (b[1][0] + b[0][0])) / 2, (this.height - s * (b[1][1] + b[0][1])) / 2];

    return [s,t];
  }
}
