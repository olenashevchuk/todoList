import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDaHGoG1qZJpvlYK_WVaW8ZuLsvBq-v39k',
  authDomain: 'simple-todo-ffb04.firebaseapp.com',
  projectId: 'simple-todo-ffb04',
  storageBucket: 'simple-todo-ffb04.appspot.com',
  messagingSenderId: '671395463458',
  appId: '1:671395463458:web:5949a31719f796859fe57b'
}
let defaultProject = firebase.initializeApp(firebaseConfig)

export default defaultProject
const db = firebase.firestore()
export { db, firebaseConfig }
