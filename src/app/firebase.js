// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLYOj4enWQq1TJ6f6XLqpZGBU_gr4af4I",
  authDomain: "pantry-pal-49692.firebaseapp.com",
  projectId: "pantry-pal-49692",
  storageBucket: "pantry-pal-49692.appspot.com",
  messagingSenderId: "549010393467",
  appId: "1:549010393467:web:c6f0ec77591407c126d5de",
  measurementId: "G-PYLV8L9GPB"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const firestore = getFirestore(app);
let firestore;
if (typeof window !== 'undefined') {
    const app = initializeApp(firebaseConfig);
    firestore = getFirestore(app);
  }

export { firestore };