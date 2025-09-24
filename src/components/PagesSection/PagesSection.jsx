import PageCard from '../PageCard/PageCard'
import Section from '../Section/Section'
import styles from './PagesSection.module.css'

const PagesSection = ({ pagesData }) => {
    return (
        <Section
            boxTitle={pagesData.pillTitle}
            title={pagesData.title}
            description={pagesData.description}
        >
            <div className={styles.pages}>
                {pagesData.cards.map((page, index) => (
                    <PageCard
                        key={index}
                        title={page.title}
                        description={page.description}
                    />
                ))}
            </div>
        </Section>
    )
}

export default PagesSection
