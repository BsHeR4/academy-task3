import BenefitCard from '../BenefitCard/BenefitCard'
import Section from '../Section/Section'
import styles from './BenefitsSection.module.css'

const BenefitsSection = ({ benefitsData }) => {
    return (
        <Section
            boxTitle={benefitsData.pillTitle}
            title={benefitsData.title}
            description={benefitsData.description}
        >
            <div className={styles.benefitCards}>
                {benefitsData.items.map((benefit, index) => (
                    <BenefitCard
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </div>

        </Section>
    )
}

export default BenefitsSection
