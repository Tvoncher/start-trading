import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7tHVKP-dUKKhSxq_XlX0GzolpWCdiz0M",
  authDomain: "start-trading.firebaseapp.com",
  projectId: "start-trading",
  storageBucket: "start-trading.appspot.com",
  messagingSenderId: "53385951469",
  appId: "1:53385951469:web:134a3cd4414d666e9034e4",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth }
