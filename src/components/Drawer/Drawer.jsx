import NavItem from '../NavItem/NavItem';
import styles from './Drawer.module.css'
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Drawer = ({ navItems, className }) => {

    const [isActive, setIsActive] = useState(false);

    const ActivateDrawer = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={className}>
            <div className={styles.menu}>
                <NavItem onClick={ActivateDrawer} navItems={[{ title: <HiOutlineMenuAlt3 className={styles.menuIcon} />, to: '#' }]} menu={true} />
            </div>
            <div className={`${styles.draw} ${isActive && styles.active}`}>
                <IoMdClose onClick={ActivateDrawer} className={styles.closeIcon} />
                <ul className={`${styles.darwItems}`}>
                    {navItems.map((item, index) => (
                        <NavLink to={item.to}>
                            <li key={index} className={styles.item}>{item.title}</li>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Drawer
