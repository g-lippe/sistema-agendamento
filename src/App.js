import HomePage from 'paginas/homePage';
import './styles/estilosGlobais.scss';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <HomePage />
      <Outlet />
  </div>
  )
}

export default App;
