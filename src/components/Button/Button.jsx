import Container from '../Container/Container'
import styles from './Button.module.css'
import { IoArrowForwardSharp } from "react-icons/io5";
const Button = ({ type = "shadow", onClick, active = false, children }) => {

    return (
        <button className={`${type == "shadow" ? styles.shadowButton : styles.normalButton} ${active ? styles.active : ''}`} onClick={onClick}>
            <div className={styles.content}>
                {children}
                {
                    type == "shadow" ?
                        <IoArrowForwardSharp className={styles.arrowIcon} />
                        : ""
                }
            </div>
        </button>
    )
}

export default Button
