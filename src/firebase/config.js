// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyC15u-ewlp6UmJz-lOsN9jz_KwjrXlTm_A",
authDomain: "byteclubsih.firebaseapp.com",
projectId: "byteclubsih",
storageBucket: "byteclubsih.firebasestorage.app",
messagingSenderId: "49254888029",
appId: "1:49254888029:web:9f9d6d6f06bf87ffce93b4",
measurementId: "G-REJ03ZVXDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);