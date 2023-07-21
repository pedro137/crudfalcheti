import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-SekoxA3aEiBl_eUWbEfggYNwfGrfeO0",
  authDomain: "teste-b827b.firebaseapp.com",
  databaseURL: "https://teste-b827b-default-rtdb.firebaseio.com",
  projectId: "teste-b827b",
  storageBucket: "teste-b827b.appspot.com",
  messagingSenderId: "703306738093",
  appId: "1:703306738093:web:e1e54993cd78a59d669924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
