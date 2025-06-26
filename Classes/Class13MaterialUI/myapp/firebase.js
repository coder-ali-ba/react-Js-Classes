import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF9Ay_pTgw-yGSn73mQeGDQdD3sd2uaBA",
  authDomain: "test-c450f.firebaseapp.com",
  projectId: "test-c450f",
  storageBucket: "test-c450f.appspot.com", // ✅ Fixed
  messagingSenderId: "871056739346",
  appId: "1:871056739346:web:8bb2c72638ead73bb95ccb",
  measurementId: "G-J9E89GJTWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth()
// Only initialize analytics in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics ,auth };
