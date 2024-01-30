import React from "react";
import TelaLogin from "paginas/login";
import Sidebar from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";

const LoginPage = () => {
  return (
    <div>
      <Sidebar />
      <TelaLogin />
      <Rodape />
    </div>
  );
};

export default LoginPage;
