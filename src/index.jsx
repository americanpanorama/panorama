import * as React from 'react';

// import { Legend, Punchcard } from '@panorama/toolkit';
import { Legend, Punchcard } from './main.js';

var legendData = {
	items: [
		'narratives',
		'cotton',
		'sugar'
	],
	initialSelection: 'narratives'
};

React.render(<Legend data={legendData}/>, document.body);
