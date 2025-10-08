import { NavLink } from 'react-router-dom'
import styles from './NavItem.module.css'

const NavItem = ({ navItems, dark = false, menu = false, onClick, className }) => {
    return (
        <ul ul className={`${styles.navItem} ${className}`}>
            {
                navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        onClick={onClick}
                        className={({ isActive }) => isActive ? `${styles.active} ${dark ? styles.dark : ''} ${menu ? styles.menu : ''} ${styles.link}` : `${dark ? styles.dark : ''} ${menu ? styles.menu : ''} ${styles.link}`}
                        to={item.to}>
                        <li >{item.title}</li>
                    </NavLink>
                ))
            }
        </ul>
    )
}

export default NavItem
