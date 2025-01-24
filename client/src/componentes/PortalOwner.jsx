import React, { useState } from "react";

const rolesAdministrativos = [
  "Escolar",
  "Vinculación",
  "Orientación",
  "Servicio Social",
  "Dirección",
];

const permisosDisponibles = [
  "Ver reportes",
  "Editar datos",
  "Asignar horarios",
  "Gestionar alumnos",
  "Crear grupos",
];

const PortalOwner = () => {
  const [administrativos, setAdministrativos] = useState([]);
  const [nuevoAdmin, setNuevoAdmin] = useState({
    nombre: "",
    rol: rolesAdministrativos[0],
    permisos: [],
  });

  const agregarAdministrativo = () => {
    if (nuevoAdmin.nombre.trim() === "") {
      alert("El nombre es obligatorio.");
      return;
    }
    setAdministrativos([...administrativos, nuevoAdmin]);
    setNuevoAdmin({ nombre: "", rol: rolesAdministrativos[0], permisos: [] });
  };

  const togglePermiso = (permiso) => {
    setNuevoAdmin((prev) => ({
      ...prev,
      permisos: prev.permisos.includes(permiso)
        ? prev.permisos.filter((p) => p !== permiso)
        : [...prev.permisos, permiso],
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-indigo-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Portal de Propietario (PortalOwner)</h1>
        <p>Gestión de permisos administrativos</p>
      </header>

      <section className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Agregar Administrativo
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Nombre del administrativo"
            className="border px-4 py-2 rounded-lg flex-1"
            value={nuevoAdmin.nombre}
            onChange={(e) =>
              setNuevoAdmin({ ...nuevoAdmin, nombre: e.target.value })
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
        <h3 className="text-lg font-medium text-gray-700">Permisos:</h3>
        <div className="flex gap-4 flex-wrap mb-4">
          {permisosDisponibles.map((permiso, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={nuevoAdmin.permisos.includes(permiso)}
                onChange={() => togglePermiso(permiso)}
              />
              {permiso}
            </label>
          ))}
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
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Rol</th>
              <th className="px-4 py-2">Permisos</th>
            </tr>
          </thead>
          <tbody>
            {administrativos.map((admin, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{admin.nombre}</td>
                <td className="px-4 py-2 border">{admin.rol}</td>
                <td className="px-4 py-2 border">
                  {admin.permisos.join(", ") || "Sin permisos"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PortalOwner;
