import * as React from 'react';

import { Legend, Punchcard } from '@panorama/toolkit';

export default class LegendExample extends React.Component {

	constructor () {
		super();
	}

	render () {

		var legendData = {
			items: [
				'narratives',
				'cotton',
				'sugar'
			],
			initialSelection: 'narratives'
		};

		return (
			<Legend data={legendData}/>
		);

	}

}