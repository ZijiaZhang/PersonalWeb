import * as reactDOM from "react-dom"
import React from "react";
import {App} from "./frontend/App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIbJC9BQFBxBfBlOMaQEgyVbPioAZ1uEc",
    authDomain: "gary-s-home.firebaseapp.com",
    projectId: "gary-s-home",
    storageBucket: "gary-s-home.appspot.com",
    messagingSenderId: "246530057193",
    appId: "1:246530057193:web:18f9823c02cb134ce22178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

reactDOM.render(<App/>, document.getElementById("root"));
