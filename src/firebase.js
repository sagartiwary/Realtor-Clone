// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfqh_l6Wh-cFMZHMIoOG9Qm9_zpWlZ1-U",
  authDomain: "realtor-clone-react-4078d.firebaseapp.com",
  projectId: "realtor-clone-react-4078d",
  storageBucket: "realtor-clone-react-4078d.appspot.com",
  messagingSenderId: "1050954396004",
  appId: "1:1050954396004:web:9a86624d2bbde0efa88a71",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
