import Hero from "componentes/hero";
import Menu from "componentes/menu/sidebar";

export default function HomePage() {
  return (
    <div className="App">
      <div className='content'>
        <Menu />
      </div>
      <header className="App-header">
        <Hero />
      </header>

    </div>
  );
}
