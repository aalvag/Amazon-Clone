import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVXOFUU21OM0YfSk4TrXtFC81tRV-ryfo",
  authDomain: "clone-dbdf5.firebaseapp.com",
  databaseURL: "https://clone-dbdf5.firebaseio.com",
  projectId: "clone-dbdf5",
  storageBucket: "clone-dbdf5.appspot.com",
  messagingSenderId: "638642095107",
  appId: "1:638642095107:web:1405a9e37b8c668448ba36",
  measurementId: "G-PGM7Y7F5WD",
});
// const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
export { auth };
