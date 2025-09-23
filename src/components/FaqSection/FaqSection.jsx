import Accordion from '../Accordion/Accordion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import styles from './FaqSection.module.css'

const FaqSection = () => {
    return (
        <Section
            boxTitle={'Solutions For The Doubts'}
            title={'Frequently Asked Questions'}
            description={"Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."}
        >
            <div className={styles.accordionsContainer}>
                <div className={styles.accordions}>
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                        active={true}
                    />
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                </div>
                <div className={styles.accordions}>
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                    <Accordion
                        title={'How do you handle food allergies and dietary restrictions?'}
                        content={'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'}
                    />
                </div>
            </div>
        </Section>
    )
}

export default FaqSection
