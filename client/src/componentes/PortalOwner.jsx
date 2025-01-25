import React, { useState } from "react";

const rolesAdministrativos = [
  "Alumno",
  "Administrativo",
  "Superusuario",
  "Profesor",
];

const PortalOwner = () => {
  const [administrativos, setAdministrativos] = useState([]);
  const [nuevoAdmin, setNuevoAdmin] = useState({
    usuario: "",
    password: "",
    rol: rolesAdministrativos[0],
  });

  const agregarAdministrativo = () => {
    if (nuevoAdmin.usuario.trim() === "" || nuevoAdmin.password.trim() === "") {
      alert("El usuario y la contraseña son obligatorios.");
      return;
    }
    setAdministrativos([...administrativos, nuevoAdmin]);
    setNuevoAdmin({ usuario: "", password: "", rol: rolesAdministrativos[0] });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Agregar Administrativo
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Nombre del usuario"
            className="border px-4 py-2 rounded-lg flex-1"
            value={nuevoAdmin.usuario}
            onChange={(e) =>
              setNuevoAdmin({ ...nuevoAdmin, usuario: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border px-4 py-2 rounded-lg flex-1"
            value={nuevoAdmin.password}
            onChange={(e) =>
              setNuevoAdmin({ ...nuevoAdmin, password: e.target.value })
            }
          />
          <select
            className="border px-4 py-2 rounded-lg"
            value={nuevoAdmin.rol}
            onChange={(e) =>
              setNuevoAdmin({ ...nuevoAdmin, rol: e.target.value })
            }
          >
            {rolesAdministrativos.map((rol, idx) => (
              <option key={idx} value={rol}>
                {rol}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={agregarAdministrativo}
        >
          Agregar Administrativo
        </button>
      </section>

      <section className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Lista de Administrativos
        </h2>
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Usuario</th>
              <th className="px-4 py-2">Contraseña</th>
              <th className="px-4 py-2">Rol</th>
            </tr>
          </thead>
          <tbody>
            {administrativos.map((admin, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{admin.usuario}</td>
                <td className="px-4 py-2 border">{admin.password}</td>
                <td className="px-4 py-2 border">{admin.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PortalOwner;
