import styles from './HistorySection.module.css'
import Section from './../Section/Section'
import BaseCard from '../BaseCard/BaseCard'
import YearCard from '../YearCard/YearCard'

const HistorySection = ({ historyData }) => {
    return (
        <Section
            boxTitle={historyData.pillTitle}
            title={historyData.title}
            description={historyData.description}
            className={styles.section}
        >

            <BaseCard className={styles.historySection}>

                <div className={styles.timeLine}>
                    {historyData.timeline.map((period, index) => (
                        <div className={styles.period}>
                            <YearCard
                                key={index}
                                year={period.year}
                                firstYear={index == 0 ? true : false}
                                lastYear={historyData.timeline.length - 1 == index ? true : false} />
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
