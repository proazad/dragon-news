// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO1zOtlZ2xChgGTQLX7gD0xI7hTDTFtz4",
    authDomain: "dragon-news-fd8da.firebaseapp.com",
    projectId: "dragon-news-fd8da",
    storageBucket: "dragon-news-fd8da.appspot.com",
    messagingSenderId: "359706897773",
    appId: "1:359706897773:web:dea1d6bcd57bb44f64be64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;