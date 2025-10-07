import styles from './StudentsLearnSection.module.css'
import Section from './../Section/Section'
import BaseCard from '../BaseCard/BaseCard'
import StudentsLearnCard from '../StudentsLearnCard/StudentsLearnCard'

const StudentsLearnSection = () => {
    return (
        <Section
            boxTitle={"Our Features"}
            title={"What Students Learn"}
            description={"At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"}
        >
            <div className={styles.studentLearnCards}>
                <StudentsLearnCard></StudentsLearnCard>
                <StudentsLearnCard></StudentsLearnCard>
                <StudentsLearnCard></StudentsLearnCard>
                <StudentsLearnCard></StudentsLearnCard>
                <StudentsLearnCard></StudentsLearnCard>
                <StudentsLearnCard></StudentsLearnCard>
            </div>

        </Section>
    )
}

export default StudentsLearnSection
