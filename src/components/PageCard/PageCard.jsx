import BaseCard from '../BaseCard/BaseCard'
import Button from '../Button/Button'
import Container from './../Container/Container'
import styles from './PageCard.module.css'

const PageCard = ({ title, description }) => {
    return (
        <BaseCard className={styles.pageCard}>
            <h3 className={styles.pageCardTitle}>{title}</h3>
            <Container className={styles.shapesContainer}>
                <div className={styles.rectangular}>
                    <div className={`${styles.circle} ${styles.leftCircle}`}>
                    </div>
                </div>
                <div className={styles.rectangular}></div>
                <div className={styles.rectangular}></div>
                <div className={styles.rectangular}></div>
                <div className={styles.rectangular}></div>
                <div className={styles.rectangular}>
                    <div className={`${styles.circle} ${styles.rightCircle}`}>
                    </div>
                </div>
            </Container>
            <p className={styles.pageCardDescription}>{description}</p>
            <Button>
                Learn More
            </Button>
        </BaseCard>
    )
}

export default PageCard
