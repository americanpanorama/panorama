import * as React from 'react';

import { Legend } from '../../src/main';

export default class LegendExample extends React.Component {

  static propTypes = {
    selected: React.PropTypes.string
  }

  constructor (props) {

    super(props);

  }

  render () {

    let legendData = {
      items: [
        'narratives',
        'cotton',
        'sugar'
      ],
      selectedItem: this.props.selected || 'narratives'
    };

    return (
      <Legend { ...legendData }/>
    );

  }

}
