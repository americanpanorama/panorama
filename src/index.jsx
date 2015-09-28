import * as React from 'react';

// Ideally, I can import from @panorama/toolkit.
// With browserify.require({expose}) this builds,
// but imports are still undefined...
import { Legend, Punchcard } from '@panorama/toolkit';

// This is not working -- the imported functions (classes) are undefined.
// (it does build, but fails at runtime.)
// import { Legend, Punchcard } from './main.js';

// import Legend from './Legend';
// import Punchcard from './Punchcard';

console.log(">>>>> imported Legend:", Legend);
console.log(">>>>> imported Punchcard:", Punchcard);

var legendData = {
	items: [
		'narratives',
		'cotton',
		'sugar'
	],
	initialSelection: 'narratives'
};

React.render(<Legend data={legendData}/>, document.body);
