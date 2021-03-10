import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAkHAHqaKNk2lf_sLvE4fyKZA_qMFm7fPw",
    authDomain: "clone-7cd3c.firebaseapp.com",
    projectId: "clone-7cd3c",
    storageBucket: "clone-7cd3c.appspot.com",
    messagingSenderId: "129570019443",
    appId: "1:129570019443:web:6d780a0c6d3b9eb53d7206"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};