import React from 'react';
import './App.css';
import Home from './Componentes/Home';
import Canales from './Componentes/Canales';
import Anime from './Componentes/Anime';
import Policial from './Componentes/Policial';
import Comedia from './Componentes/Comedia';
import Accion from './Componentes/Accion';
import Terror from './Componentes/Terror';
import Documental from './Componentes/Documental';
import Registro from './Componentes/Registro';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/canales" element={<Canales />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/policial" element={<Policial />} />
      <Route path="/comedia" element={<Comedia />} />
      <Route path="/accion" element={<Accion />} />
      <Route path="/terror" element={<Terror />} />
      <Route path="/documental" element={<Documental />} />
      <Route path="/login" element={<Registro />} />
    </Routes>
  )
};



function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </>
  );
}

export default App;
