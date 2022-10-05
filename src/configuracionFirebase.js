// Import the functions you need from the SDKs you need

import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBr4Oa_6WYa4SbjB23tQ1PFVG11wlE-LE",
  authDomain: "mundosol-e2751.firebaseapp.com",
  projectId: "mundosol-e2751",
  storageBucket: "mundosol-e2751.appspot.com",
  messagingSenderId: "908423120240",
  appId: "1:908423120240:web:511dfcd7a9f37f60183bb5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);