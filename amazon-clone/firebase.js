// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Dbs8oM1NLs50oEd7kKmJXVfdJ2SlNZ0",
  authDomain: "clone-46ca3.firebaseapp.com",
  projectId: "clone-46ca3",
  storageBucket: "clone-46ca3.appspot.com",
  messagingSenderId: "152593350071",
  appId: "1:152593350071:web:de90f71753e29dc184bc32",
  measurementId: "G-JW6BE8RQE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);