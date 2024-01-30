import React from "react";
import Sidebar from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";

const home = () => {
  return (
    <div>
      <Sidebar />
      <h1>Home</h1>
      <Rodape />
    </div>
  );
};

export default home;
