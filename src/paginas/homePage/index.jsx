import Hero from "componentes/hero";
import Menu from "componentes/menu/Sidebar";
import Header from "componentes/menu/Header";
import Sidebar from "componentes/menu/Sidebar";
import SidebarItem from "componentes/menu/SidebarItem";

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
