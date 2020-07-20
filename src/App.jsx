import React, { useContext } from 'react';
import { ChatContext } from './context/ChatProvider';

import Navbar from "./components/Navbar"

function App() {
  const { usuario } = useContext(ChatContext)
  return usuario !== null ? (
    <div>
      <Navbar />

    </ div>
  ) : (
      <div>Cargando...</div>
    );
}

export default App;
