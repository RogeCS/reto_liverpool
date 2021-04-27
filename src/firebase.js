import firebase from "firebase"


var firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDBE39aN1bFsVS185KzttWNcgYCBzQBcG8",
   authDomain: "backendretoliverpool.firebaseapp.com",
   projectId: "backendretoliverpool",
   storageBucket: "backendretoliverpool.appspot.com",
   messagingSenderId: "245586362587",
   appId: "1:245586362587:web:121b046a679ded0bc5ccfe",
   measurementId: "G-247RP89LJ5"
});

var database = firebaseApp.firestore();

export { database };