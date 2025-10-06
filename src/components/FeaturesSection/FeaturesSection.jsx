import BenefitCard from '../BenefitCard/BenefitCard'
import Section from '../Section/Section'
import styles from './FeaturesSection.module.css'

const FeaturesSection = () => {
    const features =
    {
        pillTitle: "Children Deserve Bright Future",
        title: "Our Benefits",
        description: "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.",
        items: [
            {
                icon: 'imgs/holistic.svg',
                title: 'Holistic Learning Approach',
                description: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
            },
            {
                icon: 'imgs/crown.svg',
                title: 'Experienced Educators',
                description: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.'
            },
            {
                icon: 'imgs/nurturing.svg',
                title: 'Nurturing Environment',
                description: 'We prioritize safety and provide a warm and caring atmosphere for every child.'
            },
            {
                icon: 'imgs/flag.svg',
                title: 'Play-Based Learning',
                description: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.'
            },
            {
                icon: 'imgs/individualized.svg',
                title: 'Individualized Attention',
                description: 'Our small class sizes enable personalized attention, catering to each child\'s unique needs.'
            },
            {
                icon: 'imgs/users.svg',
                title: 'Parent Involvement',
                description: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.'
            }
        ]
    }

    return (
        <Section
            boxTitle={features.pillTitle}
            title={features.title}
            description={features.description}
        >
            <div className={styles.benefitCards}>
                {features.items.map((benefit, index) => (
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

export default FeaturesSection
