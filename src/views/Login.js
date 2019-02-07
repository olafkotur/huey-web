import React from "react";
import * as Firebase from '../Firebase';

class Login extends React.Component {

	state = {
		email: 'hueyyapp@gmail.com',
		password: 'Testing1123',
		loginText: 'Login',
		loginStyle: 'menuButtonLogin',
		emailHidden: true,
		loginHidden: false
	}

	handleSubmit = async () => {
		if (this.state.email && this.state.password) {
			// Check if user is an admin
			Firebase.checkAdmin(this.state.email).then( async(result) => {
				// Log user in if admin
				if (result === true && this.state.loginText === 'Login') {
					await Firebase.signIn(this.state.email, this.state.password);
					this.setState({loginText: 'Log Out', loginStyle: 'menuButtonLogout', emailHidden: false, loginHidden: true})
				}
				else if (this.state.loginText === 'Log Out') {
					localStorage.setItem('loggedIn', false);
					this.setState({loginText: 'Login', loginStyle: 'menuButtonLogin', emailHidden: true, loginHidden: false})
					window.location.reload();
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
				
				<input hidden={this.state.loginHidden} class='loginTextFields' id="email" type="email" placeholder="Email" value={this.state.email} onChange={(email) => this.setState({email: email.target.value})}/>
				
				<input hidden={this.state.loginHidden} class='loginTextFields' id="password" type="password" value={this.state.password} placeholder="Password" onChange={(password) => this.setState({password: password.target.value})}/>

				<text hidden={this.state.emailHidden} class='emailText'>Logged in as {'\n'} <text class = 'emailAddressText'>{this.state.email}</text></text> 

				<button class={this.state.loginStyle}  onClick={this.handleSubmit}>{this.state.loginText}</button>
			</div>
		);
	}
}

export default Login;