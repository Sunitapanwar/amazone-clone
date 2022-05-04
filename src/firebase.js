import firebase from "firebase"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsIU6dCJ-nq3jrUp_W1Sgw5EJpA_oILEU",
  authDomain: "clone-eead5.firebaseapp.com",
  projectId: "clone-eead5",
  storageBucket: "clone-eead5.appspot.com",
  messagingSenderId: "694275278928",
  appId: "1:694275278928:web:2744f98d82198d83a86955",
  measurementId: "G-TRH7DDZNZT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
