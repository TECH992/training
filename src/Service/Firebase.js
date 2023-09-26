import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
          apiKey: process.env.React_App_ApiKey,
          authDomain: process.env.React_App_authDomain,
          projectId: process.env.React_App_projectId,
          storageBucket: process.env.React_App_storageBucket,
          messagingSenderId: process.env.React_App_messagingSenderId,
          appId: process.env.React_App_appId
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);