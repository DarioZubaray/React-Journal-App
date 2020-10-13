import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4_wYlBGB5emNxIhGloLSHatY1sd5NVAU",
  authDomain: "my-journal-react-app.firebaseapp.com",
  databaseURL: "https://my-journal-react-app.firebaseio.com",
  projectId: "my-journal-react-app",
  storageBucket: "my-journal-react-app.appspot.com",
  messagingSenderId: "71477005367",
  appId: "1:71477005367:web:0f730eb35c043c18a203b2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}
