// Sidebar.jsx
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SidebarItem from "../SidebarItem";
import styles from "./sideBar.module.scss";
import search from "./icons8-lupa-24.png";
import { GiSittingDog } from "react-icons/gi";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.nameContainer}>
        <CiMenuBurger className={styles.sidebarIcon} onClick={toggleMenu} />
        <GiSittingDog className={styles.logoIcon} />
        <h4>DataPet</h4>
        <div className={styles.sidebar__container}>
          <input
            className={styles.sidebar__input}
            type="text"
            placeholder="Buscar Aqui"
          />
          <img src={search} alt="Icone de lupa" />
        </div>
      </div>
      {menuVisible && (
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <SidebarItem iconType="início" text="Início" />
          </div>
          <div className={styles.menuItem}>
            <SidebarItem iconType="usuário" text="Usuário" />
          </div>
          <div className={styles.menuItem}>
            <SidebarItem iconType="calendario" text="Calendario" />
          </div>
          <div className={styles.menuItem}>
            <SidebarItem iconType="configurações" text="Configurações" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
