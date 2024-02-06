// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-70e7d.firebaseapp.com",
  projectId: "mern-blog-70e7d",
  storageBucket: "mern-blog-70e7d.appspot.com",
  messagingSenderId: "981527125526",
  appId: "1:981527125526:web:0334489403ff449cf69f37",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
