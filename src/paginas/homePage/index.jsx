import Hero from "componentes/hero";
import Menu from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";

export default function HomePage() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <Hero />
      <Rodape />
    </div>
  );
}
