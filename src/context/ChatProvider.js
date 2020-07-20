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

  return (
    <ChatContext.Provider value={{ usuario }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
