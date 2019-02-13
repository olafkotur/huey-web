import React from "react";
import * as Firebase from '../Firebase';

class CreateEvent extends React.Component {

	state = {
		name: '',
		organisers: '',
		protestors: '',
		protestInfo: ''

	}

	handleCreateEvent = async () => {
		if (this.state.name && this.state.organisers && this.state.protestors && this.state.protestInfo) {
			const event = {
				name: this.state.name,
				organisers: this.state.organisers,
				protestors: this.state.protestors,
				protestInfo: this.state.protestInfo
			}

			await Firebase.uploadEvent(event)

			this.setState({
				name: '',
				organisers: '',
				protestors: '',
				protestInfo: ''
			})

		}
	}

	render() {
		return (
			<div class="events-big-div">
				<h1 class="create-event-header-text">Create Event</h1>

				<hr class="create-event-rule"/>

				<div class="create-event-form">
					<label class="form-labels">Event Name:</label>
					<br/>
					<input class="form-text-field" id="name" type="text" value={this.state.name} onChange={(name) => this.setState({name: name.target.value})}/>

					<br/><br/>
					
					<label class="form-labels">Number of Organisers:</label>
					<br/>
					<input class="form-text-field" id="organisers" type="number" value={this.state.organisers} onChange={(organisers) => this.setState({organisers: organisers.target.value})}/>

					<br/><br/>

					<label class="form-labels">Number of Protestors:</label>
					<br/>
					<input class="form-text-field" id="protestors" type="number" value={this.state.protestors} onChange={(protestors) => this.setState({protestors: protestors.target.value})}/>

					<br/><br/>

					<label class="form-labels">Protest Info:</label>
					<br/>
					<textarea class="form-textarea" id="protestInfo" type="text" value={this.state.protestInfo} onChange={(protestInfo) => this.setState({protestInfo: protestInfo.target.value})}/>
					
					<br/><br/>

					<button class="form-button" onClick={this.handleCreateEvent}>Create</button>
				</div>
			</div>
		);
	}
}

export default CreateEvent;