import * as firebase from 'firebase';

// Initialize Firebase
export const initialize = () => {
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
	.then(() => console.log('woop woop'))
	.catch((error) => console.log(error.message));
}

// Checks whether user has admin access
export const checkAdmin = async (email) => {
	const ref = firebase.database().ref('admin/access/');
	let result = false;

	await ref.once('value', snapshot => {
		if (snapshot.val().includes(email)) result = true;
	});

	return result;
}


// Uploads new event data to database
export const uploadEvent = async (event) => {
	const uid = firebase.auth().currentUser.uid;
	const ref = firebase.database().ref('admin/users/' + uid + '/');
	
	await ref.push({event})
	.then(console.log('Uploaded to Database'))
	.catch(error => console.log(error));
}