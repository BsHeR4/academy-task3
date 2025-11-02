import styles from './ProcessCard.module.css'
import BaseCard from './../BaseCard/BaseCard'

const ProcessCard = ({ lastCard = false }) => {
    return (
        <div>

            <div className={styles.container}>
                <BaseCard className={styles.step}>
                    <span>03</span>
                </BaseCard>
                <div className={styles.verticalRectangular}>
                    <div className={`${styles.circle}`}>
                    </div>
                </div>
            </div>
            <BaseCard className={styles.process}>
                <h3>Inquiry</h3>
                <p>Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.
                </p>
            </BaseCard>
            <div className={`${styles.bottomVerticalRectangular} ${lastCard ? styles.lastCard : ''}`}>
            </div>
        </div>
    )
}

export default ProcessCard
