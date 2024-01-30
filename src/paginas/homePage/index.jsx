import Hero from "paginas/homePage/hero";
import Menu from "componentes/menu/Sidebar";
import Rodape from "componentes/rodape";
import Detalhes from "./detalhes";

export default function HomePage() {
  return (
    <>
      <main>
        <Menu />
        <div className="pagina_centro animation_fade_in">
          <header></header>

          <Hero />
          <Detalhes />
        </div>
        {<Rodape />}
      </main>
    </>
  );
}
