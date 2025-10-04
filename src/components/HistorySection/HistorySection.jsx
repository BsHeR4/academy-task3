import styles from './HistorySection.module.css'
import Section from './../Section/Section'
import BaseCard from '../BaseCard/BaseCard'
import YearCard from '../YearCard/YearCard'

const periods = [
    {
        year: "2023",
        title: "Resilience and Future Horizons",
        description: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
        year: "2017",
        title: "Innovation and Technology",
        description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
    },
    {
        year: "2012",
        title: "Expansion and Recognition",
        description: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
    },
    {
        year: "2005",
        title: "Inception and Growth",
        description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
    },
]

const HistorySection = () => {
    return (
        <Section
            boxTitle={"Our Progressive Journey"}
            title={"Our History"}
            description={"Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"}
        >

            <BaseCard className={styles.historySection}>

                <div className={styles.timeLine}>
                    {periods.map((period, index) => (
                        <div className={styles.period}>
                            <YearCard
                                year={period.year}
                                firstYear={index == 0 ? true : false}
                                lastYear={periods.length - 1 == index ? true : false} />
                            <div>
                                <h2>{period.title}</h2>
                                <p>{period.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </BaseCard>
        </Section>
    )
}

export default HistorySection
