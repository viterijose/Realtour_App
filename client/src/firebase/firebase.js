import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkwzyxf889skujemDXOG0z104OHW3uObw",
    authDomain: "realtour-d50af.firebaseapp.com",
    databaseURL: "https://realtour-d50af.firebaseio.com",
    projectId: "realtour-d50af",
    storageBucket: "realtour-d50af.appspot.com",
    messagingSenderId: "614759355965"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth, };
