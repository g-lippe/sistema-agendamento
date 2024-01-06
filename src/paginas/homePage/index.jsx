import Hero from "paginas/homePage/hero";
import Menu from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";
import Detalhes from "./detalhes";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="App">
          <header>
            <Menu />
          </header>
          
          <Hero />
          <Detalhes />
        </div>
        <Rodape />
      </main>
    </>
  );
}
