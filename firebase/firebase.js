// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWt802ZKTZsQiH0v-fLk1CTNbdNRRBcM8",
  authDomain: "crm-reports-94d86.firebaseapp.com",
  databaseURL: "https://crm-reports-94d86-default-rtdb.firebaseio.com",
  projectId: "crm-reports-94d86",
  storageBucket: "crm-reports-94d86.appspot.com",
  messagingSenderId: "510922642037",
  appId: "1:510922642037:web:4fb7fe6654793440c3de3c",
  measurementId: "G-EET9HW7EDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);