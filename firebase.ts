import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
 import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA0V1UDoSp1ovOD8Px7vnhvrq4wyu1kdZI",
  authDomain: "dropbox-clone-b8eab.firebaseapp.com",
  projectId: "dropbox-clone-b8eab",
  storageBucket: "dropbox-clone-b8eab.appspot.com",
  messagingSenderId: "262197189874",
  appId: "1:262197189874:web:f6ba85760623cb4e96c46b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage}

