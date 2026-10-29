// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdJ7MOd1FYuQT2dZyFupjQt7LP4NhxQ1A",
  authDomain: "netflixgpt-a34c8.firebaseapp.com",
  projectId: "netflixgpt-a34c8",
  storageBucket: "netflixgpt-a34c8.firebasestorage.app",
  messagingSenderId: "677627243185",
  appId: "1:677627243185:web:84ee9b15239b56ee565090",
  measurementId: "G-2VMWH69WBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();