// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDt_X6-a_gp2ZEe0a5WAEsaciYXjDnZc0Y",
  authDomain: "clone-55709.firebaseapp.com",
  projectId: "clone-55709",
  storageBucket: "clone-55709.appspot.com",
  messagingSenderId: "523842276634",
  appId: "1:523842276634:web:d0d2a1e95788825d76f0a3",
  measurementId: "G-ER74K2N2CX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);   