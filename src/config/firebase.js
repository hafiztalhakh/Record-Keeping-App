import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7k_2tPQYAzA_7dCG2EDmQkr_29TE2MkI",
  authDomain: "record-keeping-application.firebaseapp.com",
  projectId: "record-keeping-application",
  storageBucket: "record-keeping-application.appspot.com",
  messagingSenderId: "413503218052",
  appId: "1:413503218052:web:d6294ab54a3914c86cbdd1",
  measurementId: "G-MJMXG3W2YX",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
