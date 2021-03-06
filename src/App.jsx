import React, { useContext } from 'react';
import { ChatContext } from './context/ChatProvider';

import Navbar from "./components/Navbar"
import Chat from "./components/Chat"

function App() {
  const { usuario } = useContext(ChatContext)
  return usuario !== null ? (
    <div>
      <Navbar />
      {
        usuario.estado ? (
          <Chat />
        ) : (
            <div className="lead text-center mt-3">Debes iniciar sesión</div>
          )
      }

    </ div>
  ) : (
      <div>Cargando...</div>
    );
}

export default App;
