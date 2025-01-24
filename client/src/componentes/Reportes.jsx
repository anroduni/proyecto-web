// Reportes.js
import React from "react";

const Reportes = () => {
  const generateReport = () => {
    const report = [
      { id: 1, name: "Antonio Pérez", role: "Administrador" },
      { id: 2, name: "María López", role: "Profesor" },
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Nombre,Rol"]
        .concat(report.map((u) => `${u.id},${u.name},${u.role}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "reporte_usuarios.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Reportes Académicos
      </h3>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
        onClick={generateReport}
      >
        Descargar Reporte de Usuarios
      </button>
    </section>
  );
};

export default Reportes;
