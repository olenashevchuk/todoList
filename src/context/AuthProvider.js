import React, { useEffect, useState, useReducer } from 'react'
import firebaseDefault from '../config'
import { userContext } from './context'
import { userReducer } from '../reducer'

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [state, dispatch] = useReducer(userReducer, currentUser)
  useEffect(() => {
    firebaseDefault.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <userContext.Provider value={{ currentUser, dispatch }}>
      {children}
    </userContext.Provider>
  )
}

export default AuthProvider
