import * as React from 'react';

import LegendExample from './components/example-legend.jsx';
import BarchartExample from './components/example-barchart.jsx';
import CholoplethExample from './components/example-cholopleth.jsx';

const examples = (
	<div>
		<h1>Panorama Toolkit examples</h1>
		<h2>Legend</h2>
		<LegendExample />
    <h2>Barchart</h2>
    <BarchartExample />
    <h2>Choropleth</h2>
    <CholoplethExample />
	</div>
);

React.render(examples, document.body);
