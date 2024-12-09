// firebaseConfig.js

import { initializeApp } from 'firebase/app'; // import untuk Firebase SDK v9
import { getAuth } from 'firebase/auth'; // import untuk Firebase Authentication
import { getFirestore } from 'firebase/firestore'; // Jika menggunakan Firestore
// Anda dapat menambahkan lebih banyak layanan sesuai kebutuhan

const firebaseConfig = {
  apiKey: "AIzaSyDg2gpDh9uxDT3QZtIeOCZax9dOeXN2SOE",
  authDomain: "direktoriormawa.firebaseapp.com",
  projectId: "direktoriormawa",
  storageBucket: "direktoriormawa.firebasestorage.app",
  messagingSenderId: "773013258644",
  appId: "1:773013258644:web:127431161c9c46057bcf81",
  measurementId: "G-30GBL205PK"
};

// Pastikan Anda melakukan inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);

// Anda dapat menambahkan lebih banyak layanan seperti Firestore atau Firebase Auth
const auth = getAuth(app);  // Inisialisasi Firebase Auth
const db = getFirestore(app); // Inisialisasi Firestore

export { auth, db };
