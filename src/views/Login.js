import React from "react";
import * as Firebase from '../Firebase';

class Login extends React.Component {

	state = {
		email: 'hueyyapp@gmail.com',
		password: 'Testing1123',
		loginText: 'Login',
		loginStyle: 'menuButtonLogin',
		loginFieldStyle: 'loginTextFields',
		emailHidden: true
	}

	handleSubmit = async () => {
		if (this.state.email && this.state.password) {
			// Firebase.signIn(this.state.email, this.state.password);
			Firebase.checkAdmin(this.state.email).then( async(result) => {
				if (result === true) {
					await Firebase.signIn(this.state.email, this.state.password);
					//INSERT STATECHANGE HERE
					this.setState({loginText: 'Log Out', loginStyle: 'menuButtonLogout', loginFieldStyle: 'logoutTextFields', emailHidden: false})
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
				
				<input class={this.state.loginFieldStyle} id="email" type="email" placeholder="Email" value={this.state.email} onChange={(email) => this.setState({email: email.target.value})}/>
				
				<input class={this.state.loginFieldStyle} id="password" type="password" value={this.state.password} placeholder="Password" onChange={(password) => this.setState({password: password.target.value})}/>

				<text hidden={this.state.emailHidden} class='emailText'>Logged in as {'\n'} <text class = 'emailAddressText'>{this.state.email}</text></text> 

				<button class={this.state.loginStyle}  onClick={this.handleSubmit}>{this.state.loginText}</button>
			</div>
		);
	}
}

export default Login;