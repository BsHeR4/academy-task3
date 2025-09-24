import Accordion from '../Accordion/Accordion'
import Section from '../Section/Section'
import styles from './FaqSection.module.css'

const FaqSection = ({ faqData }) => {

    const middleIndex = Math.ceil(faqData.items.length / 2);

    const leftColumnFaqs = faqData.items.slice(0, middleIndex);
    const rightColumnFaqs = faqData.items.slice(middleIndex);

    return (
        <Section
            boxTitle={faqData.pillTitle}
            title={faqData.title}
            description={faqData.description}
        >
            <div className={styles.accordionsContainer}>
                <div className={styles.accordions}>
                    {leftColumnFaqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            title={faq.question}
                            content={faq.answer}
                        />
                    ))}
                </div>
                <div className={styles.accordions}>
                    {rightColumnFaqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            title={faq.question}
                            content={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default FaqSection
