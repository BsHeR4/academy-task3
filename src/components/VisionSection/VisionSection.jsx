import styles from './VisionSection.module.css'
import Section from './../Section/Section'
import VisionCard from '../VisionCard/VisionCard'

const VisionSection = ({ visionData }) => {
    return (
        <Section
            boxTitle={visionData.pillTitle}
            title={visionData.title}
            description={visionData.description}
        >
            <div className={styles.cardsContainer}>
                {
                    visionData.data.map((card, index) => (
                        <VisionCard
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                            key={index}
                        />
                    ))
                }
            </div>
        </Section>
    )
}

export default VisionSection
