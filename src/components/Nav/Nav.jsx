import styles from './Nav.module.css'
import Container from '../Container/Container'
import NavItem from '../NavItem/NavItem'
import Drawer from '../Drawer/Drawer';
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
                <Drawer navItems={navItems} className={styles.drawer} />
            </Container>
        </nav>
    )
}

export default Nav
