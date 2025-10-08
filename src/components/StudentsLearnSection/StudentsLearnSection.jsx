import styles from './StudentsLearnSection.module.css'
import Section from './../Section/Section'
import BaseCard from '../BaseCard/BaseCard'
import StudentsLearnCard from '../StudentsLearnCard/StudentsLearnCard'

const StudentsLearnSection = ({ studentLearnData }) => {
    return (
        <Section
            boxTitle={studentLearnData.pillTitle}
            title={studentLearnData.title}
            description={studentLearnData.description}
        >
            <div className={styles.studentLearnCards}>
                {
                    studentLearnData.items.map((card, index) => (
                        <StudentsLearnCard
                            img={card.image}
                            title={card.title}
                            description={card.description}
                            key={index}
                        />
                    ))
                }
            </div>

        </Section>
    )
}

export default StudentsLearnSection
