import Container from '../Container/Container'
import styles from './IconButton.module.css'

const IconButton = ({ icon, className }) => {
    return (
        <Container className={`${styles.iconButton} ${className}`}>
            {icon}
        </Container>
    )
}

export default IconButton
