import { Link } from "react-router-dom";
import SidebarItem from "../SidebarItem";
import styles from "./sideBar.module.scss";
import { GiSittingDog } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__logo_container}>
        <Link to="/">
          <GiSittingDog className={styles.logoIcon} />
          <h3>DataPet</h3>
        </Link>
      </div>
      <div className={styles.menu__items_container}>
        <div className={styles.menuItem}>
          <SidebarItem iconType="usuário" text="Usuário" to="/login" />
        </div>
        <div className={styles.menuItem}>
          <SidebarItem iconType="calendario" text="Calendario" to="/calendar" />
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
