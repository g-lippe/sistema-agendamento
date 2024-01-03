import { React } from "react";
import { FcHome, FcButtingIn, FcCalendar, FcSettings } from "react-icons/fc";
import styles from "./sideBarItem.module.scss";

const SidebarItem = ({ iconType, text }) => {
  let IconComponent;

  switch (iconType) {
    case "início":
      IconComponent = FcHome;
      break;
    case "usuário":
      IconComponent = FcButtingIn;
      break;
    case "calendario":
      IconComponent = FcCalendar;
      break;
    case "configurações":
      IconComponent = FcSettings;
      break;
    default:
      IconComponent = null;
  }

  return (
    <div className={styles["Icon-container"]}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default SidebarItem;
