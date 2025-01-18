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
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-80 lg:w-72">
        <h2 className="text-center text-lg font-bold mb-4">Inicia Sesión</h2>
        <form onSubmit={manejarSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="USUARIO"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-lg w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioLogin;
