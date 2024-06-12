import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg1iujqtLCgzzAuQJAawt5yGsp3uzQDz8",
  authDomain: "tradematcher-918dd.firebaseapp.com",
  projectId: "tradematcher-918dd",
  storageBucket: "tradematcher-918dd.appspot.com",
  messagingSenderId: "381307787940",
  appId: "1:381307787940:web:239fc4bbb57a61b6c42431",
  measurementId: "G-DLZNHHMVB0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
