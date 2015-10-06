import * as React from 'react';

export default class Punchcard extends React.Component {

	// property validation
	static propTypes = {

		// title: React.PropTypes.string

	};

	// property defaults (ES7-style React)
	// (instead of ES5-style getDefaultProps)
	static defaultProps = {

		//

	};

	constructor () {

		super();

		// set up initial state (instead of ES5-style getInitialState)
		// this.state =

		// bind handlers to this component instance,
		// since React no longer does this automatically when using ES6
		// this.onThingClicked = this.onThingClicked.bind(this);

	}

	componentWillMount () {

		//

	}

	componentDidMount () {

		// ExampleStore.addChangeListener(this.onChange);

	}

	componentWillUnmount () {

		// ExampleStore.removeChangeListener(this.onChange);

	}

	componentDidUpdate () {

		//

	}

	render () {

		return (
			<div className='categorized-quantities punchcard'>
			</div>
		);

	}

}
