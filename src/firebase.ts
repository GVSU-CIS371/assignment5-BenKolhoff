import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNMpQuG5WjjFbJytRCGWld6mPp2Ndov9I",
  authDomain: "beverageshop-d9ce9.firebaseapp.com",
  projectId: "beverageshop-d9ce9",
  storageBucket: "beverageshop-d9ce9.firebasestorage.app",
  messagingSenderId: "473136780811",
  appId: "1:473136780811:web:685f95866900d53dc3990e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
