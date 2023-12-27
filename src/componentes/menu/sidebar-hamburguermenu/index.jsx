import styles from './menu.module.css'
import { FaBars } from 'react-icons/fa'

export default function Menu() {
    return (
        <div className='menu'>
            <div className='header1'>
                <div className='menu-icon'>
                    <FaBars />
                </div>
                <h2>DataPet</h2>
            </div>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>
        </div>
    );
};
