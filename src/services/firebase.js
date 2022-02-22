import { initializeApp } from "firebase/app";
//es-lint-disable-next-line no-unused-vars
import { getFirestore, collection } from "firebase/firestore/lite";
//es-lint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: "AIzaSyB8kJIrhCH-AchcmwNhdUkHmu2OAS8nOAw",
  authDomain: "notebook-d2245.firebaseapp.com",
  databaseURL:
    "https://notebook-d2245-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "notebook-d2245",
  storageBucket: "notebook-d2245.appspot.com",
  messagingSenderId: "496662639366",
  appId: "1:496662639366:web:d0a54ba953c23435a26487",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let result = collection(db, "users");
console.log({ result });
