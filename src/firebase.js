import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcIyEe9rg4BbKAeb9zh1D7_38iN_t8z0s",
  authDomain: "food-menu-51c96.firebaseapp.com",
  projectId: "food-menu-51c96",
  storageBucket: "food-menu-51c96.appspot.com",
  messagingSenderId: "196805323144",
  appId: "1:196805323144:web:c3e6d2589f88219629b23d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
