import styles from './StudentSupportSection.module.css'
import Section from '../Section/Section'
import BenefitCard from '../BenefitCard/BenefitCard'

const StudentSupportSection = ({ achievementsData }) => {
    return (
        <Section
            boxTitle={"Our Achievements"}
            title={"Student Support"}
            description={"At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"}
        >
            <div className={styles.cards}>
                {achievementsData.cards.map((achievement, index) => (
                    <BenefitCard
                        key={index}
                        icon={achievement.icon}
                        title={achievement.title}
                        description={achievement.description}
                    />
                ))}
            </div>
        </Section>
    )
}

export default StudentSupportSection
