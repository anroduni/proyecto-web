import React, { useState } from "react";

const CronogramasGestion = () => {
  const [cronogramas, setCronogramas] = useState([]);
  const [nuevoCronograma, setNuevoCronograma] = useState({
    grupo: "",
    evento: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
  });

  const [gruposDisponibles] = useState(["1A", "1B", "2A", "2B"]); // Ejemplo: lista de grupos existentes.

  const agregarEvento = () => {
    const { grupo, evento, fecha, horaInicio, horaFin } = nuevoCronograma;

    // Validación de campos
    if (!grupo || !evento.trim() || !fecha || !horaInicio || !horaFin) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setCronogramas([...cronogramas, nuevoCronograma]);
    // Limpiar formulario
    setNuevoCronograma({
      grupo: "",
      evento: "",
      fecha: "",
      horaInicio: "",
      horaFin: "",
    });
  };

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-6">
        Gestión de Cronogramas y Horarios
      </h3>

      {/* Formulario para agregar eventos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded-lg"
          value={nuevoCronograma.grupo}
          onChange={(e) =>
            setNuevoCronograma({ ...nuevoCronograma, grupo: e.target.value })
          }
        >
          <option value="">Seleccionar Grupo</option>
          {gruposDisponibles.map((grupo, idx) => (
            <option key={idx} value={grupo}>
              {grupo}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Evento o Actividad"
          className="border px-4 py-2 rounded-lg"
          value={nuevoCronograma.evento}
          onChange={(e) =>
            setNuevoCronograma({ ...nuevoCronograma, evento: e.target.value })
          }
        />

        <input
          type="date"
          className="border px-4 py-2 rounded-lg"
          value={nuevoCronograma.fecha}
          onChange={(e) =>
            setNuevoCronograma({ ...nuevoCronograma, fecha: e.target.value })
          }
        />

        <input
          type="time"
          className="border px-4 py-2 rounded-lg"
          value={nuevoCronograma.horaInicio}
          onChange={(e) =>
            setNuevoCronograma({
              ...nuevoCronograma,
              horaInicio: e.target.value,
            })
          }
        />

        <input
          type="time"
          className="border px-4 py-2 rounded-lg"
          value={nuevoCronograma.horaFin}
          onChange={(e) =>
            setNuevoCronograma({
              ...nuevoCronograma,
              horaFin: e.target.value,
            })
          }
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={agregarEvento}
      >
        Agregar Evento
      </button>

      {/* Lista de cronogramas */}
      <h4 className="text-lg font-medium mt-6">Cronogramas Asignados:</h4>
      {cronogramas.length > 0 ? (
        <table className="w-full text-left border border-gray-300 mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Grupo</th>
              <th className="px-4 py-2">Evento</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Hora Inicio</th>
              <th className="px-4 py-2">Hora Fin</th>
            </tr>
          </thead>
          <tbody>
            {cronogramas.map((cronograma, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{cronograma.grupo}</td>
                <td className="px-4 py-2 border">{cronograma.evento}</td>
                <td className="px-4 py-2 border">{cronograma.fecha}</td>
                <td className="px-4 py-2 border">{cronograma.horaInicio}</td>
                <td className="px-4 py-2 border">{cronograma.horaFin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 mt-4">No hay cronogramas asignados.</p>
      )}
    </section>
  );
};

export default CronogramasGestion;
