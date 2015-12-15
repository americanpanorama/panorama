## Legend

<img src='https://cloud.githubusercontent.com/assets/1127259/10005832/610e48b0-606e-11e5-91ee-af887393e22d.png'>

Clickable legend that can be used to label and toggle layers of a visualization.


#### Usage
```js
import * as React from 'react';
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
