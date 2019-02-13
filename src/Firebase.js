import * as firebase from 'firebase';

// Initialize Firebase
export const initialize = () => {
	localStorage.setItem('loggedIn', true);
	const config = {
		apiKey: "AIzaSyA23wbAZnIDclHiMqF045vKWXXa1LdU-G0",
	    authDomain: "huey-f5674.firebaseapp.com",
	    databaseURL: "https://huey-f5674.firebaseio.com",
	    projectId: "huey-f5674",
	    storageBucket: "huey-f5674.appspot.com",
	    messagingSenderId: "219928889088"
	};
	firebase.initializeApp(config);
}


// Authenticates user
export const signIn = async (email, password) => {
	await firebase
	.auth()
	.signInWithEmailAndPassword(email, password)
	.then(() => {
		console.log('Logged in as: ' + email);
		localStorage.setItem('loggedIn', true);
	})
	.catch((error) => console.log(error.message));
}

// Checks whether user has admin access
export const checkAdmin = async (email) => {
	const ref = firebase.database().ref('admin/access/');
	let result = false;

	await ref.once('value', snapshot => {
		if (snapshot.val().includes(email)) result = true;
	}).catch(error => console.log(error));

	return result;
}


// Checks whether an admin is logged in
export const isLoggedIn = async () => {
	const user = await firebase.auth().currentUser;
	console.log(user);
	if (user) return true;
	else return false;
}


// Uploads new event data to database
export const uploadEvent = async (event) => {
	const uid = firebase.auth().currentUser.uid;
	const ref = firebase.database().ref('admin/users/' + uid + '/');
	
	await ref.push({
		name: event.name,
		organisers: event.organisers,
		protestors: event.protestors,
		protestInfo: event.protestInfo
	})
	.then(console.log('Uploaded to Database'))
	.catch(error => console.log(error));
}


// Fetches events data
export const fetchEventData = async () => {
	const uid = firebase.auth().currentUser.uid;
	const ref = firebase.database().ref('admin/users/' + uid + '/');
	let result = { data: [], error: null };

	await ref.once('value', snapshot => {
		result.data = snapshot.val();
	}).catch(error => { console.log(error); result.data = error });

	return result;
}











