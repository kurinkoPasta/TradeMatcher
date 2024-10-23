import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app, "gs://tradematcher-918dd.appspot.com");
export { auth, db, storage };
