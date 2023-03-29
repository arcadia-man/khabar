import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdsS6XE_cn_S7jyJqtHX2FL8V3qIkN8RI",
  authDomain: "tour-bea5e.firebaseapp.com",
  projectId: "tour-bea5e",
  storageBucket: "tour-bea5e.appspot.com",
  messagingSenderId: "982771586211",
  appId: "1:982771586211:web:6569dd43df0e7608369b16",
  measurementId: "G-YL3EF53F53",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
