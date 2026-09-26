import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHLLGixCgEY8Jbv0KduJixAlwM3E2Ojao",
  authDomain: "swasth-setu-376d2.firebaseapp.com",
  projectId: "swasth-setu-376d2",
  storageBucket: "swasth-setu-376d2.firebasestorage.app",
  messagingSenderId: "411394010261",
  appId: "1:411394010261:web:be167e55c0d91e1859ff9c",
  measurementId: "G-C5Q37KQQ31"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };