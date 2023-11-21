import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAO2uZIVZxqpM2fbBK-ZR4ih-U7jwnC08",
  authDomain: "chat-f86a9.firebaseapp.com",
  projectId: "chat-f86a9",
  storageBucket: "chat-f86a9.appspot.com",
  messagingSenderId: "611061654353",
  appId: "1:611061654353:web:5ebbfcb7f93b5ef6152970"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();