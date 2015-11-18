import React, { PropTypes } from 'react';
require('./style.scss');

export default class Legend extends React.Component {

  static propTypes = {
    initialSelection: PropTypes.string,
    items: PropTypes.array.isRequired
  }

  static defaultProps = {
    initialSelection: '',
    items: []
  }

  constructor (props) {

    super(props);
    this.state = {
      selectedItem: this.props.initialSelection
    };

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

    // Store the selected item for use in render().
    this.setState({ selectedItem: event.currentTarget.dataset.item });

    // TODO WEDS:
    // Set up AppActionCreator for panorama components
    // that components can call directly, and consumers can listen to.

    // reminder:
    // panorama-template is now `npm link`ed to this local repo,
    // so will pick up changes from running `npm run build:dist` here.

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
              className = { 'item' + (this.state.selectedItem === item ? ' selected' : '') }
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
