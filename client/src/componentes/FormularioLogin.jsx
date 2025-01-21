import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();

    // Simulación de validación
    if (usuario === 'prof' && contraseña === '1234') {
      // Redirigir a portal de profesores
      navigate('/portal-profesores');
    } else if (usuario === 'alum' && contraseña === '1234') {
      // Redirigir a portal de alumnos
      navigate('/portal-alumnos');
    } else if (usuario === 'admin' && contraseña === '1234') {
      // Redirigir a portal de alumnos
      navigate('/portal-Administrativo');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-700 p-8 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-3/5">
        <h2 className="text-stone-100 text-center text-lg font-bold mb-4">Inicia Sesión</h2>
        <form onSubmit={manejarSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="USUARIO"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-2 bg-neutral-50 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full p-2 border bg-neutral-50 border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-red-900 text-white py-2 px-4 rounded-lg w-full hover:bg-red-950"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioLogin;
