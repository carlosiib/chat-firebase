import React, { createContext, useState, useEffect } from 'react'
import { auth, db, provider } from "../firebase"

export const ChatContext = createContext()

const ChatProvider = (props) => {

  const dataUsuario = {
    uid: null,
    email: null,
    estado: null
  }
  const [usuario, setUsuario] = useState(dataUsuario)

  useEffect(() => {
    detectarUsuario()
  }, [])

  const detectarUsuario = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        //user exists -> logged in
        setUsuario({
          uid: user.uid,
          email: user.email,
          estado: true
        })
      } else {
        //user exists -> not logged in
        setUsuario({
          uid: null,
          email: null,
          estado: false
        })
      }
    })
  }

  const ingresoUsuario = async () => {
    try {
      await auth.signInWithPopup(provider)
    } catch (error) {
      console.log(error)
    }
  }

  const cerrarSesion = () => {
    auth.signOut()
  }

  return (
    <ChatContext.Provider value={{ usuario, ingresoUsuario, cerrarSesion }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
