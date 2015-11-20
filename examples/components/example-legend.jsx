import * as React from 'react';

import { Legend } from '../../src/main';

export default class LegendExample extends React.Component {

  static propTypes = {
    selected: React.PropTypes.string
  }

  constructor (props) {

    super(props);
    this.state = {};
    this.onItemSelected = this.onItemSelected.bind(this);

  }

  onItemSelected (value, index) {
    this.setState({
      selectedItem: value
    });
  }

  render () {

    let legendData = {
      items: [
        'narratives',
        'cotton',
        'sugar'
      ],
      selectedItem: this.state.selectedItem || 'narratives'
    };

    return (
      <Legend { ...legendData } onItemSelected={ this.onItemSelected }/>
    );

  }

}
