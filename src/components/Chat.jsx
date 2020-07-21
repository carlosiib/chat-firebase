import React, { useContext, useRef, useEffect } from 'react'
import { ChatContext } from "../context/ChatProvider"

import Agregar from "./Agregar"

const Chat = () => {
  const { usuario, mensajes } = useContext(ChatContext)
  const refZonaChat = useRef(null)

  useEffect(() => {
    //updating the scroll bar when a new msg is created
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
  }, [mensajes])

  return (
    <div className="mt-3 px-2"
      style={{ height: "75vh", overflowY: "scroll" }}
      ref={refZonaChat}>
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
