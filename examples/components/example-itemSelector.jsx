import * as React from 'react';
import { ItemSelector } from '../../src/main';
import itemSelectorData from '../data/itemSelector.json';

export default class ItemSelectorExample extends React.Component {

  static propTypes = {
    selected: React.PropTypes.object
  }

  constructor (props) {

    super(props);

  }

  render () {

    let data = {
      title: 'Select a canal:',
      items: itemSelectorData
    };

    data.selectedItem = this.props.selected || data.items[21];

    return (
      <div style={ { height: '200px' } }>
        <ItemSelector { ...data }/>
      </div>
    );

  }

}
