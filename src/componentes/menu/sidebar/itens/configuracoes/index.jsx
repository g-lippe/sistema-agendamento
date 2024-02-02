import React from "react";
import { Link } from "react-router-dom";
import style from "componentes/menu/Sidebar/itens/configuracoes/configuracoes.module.scss";

const settings = () => {
  return (
    <div className={style.config}>
      <Link>Editar Perfil</Link>
      <Link>Historico</Link>
      <Link>Sair da Conta</Link>
    </div>
  );
};

export default settings;
