import React from "react";

export default class Event extends React.Component {
	render() {
		return (
			<div class="event-container">
				<div class="single-event">
					<div class="card-topbar">
						<h3 class="card-title">{this.props.name}</h3>
					</div>
					<div class="qr-div">
						<img class='qr-code' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png' alt="QR"></img>
					</div>
					<div class="event-text-container">
						<p>Organisers: {this.props.organisers}</p>
						<p>Protestors: {this.props.protestors}</p>
						<p>Protest Info: {this.props.protestInfo}</p>
					</div>
				</div>
			</div>
		);
	}
}