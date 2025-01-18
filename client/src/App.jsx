import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PieDePagina';
import DetallesCarrera from './componentes/DetallesCarrera';
import FormularioLogin from './componentes/FormularioLogin';
import Nosotros from './componentes/Nosotros';

const App = () => {
  return (
    <Router>
      <Encabezado />
      <main className="min-h-screen bg-gray-100">

        <Routes>
          <Route path="/" element={<h1 className="text-center py-10">Bienvenido a la Universidad</h1>} />
          <Route path="/carreras/:nombre" element={<DetallesCarrera />} />
          <Route path="/login-profesores" element={<FormularioLogin />} />
          <Route path="/login-alumnos" element={<FormularioLogin />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carreras-ingenierias-industrial" element={<Nosotros />} />
          <Route path="/carreras-ingenierias-sistemas" element={<Nosotros />} />
          <Route path="/carreras-ingenierias-electronica" element={<Nosotros />} />
          <Route path="/carreras-maestrias-ingenieria" element={<Nosotros />} />
          <Route path="/carreras-maestrias-cienciascomputacionales" element={<Nosotros />} />
          <Route path="/carreras-doctorados-informatica" element={<Nosotros />} />
          <Route path="/carreras-doctorados-fisica" element={<Nosotros />} />
        </Routes>
      </main>
      <PieDePagina />
    </Router>
  );
};

export default App;
