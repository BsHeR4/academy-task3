import styles from './ProcessCard.module.css'
import BaseCard from './../BaseCard/BaseCard'

const ProcessCard = ({ step, title, description, lastCard = false }) => {
    return (
        <div className={styles.processCard}>

            <div className={styles.container}>
                <BaseCard className={styles.step}>
                    <span>{step}</span>
                </BaseCard>
                <div className={styles.verticalRectangular}>
                    <div className={`${styles.circle}`}>
                    </div>
                </div>
            </div>
            <BaseCard className={styles.process}>
                <h3>{title}</h3>
                <p>{description}
                </p>
            </BaseCard>
            <div className={`${styles.bottomVerticalRectangular} ${lastCard ? styles.lastCard : ''}`}>
            </div>
        </div>
    )
}

export default ProcessCard
