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
import VistaPrincipal from './componentes/VistaPrincipal';

const App = () => {
  return (
    <Router>
      <Encabezado />
      <div>
        <Titulo />
        <main className="min-h-screen bg-red-50 mt-4 flex flex-col items-center">
        {/* Contenedor principal responsivo */}
        <div className="w-full max-w-screen-lg">
        
        
          <Routes>
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
            <Route path="/carreras-doctorados-fisica" element={<DetallesCarrera />} />
            <Route path="/portal-profesores" element={<PortalProfe />} />
            <Route path="/portal-alumnos" element={<PortalAlum />} />  
            <Route path="/portal-Administrativo" element={<PortalAdmin />} />        
          </Routes>
        </div>
    
          <Routes>
             <Route
              path="/"
              element={ 
              <VistaPrincipal />
                      }
            />
          </Routes>
       
        
      </main></div>
      <PieDePagina />
    </Router>
  );
};

export default App;
