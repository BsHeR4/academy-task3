import styles from './NavItem.module.css'

const NavItem = ({ text, active = false }) => {
    return (
        <button className={`${styles.navItem} ${active ? styles.active : ''}`}>
            {text}
        </button>
    )
}

export default NavItem
