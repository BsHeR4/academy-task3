import ProcessCard from '../ProcessCard/ProcessCard'
import Section from '../Section/Section'
import styles from './AdmissionProcessSection.module.css'

const AdmissionProcessSection = ({ admissionData }) => {
    return (
        <Section
            boxTitle={admissionData.pillTitle}
            title={admissionData.title}
            description={admissionData.description}
        >
            <div className={styles.cards}>
                {
                    admissionData.cards.map((card, index) => {

                        return <ProcessCard
                            key={index}
                            step={card.step}
                            title={card.title}
                            description={card.description}
                            lastCard={admissionData.cards.length - 1 == index ? true : false}
                        />
                    })
                }
            </div>
        </Section>
    )
}

export default AdmissionProcessSection
