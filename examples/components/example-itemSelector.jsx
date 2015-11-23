import * as React from 'react';
import { ItemSelector } from '../../src/main';
import itemSelectorData from '../data/itemSelector.json';

export default class ItemSelectorExample extends React.Component {

  static propTypes = {
    selected: React.PropTypes.object
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

    let data = {
      title: 'Select an item:',
      items: itemSelectorData
    };

    data.selectedItem = this.state.selectedItem || data.items[21];

    return (
      <div style={ { height: '200px' } }>
        <ItemSelector { ...data } onItemSelected={ this.onItemSelected }/>
      </div>
    );

  }

}
