import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA6wZjvziz0PWh1vmyhlLWMu2Ua50UnBYc",
    authDomain: "fir-55f6f.firebaseapp.com",
    projectId: "fir-55f6f",
    storageBucket: "fir-55f6f.appspot.com",
    messagingSenderId: "965718848967",
    appId: "1:965718848967:web:7b50526f580d5fd51dd5e2",
    measurementId: "G-K1GKMYJYSQ"
  };

//   export const Firebase = firebase.initializeApp(firebaseConfig)
  export default firebase.initializeApp(firebaseConfig)