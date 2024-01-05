// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvc_sM70KX89x14eAVxsEgeHx1w1b4iXc",
  authDomain: "authentication-64591.firebaseapp.com",
  projectId: "authentication-64591",
  storageBucket: "authentication-64591.appspot.com",
  messagingSenderId: "950018356267",
  appId: "1:950018356267:web:2983f6632f35b5cecd666e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);