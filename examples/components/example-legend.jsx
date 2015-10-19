import * as React from 'react';

import { Legend } from '@panorama/toolkit';

export default class LegendExample extends React.Component {

	constructor () {
		super();
	}

	render () {

		let legendData = {
			items: [
				'narratives',
				'cotton',
				'sugar'
			],
			initialSelection: 'narratives'
		};

		return (
			<Legend data={ legendData }/>
		);

	}

}
