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
					<img class='qr-code' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png'></img>
				</div>
			</div>
		);
	}
}