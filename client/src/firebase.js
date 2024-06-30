// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mytales-k27r.firebaseapp.com",
  projectId: "mytales-k27r",
  storageBucket: "mytales-k27r.appspot.com",
  messagingSenderId: "246761549737",
  appId: "1:246761549737:web:50b976d1a27fd7f7d85eb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);