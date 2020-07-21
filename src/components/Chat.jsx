import React, { useContext } from 'react'
import { ChatContext } from "../context/ChatProvider"

import Agregar from "./Agregar"

const Chat = () => {
  const { usuario, mensajes } = useContext(ChatContext)
  return (
    <div className="mt-3 px-2">
      {
        mensajes.map((mensaje, index) => (
          usuario.uid === mensaje.uid ? (
            <div
              className="d-flex justify-content-end mb-2" key={index}>
              <span className="badge badge-pill badge-primary">{mensaje.texto}</span>
            </div>
          ) : (
              <div
                className="d-flex justify-content-start mb-2" key={index}>
                <span className="badge badge-pill badge-secondary">{mensaje.texto}</span>
              </div>
            )
        ))
      }
      <Agregar />
    </div>
  )
}

export default Chat
