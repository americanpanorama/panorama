import React, { PropTypes } from 'react';

// TODO: either pass this into the component from the host application (add to panorama-template),
// or set up an AppDispatcher shared across all @panorama/toolkit components.
import { AppActions } from '../../utils/AppActionCreator';

// import './style.scss';

export default class ItemSelector extends React.Component {

	static propTypes = {
		initialSelection: PropTypes.string,
		items: PropTypes.object.isRequired
	}

	static defaultProps = {
		initialSelection: '',
		items: {}
	}

	constructor (props) {

		super(props);

		// manually bind event handlers,
		// since React ES6 doesn't do this automatically
		this.onItemClick = this.onItemClick.bind(this);
		this.onArrowMouseDown = this.onArrowMouseDown.bind(this);
		this.onArrowMouseUp = this.onArrowMouseUp.bind(this);
		this.animateScrollPosition = this.animateScrollPosition.bind(this);

	}

	componentWillMount () {

		//

	}

	componentDidMount () {

		//

	}

	componentWillUnmount () {

		//

	}

	componentDidUpdate () {

		this.scrollToSelectedItem();

	}

	onItemClick (event) {

		// Defense.
		if (!event.currentTarget || !event.currentTarget.dataset) { return; }

		// TODO: how to abstract this? AppActions for @panorama/toolkit? and set up CommodityStore to listen to it?
		AppActions.canalSelected(event.currentTarget.dataset.item);

	}

	onArrowMouseDown (event) {

		let dir;
		if (event.target.classList.contains('up-arrow')) {
			dir = -1;
		} else if (event.target.classList.contains('down-arrow')) {
			dir = 1;
		}
		if (!dir) { return; }

		let itemList = this.refs['item-list'],
			nextAccelCounter = 16,
			accelCounter = 0,
			itemEl = itemList.querySelector('li'),
			itemMetrics = window.getComputedStyle(itemEl),
			speed = itemEl.offsetHeight + (itemMetrics ? parseFloat(itemMetrics['margin-bottom'].replace('px', '')) : 0);

		this.arrowMouseUp = false;

		let onArrowMouseHold = function () {
			if (accelCounter-- <= 1) {
				this.scrollToPosition(itemList.scrollTop + dir * speed);
				accelCounter = nextAccelCounter = Math.max(1, Math.floor(nextAccelCounter * 0.75));
			}
			
			if (!this.arrowMouseUp) {
				window.requestAnimationFrame(onArrowMouseHold);
			}
		}.bind(this);

		window.requestAnimationFrame(onArrowMouseHold);

	}

	onArrowMouseUp (event) {

		this.arrowMouseUp = true;
		
	}

	scrollToPosition (position) {

		if (typeof this.targetScrollPosition === 'undefined') {
			// Not currently animating, so start
			this.targetScrollPosition = position;
			this.animateScrollPosition();
		} else {
			// Already animating; just update target
			this.targetScrollPosition = position;
		}

	}

	scrollToSelectedItem () {

		let itemList = this.refs['item-list'],
			selectedItem = itemList.querySelector('.selected');

		this.scrollToPosition(selectedItem.offsetTop - itemList.offsetHeight + 20);

	}

	animateScrollPosition () {

		let itemList = this.refs['item-list'],
			delta;

		if (typeof this.scrollPosition === 'undefined') {
			this.scrollPosition = itemList.scrollTop;
		}

		delta = this.targetScrollPosition - this.scrollPosition;
		
		if (Math.abs(delta) > 1) {
			this.scrollPosition += 0.25 * delta;
			itemList.scrollTop = this.scrollPosition;	// scrollTop rounds to the nearest int
			window.requestAnimationFrame(this.animateScrollPosition);
		} else {
			itemList.scrollTop = this.targetScrollPosition;
			this.targetScrollPosition = undefined;
			this.scrollPosition = undefined;
		}
	}

	getDefaultState () {

		return {};

	}

	render () {

		return (
			<div className='panorama item-selector'>
				<h3>SELECT A CANAL:</h3>
				<div className='scroll-arrow up-arrow' onMouseDown={ this.onArrowMouseDown } onMouseUp={ this.onArrowMouseUp } />
				<ul ref='item-list'>
					{ Object.keys(this.props.items).map((itemKey, i) => {
						let item = this.props.items[itemKey];
						return (
							<li
								className = { 'item' + (this.props.selectedItem.id === item.id ? ' selected' : '') }
								data-item = { itemKey }
								key = { i }
								onClick = { this.onItemClick }
							>
								<span>{ item.name.toUpperCase() }</span>
							</li>
						);
					}) }
				</ul>
				<div className='scroll-arrow down-arrow' onMouseDown={ this.onArrowMouseDown } onMouseUp={ this.onArrowMouseUp } />
			</div>
		);

	}

}
