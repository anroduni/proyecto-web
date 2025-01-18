import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VistaPrincipal from './componentes/VistaPrincipal';
import PortalAlum from './componentes/PortalAlum';
import PortalProfe from './componentes/PortalProfe';
import Nosotros from './componentes/Nosotros';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
        <Route path="/alumnos" element={<PortalAlum />} />
        <Route path="/profesores" element={<PortalProfe />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
