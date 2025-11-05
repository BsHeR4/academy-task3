import styles from './ContactButton.module.css'

const ContactButton = ({ icon, title }) => {
    return (
        <div className={styles.contactButton}>
            <div className={styles.icon}>
                {icon}
            </div>
            <p>{title}</p>
        </div>
    )
}

export default ContactButton
