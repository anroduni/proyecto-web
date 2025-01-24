import React, { useState } from "react";

// Lista de roles y usuarios (este ejemplo está basado en el segundo código que proporcionaste)
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

const GestionGrupos = () => {
  const [alumnos, setAlumnos] = useState(""); // Alumno temporal
  const [listaAlumnos, setListaAlumnos] = useState([]); // Lista acumulable de alumnos
  const [grupo, setGrupo] = useState({ grado: "", nombre: "" }); // Datos del grupo
  const [gruposGuardados, setGruposGuardados] = useState([]); // Grupos persistidos
  const [usuarios, setUsuarios] = useState([]); // Lista de usuarios para seleccionar

  // Agregar alumno a la lista
  const agregarAlumno = () => {
    if (alumnos.trim() !== "") {
      setListaAlumnos([...listaAlumnos, alumnos]);
      setAlumnos("");
    }
  };

  // Eliminar alumno de la lista
  const eliminarAlumno = (index) => {
    const nuevaLista = listaAlumnos.filter((_, i) => i !== index);
    setListaAlumnos(nuevaLista);
  };

  // Guardar grupo
  const guardarGrupo = () => {
    if (grupo.grado && grupo.nombre && listaAlumnos.length > 0) {
      const nuevoGrupo = {
        id: gruposGuardados.length + 1,
        grado: grupo.grado,
        nombre: grupo.nombre,
        alumnos: listaAlumnos,
      };
      setGruposGuardados([...gruposGuardados, nuevoGrupo]);
      setGrupo({ grado: "", nombre: "" });
      setListaAlumnos([]);
      alert("Grupo guardado exitosamente");
    } else {
      alert("Por favor completa todos los campos y agrega al menos un alumno");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gestión de Grupos</h2>

        {/* Formulario de creación de grupos */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Grado (e.g., 1º, 2º, 3º)"
            value={grupo.grado}
            onChange={(e) => setGrupo({ ...grupo, grado: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 flex-1"
          />
          <input
            type="text"
            placeholder="Nombre del Grupo (e.g., A, B, C)"
            value={grupo.nombre}
            onChange={(e) => setGrupo({ ...grupo, nombre: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 flex-1"
          />

          {/* Seleccionar alumnos */}
          <select
            value={alumnos}
            onChange={(e) => setAlumnos(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 flex-1"
          >
            <option value="">Seleccionar Alumno</option>
            {usuarios.map((usuario, idx) => (
              usuario.rol === 'Alumno' && (
                <option key={idx} value={usuario.nombre}>
                  {usuario.nombre}
                </option>
              )
            ))}
          </select>
          <button
            onClick={agregarAlumno}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Agregar Alumno
          </button>
        </div>

        {/* Lista acumulable de alumnos */}
        <ul className="mt-4 border border-gray-300 rounded-lg p-4">
          {listaAlumnos.map((alumno, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <span>{alumno}</span>
              <button
                onClick={() => eliminarAlumno(index)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        {/* Botón para guardar grupo */}
        <button
          onClick={guardarGrupo}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Guardar Grupo
        </button>

        {/* Grupos guardados */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Grupos Guardados</h3>
          {gruposGuardados.length > 0 ? (
            <ul className="border border-gray-300 rounded-lg p-4">
              {gruposGuardados.map((g) => (
                <li key={g.id} className="py-2 border-b last:border-b-0">
                  <strong>{`Grado: ${g.grado}, Grupo: ${g.nombre}`}</strong>
                  <ul className="pl-4 mt-2">
                    {g.alumnos.map((a, i) => (
                      <li key={i} className="text-gray-600">{a}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No hay grupos guardados aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionGrupos;
