// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNuu-OyU7kt5jWS8_yhmsx9Q3zgEcgl24',
  authDomain: 'realtor-clone-ajfm88.firebaseapp.com',
  projectId: 'realtor-clone-ajfm88',
  storageBucket: 'realtor-clone-ajfm88.appspot.com',
  messagingSenderId: '699917025501',
  appId: '1:699917025501:web:115f5f4c15f6dc1ba05b34',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
