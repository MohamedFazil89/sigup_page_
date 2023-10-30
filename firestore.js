import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD2NSCFQGPzcPguG-ZcgESJo1KvwSUGWsc",
  authDomain: "sigin-d13d1.firebaseapp.com",
  databaseURL: "https://sigin-d13d1-default-rtdb.firebaseio.com/",
  projectId: "sigin-d13d1",
  storageBucket: "sigin-d13d1.appspot.com",
  messagingSenderId: "1061138775748",
  appId: "1:1061138775748:web:f6607715fa1056f79d5391",
  measurementId: "G-Z383TC8PM9"
};

  
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
} 

const db = getDatabase();

export{db}

