import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import SidebarItem from "../SidebarItem";
import styles from "./sideBar.module.scss";
import search from "./icons8-lupa-24.png";
import { GiSittingDog } from "react-icons/gi";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.nameContainer}>
        {menuVisible ? (
          <IoCloseSharp
            className={styles.closeIcon + " hover_shadow"}
            onClick={closeMenu}
          />
        ) : (
          <CiMenuBurger
            className={styles.sidebarIcon + " hover_shadow"}
            onClick={toggleMenu}
          />
        )}
        <GiSittingDog className={styles.logoIcon + " hover_shadow"} />
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
            <SidebarItem iconType="início" text="Início" to="/home" />
          </div>
          <div className={styles.menuItem}>
            <SidebarItem iconType="usuário" text="Usuário" to="/login" />
          </div>
          <div className={styles.menuItem}>
            <SidebarItem
              iconType="calendario"
              text="Calendario"
              to="/calendar"
            />
          </div>
          <div className={styles.menuItem}>
            <SidebarItem
              iconType="configurações"
              text="Configurações"
              to="/settings"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
