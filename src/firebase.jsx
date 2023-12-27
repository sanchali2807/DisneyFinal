const firebaseConfig = {
  apiKey: "AIzaSyB0l64sqffkrPAyiyw_lHnx1BKWGFkJZ-A",
  authDomain: "disneyplus-clone-8ece4.firebaseapp.com",
  projectId: "disneyplus-clone-8ece4",
  storageBucket: "disneyplus-clone-8ece4.appspot.com",
  messagingSenderId: "568689034551",
  appId: "1:568689034551:web:253dd0c0796f2ccc04c6b2",
  measurementId: "G-WGWQP12KM3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;