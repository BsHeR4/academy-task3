import styles from './NavItem.module.css'

const NavItem = ({ navItems, active = false, menu = false, onClick }) => {
    return (
        <ul className={`${styles.navItem}`}>
            {navItems.map((item) => (
                <li onClick={onClick} className={`${active ? styles.active : ''} ${menu ? styles.menu : ''}`}>{item}</li>
            ))}
        </ul>
    )
}

export default NavItem
