import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig1 = {
  apiKey: "AIzaSyD-SekoxA3aEiBl_eUWbEfggYNwfGrfeO0",
  authDomain: "teste-b827b.firebaseapp.com",
  projectId: "teste-b827b",
  storageBucket: "teste-b827b.appspot.com",
  messagingSenderId: "703306738093",
  appId: "1:703306738093:web:e1e54993cd78a59d669924"
};

const app1 = initializeApp(firebaseConfig1);
export const db = getDatabase(app1);
