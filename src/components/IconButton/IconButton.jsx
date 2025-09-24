import Container from '../Container/Container'
import styles from './IconButton.module.css'

const IconButton = ({ icon, className, onClick }) => {
    return (
        <div onClick={onClick}>
            <Container className={`${styles.iconButton} ${className}`}>
                {icon}
            </Container>
        </div>
    )
}

export default IconButton
