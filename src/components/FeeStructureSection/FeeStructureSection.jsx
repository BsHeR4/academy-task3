import styles from './FeeStructureSection.module.css'
import Section from './../Section/Section'
import BaseCard from './../BaseCard/BaseCard'
import FeeTable from '../FeeTable/FeeTable'

const FeeStructureSection = ({ feeData }) => {
    return (
        <Section
            boxTitle={feeData.pillTitle}
            title={feeData.title}
            description={feeData.description}
        >
            <div className={styles.tables}>

                {
                    feeData.tables.map((table, index) => {
                        return <FeeTable
                            key={index}
                            headers={table.headers}
                            body={table.body}
                            thickHeader={table.thickHeader}
                        />
                    })
                }

            </div>
        </Section>
    )
}

export default FeeStructureSection
