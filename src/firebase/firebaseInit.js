// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM01tjbByLuFv7nZnoer8Tn8e-DGEtHxU",
  authDomain: "donggun-react1.firebaseapp.com",
  projectId: "donggun-react1",
  storageBucket: "donggun-react1.appspot.com",
  messagingSenderId: "636345705199",
  appId: "1:636345705199:web:5be3c0c4f698f512e1311a",
  measurementId: "G-QPQTVK7PZ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);