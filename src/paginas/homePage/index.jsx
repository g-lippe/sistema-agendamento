import Cabecalho from "componentes/cabecalho";
import Menu from "componentes/menu/sidebar";

export default function HomePage() {
  return (
    <div className="App">
      <div className='content'>
        <Menu />
      </div>
      <header className="App-header">
        <Cabecalho />
      </header>
    </div>
  );
}
