import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAYFnklriImQlD-Ha9yK37vRcPldoRsiOA",
  authDomain: "burger-queen-592d4.firebaseapp.com",
  databaseURL: "https://burger-queen-592d4.firebaseio.com",
  projectId: "burger-queen-592d4",
  storageBucket: "burger-queen-592d4.appspot.com",
  messagingSenderId: "253644947255",
  appId: "1:253644947255:web:a1123c834994ffd06664b2",
  measurementId: "G-ZS3Q0JDGZT",
  timestampsInSnapshots: true
};

firebase.initializeApp(firebaseConfig);

 const firestore = firebase.firestore();
 const settings = {/* your settings...*/ timestampsInSnapshots: true};
 firestore.settings(settings);

export default firebase
