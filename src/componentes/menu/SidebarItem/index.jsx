import React from "react";
import { FcHome, FcButtingIn, FcCalendar, FcSettings } from "react-icons/fc";
import styles from "./sideBarItem.module.scss";
import { Link } from "react-router-dom";

const SidebarItem = ({ iconType, text, to }) => {
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
    <div to={to} className={styles["Icon-container"]}>
      <Link to={to} className={styles.link}>
        {IconComponent && <IconComponent className={styles.icon} />}
        <span className={styles.text}>{text}</span>
      </Link>
    </div>
  );
};

export default SidebarItem;
