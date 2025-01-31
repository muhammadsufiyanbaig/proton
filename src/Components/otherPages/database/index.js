// import * as firebaseconfig from "firebase";
import firebaseconfig from 'firebase'
var config = {
    apiKey: "AIzaSyBhTiyh9GO0ZhnRvxZOgkn4i0t-G_C60RQ",
    authDomain: "proton-b9593.firebaseapp.com",
    databaseURL: "https://proton-b9593-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "proton-b9593",
    storageBucket: "proton-b9593.appspot.com",
    messagingSenderId: "209357787807",
    appId: "1:209357787807:web:c52002ef78228fc7fbc8aa",
    measurementId: "G-QR16JE31FJ"
  };

var firebase = firebaseconfig.initializeApp(config);
export {firebase as default }