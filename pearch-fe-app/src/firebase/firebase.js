//packages
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAh4RvHCIE72Nvk9gopnK_nPPCDRNmi320",
    authDomain: "tweet-pearch.firebaseapp.com",
    databaseURL: "https://tweet-pearch.firebaseio.com",
    projectId: "tweet-pearch",
    storageBucket: "tweet-pearch.appspot.com",
    messagingSenderId: "318829658690",
    appId: "1:318829658690:web:575d786fa5cbf4df8023db"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db