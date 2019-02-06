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
		let data = this.state.eventData;;
		let result = [];
		data = Object.values(data);
		
		data.forEach((event) => {
			result.push(<Event name={event.name} organisers={event.organisers} protestors={event.protestors} />);
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