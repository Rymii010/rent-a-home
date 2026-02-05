
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHxrVRNjPZfdKn26yo8plGwJDOv-dy42U",
  authDomain: "rent-a-home-4191c.firebaseapp.com",
  projectId: "rent-a-home-4191c",
  storageBucket: "rent-a-home-4191c.firebasestorage.app",
  messagingSenderId: "427836438391",
  appId: "1:427836438391:web:5a7d618a8a50579fe31372",
  measurementId: "G-9F1NXBMY4G"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
