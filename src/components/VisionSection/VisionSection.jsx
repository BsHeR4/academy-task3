import styles from './VisionSection.module.css'
import Section from './../Section/Section'
import VisionCard from '../VisionCard/VisionCard'

const VisionSection = () => {
    return (
        <Section
            boxTitle={"Mission & Visions"}
            title={"Our Mission & Visions"}
            description={"We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."}
        >
            <div className={styles.cardsContainer}>
                <VisionCard
                    title={"Mission"}
                    icon={"imgs/missionIcon.svg"}
                    description={"At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."}
                />
                <VisionCard
                    title={"Vision"}
                    icon={"imgs/visionIcon.svg"}
                    description={"Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."}
                />
            </div>
        </Section>
    )
}

export default VisionSection
