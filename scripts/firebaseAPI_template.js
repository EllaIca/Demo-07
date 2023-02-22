//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyD-y8ZUQ8FVpFBtvD-Tcdel4bjDJrGroUA",
    authDomain: "comp1800-7f5a9.firebaseapp.com",
    projectId: "comp1800-7f5a9",
    storageBucket: "comp1800-7f5a9.appspot.com",
    messagingSenderId: "538252558452",
    appId: "1:538252558452:web:3ddda2897fe8d0a8e3d121",
    measurementId: "G-FENY8EW1GN"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();