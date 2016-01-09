import React, { PropTypes } from 'react';
import * as d3 from 'd3';
import './style.scss';

export default class Punchcard extends React.Component {

  // property validation
  static propTypes = {
    data: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
    loading: PropTypes.bool,
    noDataAvailableMsg: PropTypes.string,
    punchcardOptions: PropTypes.object,
    selectAccessor: PropTypes.func,
    textValueFormatter: PropTypes.func,
    headerMargin: PropTypes.number
  };

  static defaultProps = {
    data: [],
    onItemClick: null,
    loading: true,
    noDataAvailableMsg: 'No commodities data available for this canal in the selected year.',
    radiusExtent: [2, 10],
    textValueFormatter: d => d,
    headerMargin: 0
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {
    this.renderVisualization();
  }

  componentDidUpdate() {
    // Blow away what's there. If we want pretty transitions,
    // remove this and handle transitions in d3Punchcard.
    d3Punchcard.destroy(this.refs.content);

    this.renderVisualization();
  }

  componentWillUnmount() {
    d3Punchcard.destroy(this.refs.content);
  }

  render() {
    return (
      <div className='panorama punchcard'>
        { this.renderPlaceholder() }
        <div className='content' ref='content' style={ { marginTop: this.props.headerMargin + 'px' } }></div>
      </div>
    );
  }

  renderVisualization() {
    if (!this.isEmpty(this.props.data) && this.refs.content) {
      d3Punchcard.update(this.refs.content, {...this.props});
    }
  }

  renderPlaceholder() {
    let {loading, noDataAvailableMsg} = this.props;

    // TODO: provide links to years with data, if they exist for this canal.
    if (loading) {
      return (
        <div className='placeholder' ref='placeholder'>
          <h4>Loading...</h4>
        </div>
      );
    }else if (!this.props.loading && this.isEmpty(this.props.data)) {
      return (
        <div className='placeholder' ref='placeholder'>
          <h4>{noDataAvailableMsg}</h4>
        </div>
      );
    } else {
      return null;
    }
  }

  isEmpty(val) {
    return val.length < 1;
  }
}


const d3Punchcard = {

  _setTextValueFormatter: d => d,
  setTextValueFormatter: function(fn) {
    this._setTextValueFormatter = fn;
  },

  // layout constants
  ROW_HEIGHT: 25,
  COMMODITY_TEXT_OFFSET_Y: 5,

  /**
   * Logic for updating d3 component with new data.
   *
   * @param  {Node}    HTMLElement to which d3 will attach
   * @param  {Object}  Categorized map of items (TODO: document expected format)
   * @param  {Object}  Flat map of items (TODO: document expected format)
   */
  update: function (node, props) {
    let {colorScale, valueAccessor, onItemClick, textValueFormatter, selected, selectAccessor} = props;

    if (typeof textValueFormatter === 'function') this.setTextValueFormatter(textValueFormatter);

    const MAX_RAD = props.radiusExtent[1];
    const scope = this;

      // scale by normalizedValue of all items
    const rScale = d3.scale.sqrt()
      .range(props.radiusExtent)
      .domain([1, props.radiusMaxValue]);

    const rScaleDomain = rScale.domain();
    const rDomainMid = rScaleDomain[0] + Math.sqrt(0.25) * (rScaleDomain[1] - rScaleDomain[0]);

    // <div> for each category
    let categoryNodes = d3.select(node)
      .selectAll('div')
      .data(props.data)
      .enter().append('div')
      .attr('style', (d) => `color: ${ colorScale(props.colorAccessor(d)) };`)
      .attr('class', 'category');

    // each with a heading...
    categoryNodes
      .append('h4')
      .text((d) => d.name);

    // ...and an <svg>
    categoryNodes = categoryNodes
      .append('svg')
      .attr('height', (d) => d.commodities.length * scope.ROW_HEIGHT)
      .style('stroke', (d) => colorScale(props.colorAccessor(d)))
      .style('fill', (d) => colorScale(props.colorAccessor(d)));

    // width of each category svg, minus padding for scrollbar,
    // with cross-browser support.
    this.categoryNodeWidth = (categoryNodes.node().offsetWidth || categoryNodes.node().getBoundingClientRect().width) - 2.5 * this.ROW_HEIGHT;

    // <g> for each item within each category
    let itemNodes = categoryNodes.selectAll('g')
      .data((d) => d.commodities)
      .enter().append('g');

    itemNodes
      .classed('selected', (d) => {
        return (selectAccessor(d) === selected);
      });

    // <circle> displaying scaled amount of each item
    itemNodes.append('circle')
      .attr('r', (d) => {
        const v = valueAccessor(d);
        return v ? rScale(v) : rDomainMid;
      })
      // render differently if normalizedValue is invalid
      .style('fill', (d) => valueAccessor(d) ? null : 'none')
      .style('stroke', (d) => valueAccessor(d) ? 'none' : null)
      .style('stroke-width', (d) => valueAccessor(d) ? null : 2);

    // <text> displaying name of each item
    itemNodes.append('text')
      .text((d) => d.name)
      .style('stroke', 'none')
      .attr('x', 2 * scope.ROW_HEIGHT)
      .attr('y', scope.COMMODITY_TEXT_OFFSET_Y)
      .call(this.wrap, this.categoryNodeWidth);

    // adjust dimensions to account for text wrapping
    let numLineWraps;
    categoryNodes.each(function (d0, i0) {
      d3.select(this).selectAll('g').each(function (d1, i1) {
        if (!i1) { numLineWraps = 0; }

        let g = d3.select(this);
        g.attr('transform', `translate(${ 0.5 * scope.ROW_HEIGHT }, ${ (i1+0.5 + numLineWraps) * scope.ROW_HEIGHT })`);

        // Increment number of linewraps within this <g>
        numLineWraps += (g.selectAll('tspan').size() - 1);
      });

      // Increase height of <svg> accordingly
      let svg = d3.select(this);
      svg.attr('height', parseFloat(svg.attr('height')) + numLineWraps * scope.ROW_HEIGHT);
    });

    // Create hit areas that do not change size on interaction
    itemNodes.append('rect')
      .attr('x', -MAX_RAD)
      .attr('y', -MAX_RAD)
      .attr('width', this.categoryNodeWidth + 2.5 * this.ROW_HEIGHT)
      .attr('height', this.ROW_HEIGHT)
      .on('mouseover', function (d, i) {
        scope.onItemMouseOver(this, d, i);
      })
      .on('mouseout', function (d, i) {
        scope.onItemMouseOut(this, d, i);
      })
      .on('click', (d, i) => {
        if (typeof onItemClick === 'function') {
          onItemClick.call(this, d, i);
        }
      });

  },

  onItemMouseOver: function (target, d, i) {
    let g = d3.select(target.parentNode);

    let text = g.select('text')
      .text((d.prettyValue || this._setTextValueFormatter(d.value)) + (d.units ? (' ' + d.units) : ''))
      .style('font-weight', 400);

  },

  onItemMouseOut: function (target, d, i) {

    let g = d3.select(target.parentNode);

    g.select('text')
      .text(d.name)
      .style('font-weight', null)
      .call(this.wrap, this.categoryNodeWidth);

  },

  /**
   * Any necessary cleanup for d3 component goes here.
   *
   * @param  {Node}    HTMLElement to which d3 was attached
   */
  destroy: function (node) {

    d3.select(node).html('');

  },

  /**
   * Wrap SVG text. Adapted from http://bl.ocks.org/mbostock/7555321
   */
  wrap: function (text, width) {

    text.each(function() {

      let breakChars = ['/', '&'],
        text = d3.select(this),
        textContent = text.text(),
        spanContent;

      breakChars.forEach(char => {
        // Add a space after each break char for the function to use to determine line breaks
        textContent = textContent.replace(char, char + ' ');
      });

      let words = textContent.split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = text.attr('x'),
        y = text.attr('y'),
        dy = parseFloat(text.attr('dy') || 0),
        tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em');

      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(' '));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          spanContent = line.join(' ');
          breakChars.forEach(char => {
            // Remove spaces trailing breakChars that were added above
            spanContent = spanContent.replace(char + ' ', char);
          });
          tspan.text(spanContent);
          line = [word];
          tspan = text.append('tspan').attr('x', x).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
        }
      }
    });

  }

};
