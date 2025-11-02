import styles from './FeeStructureSection.module.css'
import Section from './../Section/Section'
import BaseCard from './../BaseCard/BaseCard'
import FeeTable from '../FeeTable/FeeTable'

const FeeStructureSection = () => {
    return (
        <Section
            boxTitle={"Our Features"}
            title={"Fee Structure"}
            description={"Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."}
        >
            <div className={styles.tables}>

                <FeeTable
                    headers={["Program", "Age Group", "Annual Tuition", "Registration Fee", "Activity Fee"]}
                    body={[
                        ["Nursery", "2 - 3 Years", "$1,686", "$162", "$12"],
                        ["Pre - Kindergartens", "3 - 4 Years", "$2,686", "$220", "$16"],
                        ["Kindergarten", "4 - 5 Years", "$3,686", "$340", "$20"],
                    ]}
                />

                <FeeTable
                    headers={["Additional Services"]}
                    body={[
                        ["Before and After-School Care", "$120 / per month"],
                        ["Language Immersion Program", "$60 / per semester"],
                        ["Transportation (optional)", "$80 / per month"],
                    ]}
                    thickHeader={true}
                />


            </div>
        </Section>
    )
}

export default FeeStructureSection
