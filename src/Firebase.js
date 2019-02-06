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

export const signIn = async (email, password) => {
	await firebase
	.auth()
	.signInWithEmailAndPassword(email, password)
	.then(() => console.log('woop woop'))
	.catch((error) => console.log(error.message));
}

export const checkAdmin = async (email) => {
	const ref = firebase.database().ref('admin/access/');
	let result = false;

	await ref.once('value', snapshot => {
		if (snapshot.val().includes(email)) result = true;
	});

	return result;

}