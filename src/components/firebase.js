import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA27MnSv2nkS3bcBXrrJ09oYMy8L3y4dTk",
  authDomain: "tinder-clone-58ae5.firebaseapp.com",
  projectId: "tinder-clone-58ae5",
  storageBucket: "tinder-clone-58ae5.appspot.com",
  messagingSenderId: "32398347389",
  appId: "1:32398347389:web:2b2d5e11d0f91f04b0b514",
  measurementId: "G-C2LKBFWZPG",
};
const app = initializeApp(firebaseConfig);
