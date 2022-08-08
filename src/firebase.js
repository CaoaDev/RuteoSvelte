// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZuuB9iaWghToJASxgvF6C8eDkbDMbJKA",
  authDomain: "route-svelte.firebaseapp.com",
  projectId: "route-svelte",
  storageBucket: "route-svelte.appspot.com",
  messagingSenderId: "710138412421",
  appId: "1:710138412421:web:12d70e7524042c72db98ec",
  measurementId: "G-Z96X9SWDDK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
