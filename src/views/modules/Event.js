import React from "react";

export default class Event extends React.Component {
	render() {
		return (
			<div class="event-container">
				<div class="row-left">
					<h3>{this.props.name}</h3>
					<p>Organisers: {this.props.organisers}</p>
					<p>Protestors: {this.props.protestors}</p>
				</div>
				<div class="row-right">
					<h1>IMAGE</h1>
				</div>
			</div>
		);
	}
}