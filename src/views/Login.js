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
				
				<input class='loginTextFields' id="email" type="email" placeholder="Email" value={this.state.email} onChange={(email) => this.setState({email: email.target.value})}/>
				
				<input class='loginTextFields' id="password" type="password" value={this.state.password} placeholder="Password" onChange={(password) => this.setState({password: password.target.value})}/>

				<button class='menuButtonLogin' onClick={this.handleSubmit}>Login</button>
			</div>
		);
	}
}

export default Login;