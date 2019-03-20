# Huey Web: React

## Setup
* Make sure to be in your desired directory, note that `yarn` must be pre-installed
* `git clone git@github.com:olafkotur/huey-web.git`
* `yarn add` Do this each time yarn.lock has changed, installs all relevant node_modules
* `yarn start` Starts the local server

## View App
* Navigate to the localhost port number that is specified in terminal output once the system has started, this is usually `3000`, but may be different depending on availability

## Folders and files
* `public/` Local server settings used by expo
* `srcs/` Consists of the view components of the web application
* `node_modules/` Libraries installed using yarn specified in `yarn.lock`
* `.firebaserc` Setup for firebase hosting


## How it works
When the web app is loaded in the first file that is read is `App.js` inside this file we have
declared a number of other components (views) as AppRouter. When we then call the AppNavigator
it simply takes the first component that is loaded. In this case it is the `Home`. 

The first half of the class are the functions these are declared as usual, React uses
JavaScript ES6 hence the function declartion as such: `foobar = () => {}` instead of `foobar() {}`.
For example, we can log a user in using firebase as follows:

```javascript
handleLogin = async () => {
	await firebase
	.auth()
	.signInWithEmailAndPassword(this.state.email, this.state.password)
	.then(() => this.props.navigation.navigate('HomeScreen'))
	.catch(error => this.setState({errorCode: error.code}))
	console.log(this.state.errorCode)
}
```

We are able to sign in using an email and password using states to grab our data. States are
extremely useful as they allow us to hold data and trigger an update in our render at the same
time. For example `this.state.email` we are access the 'email' state in the current class. You 
will see states in every class, they are defined as such: 

```javascript
state = {
	email: 'hueyyapp@gmail.com',
	password: 'Testing1123',

	errorCode: '',
}
```

We can set a state by doing `this.setState({ password: 'helloWorld1123' })`. This will cause
the render function to update accordingly and show the user relevant information on the screen. 

The `render()` function plays an important part in React as it allows us to generate content using HTML. Using a singular `<div>` element in this function allows us to render anything within. It is important to note that React is only expecting one child within the render function. We are able to apply styles using two ways, the first is standard CSS, but with an added benefit of using Javascript objects to pass styles.

```javascript
render() {
	return (
		<div>
      <h1 class="foo">Example of using CSS to style</h1>
      
      <h1 style={styles.bar}>Example of using Javascript Objects to style</h1>
    </div>
    
	);
}
```

