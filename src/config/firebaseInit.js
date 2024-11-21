// Import the functions you need from the SDKs you need
// import { initializeApp } from "../../node_modules/firebase/firebase-app.js";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
// import { getAuth, browserLocalPersistence } from "../../node_modules/firebase/firebase-auth.js";
import { getAuth, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'
import page from '../lib/page.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEJqzgMAz2BCsqxq7Yn3mguiXWjBaKs3o",
  authDomain: "softuni-rent-a-cat.firebaseapp.com",
  projectId: "softuni-rent-a-cat",
  storageBucket: "softuni-rent-a-cat.firebasestorage.app",
  messagingSenderId: "774977480850",
  appId: "1:774977480850:web:e3c3ff64d3e5d110c61e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
    .then(() => {
        // Refresh current page when persistance is loaded, a little bit hacky :)
        page.redirect(location.pathname);
    })
    .catch(err => {
        console.log('Persistance error');
    })

export default app;
