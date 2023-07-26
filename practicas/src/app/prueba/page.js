import React from 'react';

const MiPagina = () => {
  return (
    <div className="relative h-screen">
      {/* Primer div */}
      <div className="absolute inset-0 bg-red-500">
        Contenido del primer div
      </div>

      {/* Segundo div */}
      <div className="relative bg-blue-500">
        Contenido del segundo div
      </div>
    </div>
  );
};

export default MiPagina;