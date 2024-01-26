import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/loginPage">Login</Link>
      <Link to="/calendar">Calendario</Link>
      <Link to="/settings">Configuracoes</Link>
      <Link to="/home">Voltar</Link>
    </nav>
  );
};

export default navBar;
