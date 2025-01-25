import React, { useState } from "react";
import UsuariosGestion from "./UsuariosGestion";
import GruposGestion from "./GruposGestion";
import CronogramasGestion from "./CronogramasGestion";


const PortalAdmin = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <div className="grid gap-6 max-w-6xl mx-auto">
          <UsuariosGestion />
          <GruposGestion />
          <CronogramasGestion />
        </div>
    </div>
  );
};

export default PortalAdmin;