import * as React from 'react';
import { Navigation } from '../../src/main';

export default class NavigationExample extends React.Component {

  constructor () {
    super();

    this.state = {
      isOpen: false
    };

    this.trigger = this.trigger.bind(this);
  }

  trigger () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {

    let NavigationData = require('../data/navigation.json');

    return (
      <Navigation  nav_data={ NavigationData } show_menu={ this.state.isOpen } on_hamburger_click={ this.trigger } links={ [ {name: 'Digital Scholarship Lab', url: 'http://dsl.richmond.edu'}, { name: 'University of Richmond', url: 'http://www.richmond.edu' } ] } link_separator=', ' />
    );

  }

}
