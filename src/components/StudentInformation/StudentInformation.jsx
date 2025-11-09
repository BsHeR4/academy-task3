import styles from './StudentInformation.module.css'
import Section from './../Section/Section'
import Form from '../Form/Form'

const StudentInformation = ({ studentInformationData }) => {
    return (
        <Section
            boxTitle={studentInformationData.pillTitle}
            title={studentInformationData.title}
            description={studentInformationData.description}
        >
            <Form
                inputs={studentInformationData.inputs}
            />
        </Section>
    )
}

export default StudentInformation
