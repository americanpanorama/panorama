import * as React from 'react';

import { Punchcard } from '@panorama/toolkit';

export default class PunchcardExample extends React.Component {

	constructor () {
		super();
	}

	render () {

		// TODO: friday: finish this example,
		// push and link to source in comment for sean,
		// npm version and publish and include in canals.

		let punchcardData = require('../data/punchcard.json');

		return (
			<Punchcard {...punchcardData} />
		);

	}

}
