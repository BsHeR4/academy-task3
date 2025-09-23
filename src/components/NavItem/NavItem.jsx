import styles from './NavItem.module.css'

const NavItem = ({ navItems, active = false, menu = false }) => {
    return (
        <ul className={`${styles.navItem}`}>
            {navItems.map((item) => (
                <li className={`${active ? styles.active : ''} ${menu ? styles.menu : ''}`}>{item}</li>
            ))}
        </ul>
    )
}

export default NavItem
