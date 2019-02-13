import React from "react";
import * as Firebase from '../Firebase';
import Event from './modules/Event';

class Events extends React.Component {

	state = {
		eventData: {},
	}

	fetchData = () => {
		Firebase.fetchEventData().then(result => this.setState({eventData: result.data}));
	}

	displayEvents = () => {
		const keys = Object.keys(this.state.eventData);
		const data = Object.values(this.state.eventData);
		let result = [];
		
		// Run through each event, create a new event component and add to an array
		data.forEach((event, i) => {
			result.push(
				<Event 
					key = {keys[i]}
					name = {event.name}
					organisers = {event.organisers}
					protestors = {event.protestors}
					protestInfo = {event.protestInfo}>
				</Event>
			);
		});

		return result;
	}

	render() {
		return (
			<div class='events-big-div'>
				<div class="scene-header">
					<h1 class="scene-header-text">MY EVENTS</h1>
					<div class="header-buttons-div">
						<button class="header-buttons" onClick={this.fetchData}>SYNC</button>
					</div>
				</div>
				<div class="event-list-container" onClick={this.switchCardStyles}>
					{this.displayEvents()}
				</div>
			</div>
		);
	}
}

export default Events;