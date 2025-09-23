import Container from '../Container/Container'
import IconButton from '../IconButton/IconButton';
import styles from './Accordion.module.css'
import { LuPlus, LuMinus } from "react-icons/lu";

const Accordion = ({ title, content, active = false }) => {
    return (
        <div className={`${styles.accordion} ${active ? styles.active : ''}`}>
            <div className={styles.accordionHeader}>
                <h3>{title}</h3>
                <IconButton icon={active ? <LuMinus /> : <LuPlus />} className={styles.iconButton} />
            </div>
            <div className={styles.accordionContent}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Accordion
