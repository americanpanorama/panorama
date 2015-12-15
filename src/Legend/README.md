## Legend

<img src='https://cloud.githubusercontent.com/assets/1127259/11770152/744dafea-a1ac-11e5-8c44-d0e58671461a.png'>

Clickable legend that can be used to label and toggle layers of a visualization.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Legend } from '@panorama/toolkit';

let legendData = {
	items: [
		'narratives',
		'cotton',
		'sugar'
	],
	selectedItem: this.state.selectedItem || 'narratives'
};

ReactDOM.render(<Legend { ...legendData } onItemSelected={ this.onItemSelected }/>, document.body);
```
