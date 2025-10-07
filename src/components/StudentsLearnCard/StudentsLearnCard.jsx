import BaseCard from '../BaseCard/BaseCard'
import styles from './StudentsLearnCard.module.css'


const StudentsLearnCard = () => {
    return (
        <BaseCard className={styles.studentLearnSection}>
            <img src="imgs/studentLearn1.png" alt="" />
            <h2>Language Arts</h2>
            <p>Reading, writing, storytelling, and communication skills.</p>
        </BaseCard>
    )
}

export default StudentsLearnCard
