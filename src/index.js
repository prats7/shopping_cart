import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGAe4XPF0jDCMiNi3t_W9LjnGtES0sjWk",
    authDomain: "cart-9d0c6.firebaseapp.com",
    databaseURL: "https://cart-9d0c6.firebaseio.com",
    projectId: "cart-9d0c6",
    storageBucket: "cart-9d0c6.appspot.com",
    messagingSenderId: "1008047303441",
    appId: "1:1008047303441:web:e302ab8ed5937022fafab0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
