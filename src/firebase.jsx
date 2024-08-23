import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider, getAuth } from "firebase/auth/web-extension";
const firebaseConfig = {
  apiKey: "AIzaSyCTUpkLSzK_6zOPpBqvgnMZsFCVqPEhrAU",
  authDomain: "et-lottery.firebaseapp.com",
  projectId: "et-lottery",
  storageBucket: "et-lottery.appspot.com",
  messagingSenderId: "1093860543129",
  appId: "1:1093860543129:web:f90bd11168d3590fda0608"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
