import React, { PropTypes } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';
import './style.scss';

export default class Punchcard extends React.Component {

  // property validation
  static propTypes = {
    header: PropTypes.object,
    categories: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired
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
    items: []
  };

  constructor (props) {

    super(props);

    // set up initial state (instead of ES5-style getInitialState)
    // this.state =

    // bind handlers to this component instance,
    // since React no longer does this automatically when using ES6
    // this.onThingClicked = this.onThingClicked.bind(this);

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
      d3Punchcard.update(this.refs.content, this.props.categories, this.props.items);
    } else {
      this.refs.placeholder.style.display = '';
    }

  }

  renderHeader () {

    return (
      <div className='header' ref='header'>
        <h2>{ this.props.header.title ? this.props.header.title.toUpperCase() : '' }</h2>
        <h3><span className='subtitle'>{ this.props.header.subtitle }</span><span className='caption'>{ this.props.header.caption } total tonnage</span></h3>
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
  ROW_HEIGHT: 20,
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
  update: function (node, categories, items) {

    let scope = this,

      // scale by normalizedValue of all items
      rScale = d3.scale.sqrt()
      .range([2, 8])
      .domain([1, d3.max(items, (d) => d.normalizedValue)]),

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
      .style('fill', (d) => colorScale(d.aggregateNormalizedValue));

    // <g> for each commodity within each category
    let commodityNodes = categoryNodes.selectAll('g')
      .data((d) => d.commodities)
      .enter().append('g')
      .attr('transform', (d, i) => `translate(${ 0.5 * scope.ROW_HEIGHT }, ${ (i+0.5) * scope.ROW_HEIGHT })`);

    // <circle> displaying scaled amount of each commodity
    commodityNodes.append('circle')
      .attr('r', (d) => rScale(d.normalizedValue));

    // <text> displaying name of each commodity
    commodityNodes.append('text')
      .text((d) => d.name)
      .attr('x', 2 * scope.ROW_HEIGHT)
      .attr('y', scope.COMMODITY_TEXT_OFFSET_Y);

  },

  /**
   * Any necessary cleanup for d3 component goes here.
   *
   * @param  {Node}    HTMLElement to which d3 was attached
   */
  destroy: function (node) {

    d3.select(node).html('');

  }

};
