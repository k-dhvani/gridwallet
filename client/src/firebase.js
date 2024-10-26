// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-estate.firebaseapp.com',
//   projectId: 'mern-estate',
//   storageBucket: 'mern-estate.appspot.com',
//   messagingSenderId: '1078482850952',
//   appId: '1:1078482850952:web:28f19139ab77246602fb3d',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTacnfh2v4wA9hSFVBJzuLmIw3tMzx60",
  authDomain: "gridwallet-89eb3.firebaseapp.com",
  projectId: "gridwallet-89eb3",
  storageBucket: "gridwallet-89eb3.appspot.com",
  messagingSenderId: "522299004042",
  appId: "1:522299004042:web:a4a9fc06493bc460704973",
  measurementId: "G-S2LQPS12GX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);