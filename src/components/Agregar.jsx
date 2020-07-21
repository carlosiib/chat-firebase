import React, { useContext, useState } from 'react'

import { ChatContext } from "../context/ChatProvider"

const Agregar = () => {
  const { usuario, agregarMensajes } = useContext(ChatContext)

  const [mensaje, setMensaje] = useState("")

  const agregar = (e) => {
    e.preventDefault()
    if (!mensaje.trim()) {
      console.log("msg vacio")
      return
    }
    agregarMensajes(mensaje, usuario.uid)
    setMensaje("")
  }

  return (
    <form
      className="fixed-bottom input-group p-3 bg-dark"
      onSubmit={agregar}>
      <input
        type="text"
        className="form-control"
        value={mensaje}
        onChange={e => setMensaje(e.target.value)} />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="submit">
          Enviar</button>
      </div>
    </form>
  )
}

export default Agregar
