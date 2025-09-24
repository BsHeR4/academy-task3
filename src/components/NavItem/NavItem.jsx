import styles from './NavItem.module.css'

const NavItem = ({ navItems, active = false, menu = false, onClick, className }) => {
    return (
        <ul className={`${styles.navItem} ${className}`}>
            {navItems.map((item, index) => (
                <li key={index} onClick={onClick} className={`${active ? styles.active : ''} ${menu ? styles.menu : ''}`}>{item}</li>
            ))}
        </ul>
    )
}

export default NavItem
