import React from "react";

export default class Event extends React.Component {

	state = {
		eventCardStyle: 'single-event'
	}

	switchCardStyles = () => {
		if (this.state.eventCardStyle === 'single-event') {
			this.setState({eventCardStyle: 'single-event-active'})
			console.log("meme");
		} else {
			this.setState({eventCardStyle:'single-event'})
			console.log("meme");
		}
	}

	render() {
		return (
				<div class={this.state.eventCardStyle} onClick={this.switchCardStyles}>
					<div class="card-topbar">
						<h3 class="card-title">{this.props.name}</h3>
					</div>
					<div class="qr-div">
						<img class='qr-code' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png' alt="QR"></img>
					</div>
					<div class="event-text-container">
						<p class="event-subtitles">Organisers: {this.props.organisers}</p>
						<p class="event-subtitles">Protestors: {this.props.protestors}</p>
						<p class="event-subtitles">Protest Info: </p>
						<p class="event-info-text">{this.props.protestInfo}</p>
					</div>
				</div>
		);
	}
}