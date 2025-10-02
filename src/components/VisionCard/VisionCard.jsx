import styles from './VisionCard.module.css'
import BaseCard from '../BaseCard/BaseCard'

const VisionCard = ({ title, icon, description }) => {
    return (
        <BaseCard className={styles.visionCard}>
            <div className={styles.head}>
                <h2>{title}</h2>
                <img src={icon} alt={title} />
            </div>
            <p>{description}</p>
        </BaseCard>
    )
}

export default VisionCard
