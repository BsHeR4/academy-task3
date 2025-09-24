import Container from '../Container/Container'
import styles from './Button.module.css'
import { IoArrowForwardSharp } from "react-icons/io5";
const Button = ({ children }) => {
    return (
        <button className={styles.button}>
            <div className={styles.content}>
                {children}
                <IoArrowForwardSharp className={styles.arrowIcon} />
            </div>
        </button>
    )
}

export default Button
