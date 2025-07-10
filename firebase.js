// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzVL3wQTFo74QlM_PEE-EbgFEtbqN16oE",
    authDomain: "signin-cdeed.firebaseapp.com",
    projectId: "signin-cdeed",
    storageBucket: "signin-cdeed.firebasestorage.app",
    messagingSenderId: "481847681739",
    appId: "1:481847681739:web:13b28ef686bc29f201714e",
    measurementId: "G-L8F15D37BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };