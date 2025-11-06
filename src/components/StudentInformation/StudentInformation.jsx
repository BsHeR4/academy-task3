import styles from './StudentInformation.module.css'
import Section from './../Section/Section'
import Form from '../Form/Form'

const StudentInformation = () => {
    return (
        <Section
            boxTitle={"Contact Form"}
            title={"Student Information"}
            description={"If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"}
        >
            <Form
                inputs={
                    [
                        {
                            name: "parent",
                            label: "Parent Name",
                            type: "text",
                            placeholder: "Enter Parent Name",
                        },
                        {
                            name: "parent",
                            label: "Parent Name",
                            type: "text",
                            placeholder: "Enter Parent Name",
                        },
                        {
                            name: "parent",
                            label: "Parent Name",
                            type: "text",
                            placeholder: "Enter Parent Name",
                        },
                        {
                            name: "parent",
                            label: "Parent Name",
                            type: "select",
                            placeholder: "Enter Parent Name",
                            options: [
                                {
                                    label: "1",
                                    value: 1
                                },
                                {
                                    label: "1",
                                    value: 1
                                },
                                {
                                    label: "1",
                                    value: 1
                                },
                            ]
                        },
                        {
                            name: "parent",
                            label: "Parent Name",
                            type: "textarea",
                            placeholder: "Enter Parent Name",
                        },
                    ]
                }
            />
        </Section>
    )
}

export default StudentInformation
