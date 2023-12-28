import Hero from "componentes/hero";
import Menu from "componentes/menu/sidebar";

export default function HomePage() {
  return (
    <div className="App">
      <header >
        <Menu />
      </header>
      <Hero />
    </div>


  );
}
