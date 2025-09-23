import styles from './Nav.module.css'
import Container from '../Container/Container'
import NavItem from '../NavItem/NavItem'

const navItems = ['Home', 'About Us', 'Academics', 'Admissions', 'Student Life'];

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Container className={styles.container}>
                <div className={styles.logo}>
                    <img src="/imgs/Logo.svg" alt="" />
                </div>
                <Container>
                    {navItems.map((navItem, index) => {
                        return <NavItem text={navItem} key={index} />
                    })}
                    <NavItem text={'Contact'} active={true} />
                </Container>
            </Container>
        </nav>
    )
}

export default Nav
