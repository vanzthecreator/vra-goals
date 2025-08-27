
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhtwqdil3wdPChObYpEXOg4X_X1anJFB4",
  authDomain: "caffinity-edfc6.firebaseapp.com",
  projectId: "caffinity-edfc6",
  storageBucket: "caffinity-edfc6.firebasestorage.app",
  messagingSenderId: "445086288531",
  appId: "1:445086288531:web:c9cba88f244097a5499b66",
  measurementId: "G-DKNKYWJ4HY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);