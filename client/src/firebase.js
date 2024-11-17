
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thereal-realestate.firebaseapp.com",
  projectId: "thereal-realestate",
  storageBucket: "thereal-realestate.firebasestorage.app",
  messagingSenderId: "792262161983",
  appId: "1:792262161983:web:6c720b6b3753bbd6cb2a8a",
  measurementId: "G-97MFTVK9T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Named export
