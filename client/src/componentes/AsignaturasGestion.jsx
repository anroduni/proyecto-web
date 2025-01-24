// AsignaturasGestion.js
import React, { useState } from "react";

const AsignaturasGestion = () => {
  const [asignaturas, setAsignaturas] = useState([]);
  const [nuevaAsignatura, setNuevaAsignatura] = useState({
    nombre: "",
    profesor: "",
    grupo: "",
  });

  const agregarAsignatura = () => {
    if (
      nuevaAsignatura.nombre.trim() === "" ||
      nuevaAsignatura.profesor.trim() === "" ||
      nuevaAsignatura.grupo.trim() === ""
    )
      return alert("Todos los campos son obligatorios.");
    setAsignaturas([...asignaturas, nuevaAsignatura]);
    setNuevaAsignatura({ nombre: "", profesor: "", grupo: "" });
  };

  return (
    <section className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Gestión de Asignaturas
      </h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre de la asignatura"
          className="border px-4 py-2 mr-2 rounded-lg"
          value={nuevaAsignatura.nombre}
          onChange={(e) =>
            setNuevaAsignatura({ ...nuevaAsignatura, nombre: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Profesor encargado"
          className="border px-4 py-2 mr-2 rounded-lg"
          value={nuevaAsignatura.profesor}
          onChange={(e) =>
            setNuevaAsignatura({ ...nuevaAsignatura, profesor: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Grupo asignado"
          className="border px-4 py-2 rounded-lg"
          value={nuevaAsignatura.grupo}
          onChange={(e) =>
            setNuevaAsignatura({ ...nuevaAsignatura, grupo: e.target.value })
          }
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-2"
          onClick={agregarAsignatura}
        >
          Agregar Asignatura
        </button>
      </div>
      <table className="w-full text-left border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Asignatura</th>
            <th className="px-4 py-2">Profesor</th>
            <th className="px-4 py-2">Grupo</th>
          </tr>
        </thead>
        <tbody>
          {asignaturas.map((asignatura, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{asignatura.nombre}</td>
              <td className="px-4 py-2 border">{asignatura.profesor}</td>
              <td className="px-4 py-2 border">{asignatura.grupo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AsignaturasGestion;
