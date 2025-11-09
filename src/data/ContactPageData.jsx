export const ContactPageData = {

    // ===================================
    // ContactPage Header/Welcome Section
    // ===================================
    introPage: {
        boxTitle: "Contact Us",
        title: "Feel Free To Connect With Us",
        description: "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods",
        contacts: [
            { icon: "TbMailFilled", title: "hello@littlelearners.com" },
            { icon: "HiPhone", title: "+91 91813 23 2309" },
            { icon: "HiMapPin", title: "Somewhere in the World" },
            { icon: "HiClock", title: "Office Hours - 9am - 6 pm" },
        ]
    },

    // ===================================
    // Student Information Section
    // ===================================
    info: {
        pillTitle: "Contact Form",
        title: "Student Information",
        description: "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs",

        inputs: [
            {
                name: "parentName",
                label: "Parent Name",
                type: "text",
                placeholder: "Enter Parent Name",
            },
            {
                name: "emailAddress",
                label: "Email Address",
                type: "email",
                placeholder: "Enter Email Address",
            },
            {
                name: "phoneNumber",
                label: "Phone Number",
                type: "number",
                placeholder: "Enter Phone Number",
            },
            {
                name: "studentName",
                label: "Student Name",
                type: "text",
                placeholder: "Enter Student Name",
            },
            {
                name: "studentAge",
                label: "Student Age",
                type: "number",
                placeholder: "Enter Student Age",
            },
            {
                name: "programOfIntrest",
                label: "Program of Intrest",
                type: "select",
                placeholder: "Select Program",
                options: [
                    {
                        label: "Nursery (2 - 3 Years)",
                        value: 1
                    },
                    {
                        label: "Pre-Kindergarten (3 - 4 Years)",
                        value: 2
                    },
                    {
                        label: "Kindergarten (4 - 5 Years)",
                        value: 3
                    },
                    {
                        label: "After-School Care",
                        value: 4
                    },
                    {
                        label: "Language Immersion Program",
                        value: 5
                    },
                ]
            },
            {
                name: "message",
                label: "Message",
                type: "textarea",
                placeholder: "Enter your Message",
            },
        ]
    },
};