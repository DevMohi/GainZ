// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMRu8GSFrQti225bnIkz4LvICJxarrW_A",
    authDomain: "gains-bd2ce.firebaseapp.com",
    projectId: "gains-bd2ce",
    storageBucket: "gains-bd2ce.appspot.com",
    messagingSenderId: "719718328179",
    appId: "1:719718328179:web:c961e7beb694758d318706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

