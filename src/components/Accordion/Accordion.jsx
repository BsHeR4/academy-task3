import { useState } from 'react';
import IconButton from '../IconButton/IconButton';
import styles from './Accordion.module.css'
import { LuPlus, LuMinus } from "react-icons/lu";

const Accordion = ({ title, content, active = false }) => {
    const [isActive, setIsActive] = useState(false);

    const openAccordion = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`${styles.accordion} ${isActive ? styles.active : ''}`}>
            <div className={styles.accordionHeader}>
                <h3>{title}</h3>
                <IconButton onClick={openAccordion} icon={isActive ? <LuMinus /> : <LuPlus />} className={styles.iconButton} />
            </div>
            <div className={styles.accordionContent}>
                <div className={styles.contentWrapper}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion
