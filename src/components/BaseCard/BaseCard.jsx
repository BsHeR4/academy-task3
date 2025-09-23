import styles from './BaseCard.module.css'

const BaseCard = ({ children, className }) => {
    return (
        <div className={`${styles.baseCard} ${className}`}>
            {children}
        </div>
    )
}

export default BaseCard
