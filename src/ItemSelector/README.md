## ItemSelector

<img src='https://cloud.githubusercontent.com/assets/1127259/11770143/7432a538-a1ac-11e5-8e89-890621d263ca.png'>

A scrollable list of text items that fires events on selection. Similar to, but more customizable than, an HTML `<select>` element.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ItemSelector } from '@panorama/toolkit';

let items = [
  {
    "id": 1,
    "name": "Albemarle & Cheasapeake"
  },
  {
    "id": 2,
    "name": "Alexandria (and Georgetown) Canal"
  },
  {
    "id": 3,
    "name": "Bald Eagle and Spring Creek Navigation"
  }
];

let itemSelectorConfig = {
  title: 'Select an item:',
  items: items,
  data: items[1],
  onItemSelected: (value, index) => {
    // @panorama/toolkit components strive to be stateless.
    // Therefore, consumers of ItemSelector are expected to
    // pass selection state back into the component.
    this.setState({
      selectedItem: value
    });
  }
};

ReactDOM.render(<ItemSelector {...itemSelectorConfig}/>, document.body);
```
