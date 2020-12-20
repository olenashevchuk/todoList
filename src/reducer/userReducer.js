import defaultProject, { db } from '../config'
import firebase from 'firebase/app'

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      defaultProject
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
        .then(function (result) {
          console.log(result.user)
          db.collection('users').doc(result.user.uid).set({
            login: result.user.email
          })
          db.collection('users').doc(result.user.uid).collection('tasks')
        })
      //action.payload.history.push('/toDoApp')
      return {
        ...state
      }
    case 'SIGNUP_USER_WITH_GOOGLE':
      var provider = new firebase.auth.GoogleAuthProvider()
      defaultProject
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          let user = result.user
          db.collection('users').doc(result.user.uid).set({
            login: user.email
          })
          db.collection('users').doc(result.user.uid).collection('tasks')
        })
        .catch(function (error) {
          alert(error.code)
        })

      return {
        ...state
      }
    case 'SIGN_OUT':
      defaultProject
        .auth()
        .signOut()
        .then(
          function () {
            console.log('Signed Out')
          },
          function (error) {
            alert('Sign Out Error', error)
          }
        )
      return state
    case 'RESET_PASSWORD':
      defaultProject
        .auth()
        .sendPasswordResetEmail(action.payload)
        .then(function () {
          alert('Check your E-mail')
        })
        .catch(function (error) {
          alert(error.message)
        })
      return state
    default:
      return state
  }
}

export default userReducer
