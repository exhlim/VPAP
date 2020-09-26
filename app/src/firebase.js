// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC808i5Sewi_7wAOL6gUdNDUEwuJUsosGE",
    authDomain: "slack-clone-exhlim.firebaseapp.com",
    databaseURL: "https://slack-clone-exhlim.firebaseio.com",
    projectId: "slack-clone-exhlim",
    storageBucket: "slack-clone-exhlim.appspot.com",
    messagingSenderId: "689519731654",
    appId: "1:689519731654:web:a85ec17b9c094aa54148c7",
    measurementId: "G-1P99KKGD5X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  // preparing the authetication module
  const auth = firebase.auth();
  // preparing a provider, this is required to access the google services
  const provider = new firebase.auth.GoogleAuthProvider()

//   If you are exporting like this you will need to do import { auth, provider } from './firebase'
  export{ auth, provider }
//  But if you are doing an explicit export like below, you can do import db from './firebase or you can also do import database from './firebase'
  export default db;
