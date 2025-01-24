import React from "react";
import UsuariosGestion from "./UsuariosGestion";
import GruposGestion from "./GruposGestion";
import CronogramasGestion from "./CronogramasGestion";

const PortalAdmin = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Portal Administrativo</h1>
        <p>Gestión académica y administrativa</p>
      </header>

      <div className="grid gap-6 max-w-6xl mx-auto">
        <UsuariosGestion />
        <GruposGestion />
        <CronogramasGestion />
      </div>
    </div>
  );
};

export default PortalAdmin;
