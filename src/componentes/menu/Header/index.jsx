import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar'
import styles from './header.module.scss'

const Header = () => {
    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className={styles.header}>
            <FaBars className={styles.headerIcon} onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
        </div>
    )
}

export default Header;