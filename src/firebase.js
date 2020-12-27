import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseAPP = firebase.initializeApp({
    apiKey: "AIzaSyCHq_nenN-EncDiejm2bl3ZO9w9isUAAZ0",
    authDomain: "reactjs-contact-form-6c709.firebaseapp.com",
    projectId: "reactjs-contact-form-6c709",
    storageBucket: "reactjs-contact-form-6c709.appspot.com",
    messagingSenderId: "312729044622",
    appId: "1:312729044622:web:1ed9f497593c623d3e2bdf"
  });
  // Initialize Firebase
  

  var db = firebaseAPP.firestore();
  export {db}