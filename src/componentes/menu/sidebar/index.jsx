import SidebarItem from "../SidebarItem";
import styles from "./sideBar.module.scss";
import { GiSittingDog } from "react-icons/gi";

const Sidebar = () => {
  return (

    <div className={styles.menu}>

      <div className={styles.menu__logo_container}>
        <GiSittingDog className={styles.logoIcon} />
        <h3>DataPet</h3>
      </div>
      <div className={styles.menu__items_container}>

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
    </div>
  );
};

export default Sidebar;
