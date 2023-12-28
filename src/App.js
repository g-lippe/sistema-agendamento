import './App.css';
import Cabecalho from './componentes/cabecalho';
import Menu from './componentes/menu/sidebar';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Menu/>
      </div>
      <header className="App-header">
        <Cabecalho/>
      </header>
    </div>
  );
}

export default App;
