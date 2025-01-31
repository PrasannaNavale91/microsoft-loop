import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "loop-clone.firebaseapp.com",
    projectId: "loop-clone",
    storageBucket: "loop-clone.appspot.com",
    messagingSenderId: "856157715318",
    appId: "1:856157715318:web:44ec025c25e1ad18f2d857",
    measurementId: "G-L8MV9D89H1"
};
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
const analytics=getAnalytics(app);