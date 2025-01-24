import React, { useState } from "react";

const roles = ["Alumno", "Profesor", "Administrativo"];

const UsuariosGestion = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    rol: roles[0],
  });
  const [alumnosEnLote, setAlumnosEnLote] = useState("");

  const agregarUsuario = () => {
    if (nuevoUsuario.nombre.trim() === "") {
      alert("El nombre es obligatorio.");
      return;
    }
    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoUsuario({ nombre: "", rol: roles[0] });
  };

  const agregarAlumnosEnLote = () => {
    const nombres = alumnosEnLote.split("\n").map((nombre) => nombre.trim());
    const nuevosAlumnos = nombres
      .filter((nombre) => nombre !== "")
      .map((nombre) => ({ nombre, rol: "Alumno" }));
    setUsuarios([...usuarios, ...nuevosAlumnos]);
    setAlumnosEnLote("");
  };

  return (
    <section className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Gestión de Usuarios</h3>
      
      {/* Formulario para agregar usuarios */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Nombre del usuario"
          className="border px-4 py-2 rounded-lg flex-1"
          value={nuevoUsuario.nombre}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
          }
        />
        <select
          className="border px-4 py-2 rounded-lg"
          value={nuevoUsuario.rol}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
          }
        >
          {roles.map((rol, idx) => (
            <option key={idx} value={rol}>
              {rol}
            </option>
          ))}
        </select>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={agregarUsuario}
        >
          Agregar Usuario
        </button>
      </div>

      {/* Agregar alumnos en lote */}
      <h4 className="text-lg font-medium mb-2">Agregar Alumnos en Lote:</h4>
      <textarea
        placeholder="Escribe un alumno por línea"
        className="border px-4 py-2 rounded-lg w-full mb-4"
        value={alumnosEnLote}
        onChange={(e) => setAlumnosEnLote(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={agregarAlumnosEnLote}
      >
        Agregar Alumnos en Lote
      </button>

      {/* Lista de usuarios */}
      <h4 className="text-lg font-medium mt-6">Lista de Usuarios:</h4>
      <table className="w-full text-left border border-gray-300 mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{usuario.nombre}</td>
              <td className="px-4 py-2 border">{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsuariosGestion;
