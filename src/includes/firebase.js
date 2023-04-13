import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyB78bMVu_4whF2kv9DBVxCp7NCgz0XEM0w',
  authDomain: 'music-a2246.firebaseapp.com',
  projectId: 'music-a2246',
  storageBucket: 'music-a2246.appspot.com',
  appId: '1:899022485416:web:32ea00d2c29527624c8f9d',
  measurementId: 'G-KL0QEJ6YGV'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
