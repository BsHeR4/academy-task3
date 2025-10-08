import BenefitCard from '../BenefitCard/BenefitCard'
import Section from '../Section/Section'
import styles from './FeaturesSection.module.css'

const FeaturesSection = ({ featuresData }) => {

    return (
        <Section
            boxTitle={featuresData.pillTitle}
            title={featuresData.title}
            description={featuresData.description}
        >
            <div className={styles.benefitCards}>
                {featuresData.items.map((card, index) => (
                    <BenefitCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

        </Section>
    )
}

export default FeaturesSection
