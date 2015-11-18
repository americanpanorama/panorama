import React, { PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

// TODO: either pass this into the component from the host application (add to panorama-template),
// or set up an AppDispatcher shared across all @panorama/toolkit components.
import { AppActions } from '../../utils/AppActionCreator';

// import './style.scss';

export default class ChartSlider extends React.Component {

  // property validation
  static propTypes = {
    scale: PropTypes.func,
    orient: PropTypes.string,
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
  };

  // property defaults (ES7-style React)
  // (instead of ES5-style getDefaultProps)
  static defaultProps = {
    scale: d3.scale.linear()
      .clamp(true),
    orient: 'bottom',
    margin: {
      top: 20,
      right: 30,
      bottom: 20,
      left: 30
    },
  };

  constructor (props) {

    super(props);

    // bind handlers to this component instance,
    // since React no longer does this automatically when using ES6
    // this.onThingClicked = this.onThingClicked.bind(this);

  }

  componentWillMount () {

  }

  componentDidMount () {

    d3ChartSlider.create(this.refs.axis, this.props.scale, this.props.orient, this.props.margin);

    // Rerender in order to pass measured width down to child component
    this.forceUpdate();

  }

  componentDidUpdate () {

    d3ChartSlider.update(this.refs.axis, this.props.scale, this.props.orient, this.props.margin, this.props.selectedValue);

  }

  componentWillUnmount () {

    d3ChartSlider.destroy(this.refs.axis);

  }

  render () {

    // Attempt to measure container width, to pass down to child component
    let node;
    try {
      node = ReactDOM.findDOMNode(this);
    } catch (e) {}

    let numChildren = Children.count(this.props.children);
    if (numChildren > 1) {
      console.warn(`ChartSlider is designed to wrap only one child component, but it found ${ numChildren } children.`);
    }

    return (
      <div className='panorama chart-slider'>
        { 
          // Set width/height on the single child component
          React.cloneElement(this.props.children, {
            width: node ? node.offsetWidth : this.props.width,
            height: this.props.height
          })
        }
        <div className='top-rule' style={ {
          marginLeft: this.props.margin.left + "px",
          marginRight: this.props.margin.right + "px",
          width: `calc(100% - ${ this.props.margin.left + this.props.margin.right }px)`
        } } />
        <div className='d3-chart-slider' ref='axis'/>
      </div>

    );

  }

}


const d3ChartSlider = {

  /**
   * Any necessary setup for d3 component goes here.
   *
   * @param  {Node}     HTMLElement to which d3 will attach
   * @param  {Function} d3 scale to use for the axis
   * @param  {String}   orientation of the axis (per d3.axis.orient)
   * @param  {Object}   Object specifying margins around the component
   */
  create: function (node, scale, orient, margin) {

    this.onBrushMoved = this.onBrushMoved.bind(this);

    // TODO: would be nice to not have to maintain this state.
    // It's needed in onBrushMove() (and is updated in update());
    // if d3.event wasn't null in the event handler, could probably use event.target...
    this.node = node;

    const primaryAxisTickSize = 13;
    this.axisPrimary = d3.svg.axis()
      .orient(orient)
      .ticks(5)
      .tickFormat(String)
      .tickSize(primaryAxisTickSize);

    this.axisSecondary = d3.svg.axis()
      .orient(orient)
      .ticks(10)
      .tickFormat(d => '')
      .tickSize(primaryAxisTickSize - 3);

    this.axisTertiary = d3.svg.axis()
      .orient(orient)
      .ticks(40)
      .tickFormat(d => '')
      .tickSize(primaryAxisTickSize - 6);

    this.brush = d3.svg.brush()
      .on('brush', this.onBrushMoved);

    let svg = d3.select(node).append('svg');
    svg.append('g')
      .attr('class', 'axis tertiary');
    svg.append('g')
      .attr('class', 'axis secondary');
    svg.append('g')
      .attr('class', 'axis primary');

    this.handle = svg.append('g')
      .attr('class', 'handle');
    
    let height = node.offsetHeight - margin.bottom + primaryAxisTickSize + 3,   // eyeballing it...
      handleElements = this.handle.append('g')
        .attr('class', 'handle-elements');

    handleElements.append('line')
      .attr({
        'x1': 0,
        'x2': 0,
        'y1': 0,
        'y2': height
      });

    let capSize = 10;
    handleElements.append('path')
      // rounded triangle path, at 100x100; scale down as needed
      .attr('d', 'M 30 0 L 70 0 C 85 0 93.29179606750063 13.416407864998739 86.58359213500125 26.832815729997478 L 63.41640786499873 73.16718427000252 C 56.708203932499366 86.58359213500125 43.29179606750063 86.58359213500125 36.58359213500126 73.16718427000252 L 13.416407864998739 26.832815729997478 C 6.708203932499369 13.416407864998739 15 0 30 0 Z ')
      .attr('transform', 'scale(' + capSize/100 + ') translate(-50, 0)');
    handleElements.append('path')
      // rounded triangle path, at 100x100; scale down as needed
      .attr('d', 'M 30 0 L 70 0 C 85 0 93.29179606750063 13.416407864998739 86.58359213500125 26.832815729997478 L 63.41640786499873 73.16718427000252 C 56.708203932499366 86.58359213500125 43.29179606750063 86.58359213500125 36.58359213500126 73.16718427000252 L 13.416407864998739 26.832815729997478 C 6.708203932499369 13.416407864998739 15 0 30 0 Z ')
      .attr('transform', 'rotate(180) scale(' + capSize/100 + ') translate(-50, ' + -(100/capSize * height) + ')');

    this.update(node, scale, orient, margin);

  },

  /**
   * Logic for updating d3 component with new data.
   *
   * @param  {Node}     HTMLElement to which d3 will attach
   * @param  {Function} d3 scale to use for the axis
   * @param  {String}   orientation of the axis (per d3.axis.orient)
   * @param  {Object}   Object specifying margins around the component
   * @param  {Number}   Scaled location of the slider
   */
  update: function (node, scale, orient, margin, selectedValue) {

    this.node = node;

    // update axis
    scale.range([0, node.offsetWidth - margin.left - margin.right]);
    this.axisPrimary.scale(scale);
    this.axisSecondary.scale(scale);
    this.axisTertiary.scale(scale);
    this.brush.x(scale);

    // apply size and position
    let axisTranform = `translate(${ margin.left }, ${ node.offsetHeight - margin.bottom })`;
    let svg = d3.select(node).select('svg');
    svg
      .attr('width', '100%')
      .attr('height', '100%');

    // draw axes
    svg.select('.axis.primary')
      .call(this.axisPrimary)
      .attr('transform', axisTranform)
    
    // position labels
    .selectAll('text')
      .attr('y', Math.floor(2/3 * margin.bottom));

    // draw secondary and tertiary axes (just smaller ticks)
    svg.select('.axis.secondary')
      .call(this.axisSecondary)
      .attr('transform', axisTranform);

    svg.select('.axis.tertiary')
      .call(this.axisTertiary)
      .attr('transform', axisTranform);

    // draw brush
    // let slider = svg.select('.slider');
    this.handle
      .call(this.brush)
      .attr('transform', `translate(${ margin.left }, 0)`)
    .select('.background')
      .on('mousedown.brush', this.onBrushMoved)
      .on('touchstart.brush', this.onBrushMoved)
    this.handle.selectAll('.background')
      .attr('height', '100%');

    if (typeof selectedValue !== 'undefined') {
      this.onSelectedValueChanged(selectedValue);
    }

  },

  /**
   * Any necessary cleanup for d3 component goes here.
   *
   * @param  {Node}    HTMLElement to which d3 was attached
   */
  destroy: function (node) {

    d3.select(node).html('');

    this.node = null;
    this.axisPrimary = null;
    this.axisSecondary = null;
    this.axisTertiary = null;
    this.brush = null;
    this.handle = null;

  },

  onBrushMoved: function () {

    let scale = this.brush.x(),
      domain = scale.domain(),
      mouseX = d3.mouse(d3.select(this.node).select('.axis')[0][0])[0],   // there's probably a better, more-d3 way to do this...
      value = scale.invert(mouseX);

    // clamp and quantize
    value = Math.round(Math.max(domain[0], Math.min(domain[1], value)));

    // TODO: how to abstract this? AppActions for @panorama/toolkit? and set up CommodityStore to listen to it?
    AppActions.yearSelected(value);

  },

  onSelectedValueChanged: function (value) {

    this.handle
      .call(this.brush.extent([value, value + 2]));
    
    let brushCenter = this.brush.x()(value);
    this.handle.select('.handle-elements')
      .attr('transform', `translate(${ brushCenter }, 0)`);

  }

};
