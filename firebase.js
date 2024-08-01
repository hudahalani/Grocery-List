// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqz-r5u1Yo4oc0n4xue55BPmdvkQ0Ph0s',
  authDomain: 'pantry-app-39373.firebaseapp.com',
  projectId: 'pantry-app-39373',
  storageBucket: 'pantry-app-39373.appspot.com',
  messagingSenderId: '803408664049',
  appId: '1:803408664049:web:8f54078161368189c9a050',
  measurementId: 'G-P71QRT0JK4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Ensure firebaseConfig is exported correctly
export { app, firestore, firebaseConfig };
