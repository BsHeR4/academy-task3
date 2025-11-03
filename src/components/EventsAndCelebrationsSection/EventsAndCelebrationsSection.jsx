import styles from './EventsAndCelebrationsSection.module.css'
import Section from './../Section/Section'
import StudentsLearnCard from './../StudentsLearnCard/StudentsLearnCard'

const EventsAndCelebrationsSection = ({ eventsData }) => {
  const pattern = ['horizontalBar', 'bottomHorizontalBar', 'horizontalBar', 'horizontalBar', 'bottomHorizontalBar', 'horizontalBar']
  return (
    <Section
      boxTitle={"Our Features"}
      title={"Events & Celebrations"}
      description={"At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"}
    >

      <div className={styles.cards}>
        {eventsData.items.map((card, index) => {
          const patternType = pattern[index % pattern.length]

          return (
            <StudentsLearnCard
              key={index}
              img={card.image}
              title={card.title}
              description={card.description}
              horizontalBar={patternType == 'horizontalBar'}
              bottomHorizontalBar={patternType == 'bottomHorizontalBar'}
            />
          )
        })}
      </div>

    </Section>
  )
}

export default EventsAndCelebrationsSection
