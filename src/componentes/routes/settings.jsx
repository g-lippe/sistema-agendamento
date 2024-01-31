import Sidebar from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";
import React from "react";
import { Link } from "react-router-dom";

const settings = () => {
  return (
    <div>
      <Sidebar />
      <Link
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Editar Perfil
      </Link>
      <Link
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Historico
      </Link>
      <Link
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Sair da Conta
      </Link>
      <Rodape />
    </div>
  );
};

export default settings;
