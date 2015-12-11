import React, { PropTypes } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';
import './style.scss';

export default class Punchcard extends React.Component {

  // property validation
  static propTypes = {
    header: PropTypes.object,
    categories: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
  };

  // property defaults (ES7-style React)
  // (instead of ES5-style getDefaultProps)
  static defaultProps = {
    header: {
      title: '',
      subtitle: '',
      caption: ''
    },
    categories: [],
    items: [],
    onItemClick: null
  };

  constructor (props) {

    super(props);

  }

  componentWillMount () {}

  componentDidMount () {

    this.renderVisualization();
    
  }

  componentDidUpdate () {

    // Blow away what's there. If we want pretty transitions,
    // remove this and handle transitions in d3Punchcard.
    d3Punchcard.destroy(this.refs.content);

    this.renderVisualization();

  }

  componentWillUnmount () {

    d3Punchcard.destroy(this.refs.content);

  }

  render () {

    return (
      <div className='panorama punchcard'>
        { this.renderPlaceholder() }
        { this.renderHeader() }
        <div className='content' ref='content'></div>
      </div>

    );

  }

  renderVisualization () {

    if (!_.isEmpty(this.props.categories)) {
      // cannot remove the node, because React complains
      this.refs.placeholder.style.display = 'none';
      d3Punchcard.update(this.refs.content, this.props.categories, this.props.items, this.props.onItemClick);
    } else {
      this.refs.placeholder.style.display = '';
    }

  }

  renderHeader () {

    return (
      <div className='header' ref='header'>
        <h2>{ this.props.header.title ? this.props.header.title.toUpperCase() : '' }</h2>
        <h3><span className='subtitle'>{ this.props.header.subtitle }</span><span className='caption'>{ this.props.header.caption }</span></h3>
      </div>
    );

  }

  renderPlaceholder () {

    // TODO: provide links to years with data, if they exist for this canal.
    // TODO: make placeholder messages configurable via props
    if (_.isEmpty(this.props.categories)) {
      return (
        <div className='placeholder' ref='placeholder'>
          <h4>No commodities data available for this canal in the selected year.</h4>
        </div>
      );
    } else {
      return (
        <div className='placeholder' ref='placeholder'>
          <h4>Loading...</h4>
        </div>
      );
    }

  }

}


const d3Punchcard = {

  // layout constants
  ROW_HEIGHT: 25,
  COMMODITY_TEXT_OFFSET_Y: 5,

  /**
   * Any necessary setup for d3 component goes here.
   *
   * @param  {Node}    HTMLElement to which d3 will attach
   * @param  {Object}  Categorized map of items (TODO: document expected format)
   * @param  {Object}  Flat map of items (TODO: document expected format)
   */
  create: function (node, categories, items) {

    this.update(node, categories, items);

  },

  /**
   * Logic for updating d3 component with new data.
   *
   * @param  {Node}    HTMLElement to which d3 will attach
   * @param  {Object}  Categorized map of items (TODO: document expected format)
   * @param  {Object}  Flat map of items (TODO: document expected format)
   */
  update: function (node, categories, items, onItemClick) {

    const MAX_RAD = 10;
    let scope = this,

      // scale by normalizedValue of all items
      rScale = d3.scale.sqrt()
      .range([2, MAX_RAD])
      .domain([1, d3.max(items, (d) => d.normalizedValue || 0)]),

      rScaleDomain = rScale.domain(),
      rDomainMid = rScaleDomain[0] + Math.sqrt(0.25) * (rScaleDomain[1] - rScaleDomain[0]),

      // color by aggregateNormalizedValue of all categories
      colorScale = d3.scale.ordinal()
      .range(['rgb(188, 35, 64)', 'rgb(228, 104, 75)', 'rgb(187, 27, 105)', 'rgb(103, 116, 99)', 'rgb(26, 169, 143)', 'rgb(10, 103, 150)', 'rgb(67, 40, 93)', 'rgb(86, 96, 99)'])
      .domain([1, d3.max(categories, (d) => d.aggregateNormalizedValue)]);

    // <div> for each category
    let categoryNodes = d3.select(node)
      .selectAll('div')
      .data(categories)
      .enter().append('div')
      .attr('style', (d) => `color: ${ colorScale(d.aggregateNormalizedValue) };`)
      .attr('class', 'category');

    // each with a heading...
    categoryNodes
      .append('h4')
      .text((d) => d.name);

    // ...and an <svg>
    categoryNodes = categoryNodes
      .append('svg')
      // .attr('width', '50%')
      .attr('height', (d) => d.commodities.length * scope.ROW_HEIGHT)
      .style('stroke', (d) => colorScale(d.aggregateNormalizedValue))
      .style('fill', (d) => colorScale(d.aggregateNormalizedValue));

    // width of each category svg, minus padding for scrollbar
    this.categoryNodeWidth = categoryNodes.node().offsetWidth - 2.5 * this.ROW_HEIGHT;

    // <g> for each item within each category
    let itemNodes = categoryNodes.selectAll('g')
      .data((d) => d.commodities)
      .enter().append('g');

    // <circle> displaying scaled amount of each item
    itemNodes.append('circle')
      .attr('r', (d) => rScale(d.normalizedValue ? d.normalizedValue : rDomainMid))

      // render differently if normalizedValue is invalid
      .style('fill', (d) => d.normalizedValue ? null : 'none')
      .style('stroke', (d) => d.normalizedValue ? 'none' : null)
      .style('stroke-width', (d) => d.normalizedValue ? null : 2);

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
        if (onItemClick) {
          onItemClick.call(this, d, i);
        }
      });

  },

  onItemMouseOver: function (target, d, i) {

    let g = d3.select(target.parentNode);

    let text = g.select('text')
      .text((d.prettyValue || d.value) + (d.units ? (' ' + d.units) : ''))
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
