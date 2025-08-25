// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7QiaEOvlUhVhZrRcOvxIPzs58mqy_iKQ",
  authDomain: "drillmate-c57bf.firebaseapp.com",
  projectId: "drillmate-c57bf",
  storageBucket: "drillmate-c57bf.firebasestorage.app",
  messagingSenderId: "387030165748",
  appId: "1:387030165748:web:68eb7acf7ebe231a8556a1",
  measurementId: "G-HZ1RT0V8LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);