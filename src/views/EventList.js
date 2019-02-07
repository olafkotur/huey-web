import React from "react";
import * as Firebase from '../Firebase';
import Event from './modules/Event';

class Events extends React.Component {

	state = {
		eventData: {}
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
					protestors = {event.protestors}>
				</Event>
			);
		});

		return result;
	}

	render() {
		return (
			<div>
				<h1>My Events</h1>
				<button class="menuButton" onClick={this.fetchData}>SYNC</button>
				{this.displayEvents()}
			</div>
		);
	}
}

export default Events;