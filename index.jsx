import * as React from 'react';

import LegendExample from './components/example-legend.jsx';
import BarchartExample from './components/example-barchart.jsx';
import CholoplethExample from './components/example-cholopleth.jsx';
import PunchcardExample from './components/example-punchcard.jsx';

const examples = (
	<div>
		<h1>Panorama Toolkit examples</h1>
		<h2>Legend</h2>
		<LegendExample />
		<h2>Barchart</h2>
		<BarchartExample />
		<h2>Cholopleth</h2>
		<CholoplethExample />
		<h2>Punchcard</h2>
		<PunchcardExample />
	</div>
);

React.render(examples, document.body);
