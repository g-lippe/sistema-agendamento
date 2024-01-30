import React from "react";
import Sidebar from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";

const errorPage = () => {
  return (
    <div>
      <Sidebar />
      <p>Erro 404!</p>
      <Rodape />
    </div>
  );
};

export default errorPage;
