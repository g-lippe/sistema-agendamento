import { React } from "react";
import { FaHome, FaUser, FaCalendar, FaCog } from "react-icons/fa";
import styles from './sideBarItem.module.scss'

const SidebarItem = ({ iconType, text }) => {
    let IconComponent;

    switch (iconType) {
        case "início":
          IconComponent = FaHome;
          break;
        case "usuário":
          IconComponent = FaUser;
          break;
        case "calendario":
          IconComponent = FaCalendar;
          break;
        case "configurações":
          IconComponent = FaCog;
          break;
        default:
          IconComponent = null;
      }
    
    return (
        <div className={styles['Icon-container']}>
            {IconComponent && <IconComponent className={styles.icon} />}
            <span className={styles.text}>{text}</span>
        </div>
    );
};

export default SidebarItem;