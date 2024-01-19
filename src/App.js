import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PaginaInicio from "./PaginaInicio";
import PaginaUsuario from "./PaginaUsuario";
import PaginaCalendario from "./PaginaCalendario";
import PaginaConfiguracoes from "./PaginaConfiguracoes";
import HomePage from "./paginas/HomePage"; 
import Navbar from "./componentes/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/inicio" element={<PaginaInicio/>} />
          <Route path="/usuario" element={<PaginaUsuario/>} />
          <Route path="/calendario" element={<PaginaCalendario/>} />
          <Route path="/configuracoes" element={<PaginaConfiguracoes/>} />
        </Routes>
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
