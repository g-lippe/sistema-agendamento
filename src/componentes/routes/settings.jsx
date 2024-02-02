import Sidebar from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";
import React from "react";
import Config from "componentes/menu/Sidebar/itens/configuracoes";

const settings = () => {
  return (
    <div>
      <Sidebar />
      <Config />
      <Rodape />
    </div>
  );
};

export default settings;
