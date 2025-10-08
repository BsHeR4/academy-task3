import BaseCard from '../BaseCard/BaseCard'
import styles from './StudentsLearnCard.module.css'


const StudentsLearnCard = ({ img, title, description }) => {
    return (
        <BaseCard className={styles.studentLearnSection}>
            <img src={img} alt={title + "img"} />
            <h2>{title}</h2>
            <p>{description}</p>
        </BaseCard>
    )
}

export default StudentsLearnCard
