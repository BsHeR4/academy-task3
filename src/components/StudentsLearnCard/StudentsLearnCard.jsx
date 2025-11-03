import BaseCard from '../BaseCard/BaseCard'
import styles from './StudentsLearnCard.module.css'


const StudentsLearnCard = ({ img, title, description, horizontalBar = false, bottomHorizontalBar = false }) => {

    return (
        <BaseCard className={styles.studentLearnSection}>
            <div className={`${styles.img} ${horizontalBar ? styles.horizontalBar : ''} ${bottomHorizontalBar ? styles.bottomHorizontalBar : ''}`}>
                <img src={img} alt={title + "img"} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </BaseCard>
    )
}

export default StudentsLearnCard
