import React, { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import styles from './menu.module.scss';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.header1}>
        <div className={styles.menuIcon} onClick={handleMenuClick}>
          <LuMenuSquare />
          {menuOpen && (
            <ul className={styles.menuItems}>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          )}
        </div>
        <h3>PetBoard</h3>
      </div>
    </div>
  );
}

