import styles from './ExtracurricularActivitiesSection.module.css'
import Section from './../Section/Section'
import BenefitCard from './../BenefitCard/BenefitCard'

const ExtracurricularActivitiesSection = ({ FeaturesData }) => {
    return (
        <Section
            boxTitle={"Our Features"}
            title={"Extracurricular Activities"}
            description={"At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"}
        >

            <div className={styles.cards}>
                {FeaturesData.items.map((feature, index) => (
                    <BenefitCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

        </Section>
    )
}

export default ExtracurricularActivitiesSection
