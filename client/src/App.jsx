import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PieDePagina';
import DetallesCarrera from './componentes/DetallesCarrera';
import FormularioLogin from './componentes/FormularioLogin';
import Nosotros from './componentes/Nosotros';
import Titulo from './componentes/Titulo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PortalProfe from './componentes/PortalProfe';
import PortalAlum from './componentes/PortalAlum';
import PortalAdmin from './componentes/PortalAdmin';

const App = () => {
  return (
    <Router>
      <Encabezado />
      <main className="min-h-screen bg-gray-100 mt-4 flex flex-col items-center">
        {/* Contenedor principal responsivo */}
        <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <Titulo />
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-center py-10 text-xl sm:text-2xl lg:text-4xl">
                  Explora nuestras secciones
                </h1>
              }
            />
            <Route path="/carreras/:nombre" element={<DetallesCarrera />} />
            <Route path="/login-profesores" element={<FormularioLogin />} />
            <Route path="/login-alumnos" element={<FormularioLogin />} />
            <Route path="/login-Administrativo" element={<FormularioLogin />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/carreras-ingenierias-industrial" element={<DetallesCarrera />} />
            <Route path="/carreras-ingenierias-sistemas" element={<DetallesCarrera />} />
            <Route path="/carreras-ingenierias-electronica" element={<DetallesCarrera />} />
            <Route path="/carreras-maestrias-ingenieria" element={<DetallesCarrera />} />
            <Route path="/carreras-maestrias-cienciascomputacionales" element={<DetallesCarrera />} />
            <Route path="/carreras-doctorados-informatica" element={<DetallesCarrera />} />
            <Route path="/portal-doctorados-fisica" element={<DetallesCarrera />} />
            <Route path="/portal-profesores" element={<PortalProfe />} />
            <Route path="/portal-alumnos" element={<PortalAlum />} />  
            <Route path="/portal-Administrativo" element={<PortalAdmin />} />        
          </Routes>
        </div>
      </main>
      <PieDePagina />
    </Router>
  );
};

export default App;
