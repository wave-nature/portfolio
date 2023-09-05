// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0D-hbFzMSn4AEONjyZ6lperx4o-ftpM",
  authDomain: "gigplaced-elements.firebaseapp.com",
  projectId: "gigplaced-elements",
  storageBucket: "gigplaced-elements.appspot.com",
  messagingSenderId: "529167743978",
  appId: "1:529167743978:web:d8de4a5bf1a511e4a99093",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
