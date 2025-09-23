import styles from './Nav.module.css'
import Container from '../Container/Container'
import NavItem from '../NavItem/NavItem'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const navItems = ['Home', 'About Us', 'Academics', 'Admissions', 'Student Life'];

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Container className={styles.container}>
                <div className={styles.logo}>
                    <img src="/imgs/Logo.svg" alt="" />
                </div>
                <Container className={styles.navItems}>
                    <NavItem navItems={navItems} />
                    <NavItem navItems={['Contact']} active={true} />
                </Container>
                <div className={styles.menu}>
                    <NavItem navItems={[<HiOutlineMenuAlt3 className={styles.menuIcon} />]} menu={true} />
                </div>
            </Container>
        </nav>
    )
}

export default Nav
