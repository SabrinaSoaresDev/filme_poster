
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTovWUS1mhe-YNBgSE3I256daexh3SZME",
    authDomain: "filme-poster.firebaseapp.com",
    projectId: "filme-poster",
    storageBucket: "filme-poster.appspot.com",
    messagingSenderId: "708290120549",
    appId: "1:708290120549:web:c4d575ff5dc9a15c27ef8c",
    measurementId: "G-1JGL2P9FT2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export { db};