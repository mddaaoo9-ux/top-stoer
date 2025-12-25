// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKck8hyGJqhWnZGF4y6qR1zDWEw7QhxZI",
  authDomain: "top-stor.firebaseapp.com",
  projectId: "top-stor",
  storageBucket: "top-stor.firebasestorage.app",
  messagingSenderId: "987517761472",
  appId: "1:987517761472:web:dbbcba53265a02a6ee7a25",
  measurementId: "G-LF229BBX87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
