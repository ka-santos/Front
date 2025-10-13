import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk5HcC1cLEISYg7r_Cj3dN5QTyNCmG38w",
  authDomain: "login-63e37.firebaseapp.com",
  projectId: "login-63e37",
  storageBucket: "login-63e37.firebasestorage.app",
  messagingSenderId: "212795293129",
  appId: "1:212795293129:web:7acb5675ec8c437e4cbc18",
  measurementId: "G-SNHW7HF2NV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//função login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

//função para logout
async function logout() {
    await signOut(auth);
}

export { auth,  googleProvider, signInWithGooglePopup, logout};