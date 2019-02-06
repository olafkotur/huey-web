import React from "react";
import * as Firebase from '../Firebase';

class Login extends React.Component {

	state = {
		email: 'hueyyapp@gmail.com',
		password: 'Testing1123'
	}

	handleSubmit = async () => {
		if (this.state.email && this.state.password) {
			// Firebase.signIn(this.state.email, this.state.password);
			Firebase.checkAdmin(this.state.email).then((result) => {
				if (result === true) {
					Firebase.signIn(this.state.email, this.state.password);
					alert('Logged in as: ' + this.state.email);
				}
				else {
					alert('This user does not have admin access.');
				}
			});
		}
	}

	render() {
		return (
			<div>
				
				<input id="email" type="text" placeholder="Email" value={this.state.email} onChange={(email) => this.setState({email: email.target.value})}/>

				
				<input id="password" type="password" placeholder="Password" value={this.state.password} onChange={(password) => this.setState({password: password.target.value})}/>

				<br/><br/>

				<button onClick={this.handleSubmit}>Login</button>
			</div>
		);
	}
}

export default Login;