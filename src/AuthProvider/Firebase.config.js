// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3nDQNHTf_tH1-_bPTq7LEIrZlcACK8sU",
  authDomain: "car-doctor-1c2fd.firebaseapp.com",
  projectId: "car-doctor-1c2fd",
  storageBucket: "car-doctor-1c2fd.appspot.com",
  messagingSenderId: "926272655956",
  appId: "1:926272655956:web:c494610d73373b49e713c1",
  measurementId: "G-DZLSG4MEFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);