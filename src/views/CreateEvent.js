import React from "react";
import * as Firebase from '../Firebase';

class CreateEvent extends React.Component {

	state = {
		name: '',
		organisers: '',
		protestors: '',
		protestInfo: ''

	}

	handleCreateEvent = () => {
		if (this.state.name && this.state.organisers && this.state.protestors && this.state.protestInfo) {
			const event = {
				name: this.state.name,
				organisers: this.state.organisers,
				protestors: this.state.protestors,
				protestInfo: this.state.protestInfo
			}
			Firebase.uploadEvent(event);
		}
	}

	render() {
		return (
			<div>
				<h1>Create Event</h1>

				<label>Event Name:</label>
				<br/>
				<input id="name" type="text" onChange={(name) => this.setState({name: name.target.value})}/>

				<br/><br/>
				
				<label>Number of Organisers:</label>
				<br/>
				<input id="organisers" type="number" onChange={(organisers) => this.setState({organisers: organisers.target.value})}/>

				<br/><br/>

				<label>Number of Protestors:</label>
				<br/>
				<input id="protestors" type="number" onChange={(protestors) => this.setState({protestors: protestors.target.value})}/>

				<br/><br/>

				<label>Protest Info</label>
				<br/>
				<textarea id="protestInfo" type="text" onChange={(protestInfo) => this.setState({protestInfo: protestInfo.target.value})}/>
				
				<br/><br/>

				<button onClick={this.handleCreateEvent}>Create</button>
			</div>
		);
	}
}

export default CreateEvent;