export const admissionsPageData = {

    // ===================================
    // Admissions Header/Welcome Section
    // ===================================
    introPage: {
        boxTitle: "Admissions",
        title: "Join Our Family of Young Learners",
        description: "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
    },

    // ===================================
    // Admission Process Section
    // ===================================
    process: {
        pillTitle: "Process",
        title: "Admission Process",
        description: "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school",
        cards: [
            {
                step: "01",
                title: "Inquiry",
                description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
            },
            {
                step: "02",
                title: "School Tour",
                description: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
            },
            {
                step: "03",
                title: "Application Form",
                description: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
            },
            {
                step: "04",
                title: "Parent Interview",
                description: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
            },
            {
                step: "05",
                title: "Student Assessment",
                description: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
            },
            {
                step: "06",
                title: "Acceptance",
                description: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
            },
        ]
    },

    // ===================================
    // Fee Structure Section
    // ===================================
    features: {
        pillTitle: "Our Features",
        title: "Fee Structure",
        description: "Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.",
        tables: [
            {
                headers: [
                    "Program",
                    "Age Group",
                    "Annual Tuition",
                    "Registration Fee",
                    "Activity Fee"
                ],

                body: [
                    ["Nursery", "2 - 3 Years", "$1,686", "$162", "$12"],
                    ["Pre - Kindergartens", "3 - 4 Years", "$2,686", "$220", "$16"],
                    ["Kindergarten", "4 - 5 Years", "$3,686", "$340", "$20"],
                ],

                thickHeader: false,

            },
            {
                headers: [
                    "Additional Services",
                ],
                body: [
                    ["Before and After-School Care", "$120 / per month"],
                    ["Language Immersion Program", "$60 / per semester"],
                    ["Transportation (optional)", "$80 / per month"],
                ],

                thickHeader: true,
            },
        ]
    },
};