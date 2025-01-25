import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const usuarios = {
  prof: { contraseña: "1234", ruta: "/portal-profesores" },
  alum: { contraseña: "1234", ruta: "/portal-alumnos" },
  admin: { contraseña: "1234", ruta: "/portal-administrativo" },
  owner: { contraseña: "1234", ruta: "/portal-owner" },
};

const FormularioLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(""); // Para mostrar errores en pantalla
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpiar error previo

    const usuarioTrim = usuario.trim().toLowerCase(); // Normaliza el usuario
    const contraseñaTrim = contraseña.trim();

    if (!usuarioTrim || !contraseñaTrim) {
      setError("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (usuarios[usuarioTrim] && usuarios[usuarioTrim].contraseña === contraseñaTrim) {
      // Navegar al portal correspondiente
      navigate(usuarios[usuarioTrim].ruta); // Redirigir a la ruta del portal según el rol
    } else {
      setError("❌ Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-700 p-8 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-3/5">
        <h2 className="text-white text-center text-lg font-bold mb-4">Inicia Sesión</h2>
        {error && <p className="text-yellow-300 text-center mb-4">{error}</p>} {/* Mensaje de error */}
        <form onSubmit={manejarSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="USUARIO"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-2 bg-neutral-50 border border-gray-300 rounded-lg"
              autoFocus // Enfocar el input al cargar
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
