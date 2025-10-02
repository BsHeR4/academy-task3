import BaseCard from '../BaseCard/BaseCard'
import styles from './BenefitCard.module.css'

const BenefitCard = ({ icon, title, description, className }) => {
    return (
        <BaseCard className={`${styles.benefitCard} ${className}`}>
            <div className={styles.iconBox}>
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription} >{description}</p>
        </BaseCard>
    )
}

export default BenefitCard
