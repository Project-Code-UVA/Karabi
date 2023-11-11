// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhpqqI-b0us4XwzjT-F71i7ow9BxmpnhI",
    authDomain: "karabi-3518d.firebaseapp.com",
    projectId: "karabi-3518d",
    storageBucket: "karabi-3518d.appspot.com",
    messagingSenderId: "693472356204",
    appId: "1:693472356204:web:eb5d99441445151c99b549",
    measurementId: "G-PNTNSM1JMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initalize Firebase Authentication
const auth = getAuth(app);