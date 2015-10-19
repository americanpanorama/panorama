import * as React from 'react';

import { Punchcard } from '@panorama/toolkit';

export default class PunchcardExample extends React.Component {

	constructor () {
		super();
	}

	render () {

		let punchcardData = require('../data/punchcard.json');

		return (
			<Punchcard {...punchcardData} />
		);

	}

}
