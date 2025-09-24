import NavItem from '../NavItem/NavItem';
import styles from './Drawer.module.css'
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';

const Drawer = ({ navItems, className }) => {

    const [isActive, setIsActive] = useState(false);

    const ActivateDrawer = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <div className={styles.menu}>
                <NavItem onClick={ActivateDrawer} navItems={[<HiOutlineMenuAlt3 className={styles.menuIcon} />]} menu={true} />
            </div>
            <div className={`${styles.draw} ${isActive && styles.active}`}>
                <IoMdClose onClick={ActivateDrawer} className={styles.closeIcon} />
                <ul className={`${styles.darwItems}`}>
                    {navItems.map((item) => (
                        <li className={styles.item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Drawer
