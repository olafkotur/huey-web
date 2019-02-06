import React from "react";
import * as Firebase from '../Firebase';

class Login extends React.Component {

	state = {
		email: '',
		password: ''
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
				<label htmlFor='email'>Email:<br/>
					<input id="email" type="text" placeholder="Email" onChange={(email) => this.setState({email: email.target.value})}/>
				</label>

				<br/><br/>

				<label htmlFor='password'>Password:<br/>
					<input id="password" type="text" placeholder="Password" onChange={(password) => this.setState({password: password.target.value})}/>
				</label>

				<br/><br/>

				<button onClick={this.handleSubmit}>Login</button>
			</div>
		);
	}
}

export default Login;