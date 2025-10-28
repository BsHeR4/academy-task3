import ProcessCard from '../ProcessCard/ProcessCard'
import Section from '../Section/Section'
import styles from './AdmissionProcessSection.module.css'

const AdmissionProcessSection = () => {
    return (
        <Section
            boxTitle={"Process"}
            title={"Admission Process"}
            description={"Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"}
        >
            <div className={styles.cards}>
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
            </div>
        </Section>
    )
}

export default AdmissionProcessSection
