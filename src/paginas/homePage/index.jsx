import Hero from "componentes/hero";
import Menu from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="App">
          <header>
            <Menu />
          </header>
          <Hero />
        </div>
        <Rodape />
      </main>
    </>
  );
}
