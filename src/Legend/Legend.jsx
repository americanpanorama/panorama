import React, { PropTypes } from 'react';
import { PanoramaDispatcher, PanoramaEventTypes } from '../PanoramaDispatcher.js';
require('./style.scss');

export default class Legend extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.string
  }

  static defaultProps = {
    items: [],
    selectedItem: ''
  }

  constructor (props) {

    super(props);

    // manually bind event handlers,
    // since React ES6 doesn't do this automatically
    this.onItemClick = this.onItemClick.bind(this);
    this.onItemEnter = this.onItemEnter.bind(this);
    this.onItemLeave = this.onItemLeave.bind(this);

  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidUpdate () {}

  onItemClick (event) {

    // Defense.
    if (!event.currentTarget || !event.currentTarget.dataset) { return; }

    // Notify any subscribers of item selection
    PanoramaDispatcher.Legend.selected(event.currentTarget.dataset.item, this.props.items.indexOf(event.currentTarget.dataset.item));

  }

  onItemEnter (event) {

    // Any desired mouse enter functionality goes here.
    // console.log("entering:", event.currentTarget.dataset.item);

  }

  onItemLeave (event) {

    // Any desired mouse leave functionality goes here.
    // console.log("leaving:", event.currentTarget.dataset.item);

  }

  render () {

    return (
      <div className='panorama legend'>
        <ul>
        { this.props.items.map(item => {
          return (
            <li
              className = { 'item' + (this.props.selectedItem === item ? ' selected' : '') }
              data-item = { item }
              key = { item }
              onClick = { this.onItemClick }
              onMouseEnter = { this.onItemEnter }
              onMouseLeave = { this.onItemLeave }
            >
              <span>{ this.capitalize(item) }</span>
            </li>
          );
        }) }
        </ul>
      </div>
    );

  }

  capitalize (str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1);

  }

}
