import HomePage from 'paginas/homePage';
import './styles/estilosGlobais.scss';

import { Outlet } from 'react-router-dom';
import Navbar from 'componentes/navBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomePage />
      <Outlet />
  </div>
  )
}

export default App;
