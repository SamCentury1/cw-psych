// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkh2sPUj79aZRFrGUdM1fELBiN8WIhC5c",
  authDomain: "project-v9-7a6f4.firebaseapp.com",
  projectId: "project-v9-7a6f4",
  storageBucket: "project-v9-7a6f4.appspot.com",
  messagingSenderId: "923100781866",
  appId: "1:923100781866:web:845e98f764e2f90b4cd253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)