import React from "react";
import { Link } from "@react-navigation/web";

export default class Event extends React.Component {

	state = {
		name: '',
		organisers: null
	}

	componentDidMount = async () => {
		const data = await JSON.parse(localStorage.getItem('eventData'));
		await this.setState({name: data.name, organisers: data.organisers});
	}

	render() {
		return (
			<div>
				<Link routeName="event-list"><span class="menuButton">Back</span></Link>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}