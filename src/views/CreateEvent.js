import React from "react";
import * as Firebase from '../Firebase';

class CreateEvent extends React.Component {

	state = {
		name: '',
		organisers: '',
		protestors: '',

	}

	handleCreateEvent = () => {
		if (this.state.name && this.state.organisers && this.state.protestors) {
			const event = {
				name: this.state.name,
				organisers: this.state.organisers,
				protestors: this.state.protestors
			}
			Firebase.uploadEvent(event);
		}
	}

	render() {
		return (
			<div>
				<title>Huey Admin</title>
				<h1>Create Event</h1>

				<label>Event Name:</label>
				<br/>
				<input id="name" type="text" onChange={(name) => this.setState({name: name.target.value})}/>

				<br/><br/>
				
				<label>Number of Organisers:</label>
				<br/>
				<input id="organisers" type="text" onChange={(organisers) => this.setState({organisers: organisers.target.value})}/>

				<br/><br/>

				<label>Number of Protestors:</label>
				<br/>
				<input id="protestors" type="text" onChange={(protestors) => this.setState({protestors: protestors.target.value})}/>

				<br/><br/>

				<button onClick={this.handleCreateEvent}>Create</button>
			</div>
		);
	}
}

export default CreateEvent;