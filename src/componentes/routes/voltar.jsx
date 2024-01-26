import React from "react";
import { Link } from "react-router-dom";

const voltar = () => {
  return (
    <div>
      <Link to="/home">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default voltar;
