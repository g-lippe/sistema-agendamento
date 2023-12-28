import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './menu.module.scss';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuIcon} onClick={handleMenuClick}>
        <FaBars />
        {menuOpen && (
          <ul className={styles.menuItems}>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        )}
      </div>
      <h3>DataPet</h3>
    </div>
  );
}

