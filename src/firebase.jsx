import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB0l64sqffkrPAyiyw_lHnx1BKWGFkJZ-A",
  authDomain: "disneyplus-clone-8ece4.firebaseapp.com",
  projectId: "disneyplus-clone-8ece4",
  storageBucket: "disneyplus-clone-8ece4.appspot.com",
  messagingSenderId: "568689034551",
  appId: "1:568689034551:web:253dd0c0796f2ccc04c6b2",
  measurementId: "G-WGWQP12KM3"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const storage = getStorage();


export { auth, provider, storage };
