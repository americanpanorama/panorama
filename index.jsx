import * as React from 'react';

import LegendExample from './example-legend.jsx';
import BarchartExample from './example-barchart.jsx';
import CholoplethExample from './example-cholopleth.jsx';

const examples = (
	<div>
		<h1>Panorama Toolkit examples</h1>
		<h2>Legend</h2>
		<LegendExample />
    <h2>Barchart</h2>
    <BarchartExample />
    <h2>Cholopleth</h2>
    <CholoplethExample />
	</div>
);

React.render(examples, document.body);
