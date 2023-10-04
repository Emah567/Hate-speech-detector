// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNQbGmXZI2Ufzbe_7LoY3YZr0g1cBdRY8",
  authDomain: "hatespeechdetectionchecker.firebaseapp.com",
  projectId: "hatespeechdetectionchecker",
  storageBucket: "hatespeechdetectionchecker.appspot.com",
  messagingSenderId: "103271011572",
  appId: "1:103271011572:web:12aeac3493de963b283aa1",
  measurementId: "G-3FWXM6ZNG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);