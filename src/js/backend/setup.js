// do set up and initialisation
// use import.meta.env.VARIABLE_NAME to access env variables (Vite-specific)
// someValue = import.meta.env.VITE_SOME_VALUE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADHWSiknVsJJpQ6QeeGH0UQxotj2Fuaug",
  authDomain: "baastest-73939.firebaseapp.com",
  projectId: "baastest-73939",
  storageBucket: "baastest-73939.appspot.com",
  messagingSenderId: "483031653274",
  appId: "1:483031653274:web:0abff28087810f4799b823",
  measurementId: "G-2VGCB8VJJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
