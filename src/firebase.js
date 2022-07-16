import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB5byHKxRm5kTDKzXj99NfuVo1lr_GKXE",
  authDomain: "stackoverflow-clone-41d61.firebaseapp.com",
  projectId: "stackoverflow-clone-41d61",
  storageBucket: "stackoverflow-clone-41d61.appspot.com",
  messagingSenderId: "731041966750",
  appId: "1:731041966750:web:0854b464ac7e6feaa1e98f",
  measurementId: "G-BFRK1P9421",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
export default getFirestore();
