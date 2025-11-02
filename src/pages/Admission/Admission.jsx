import AdmissionProcessSection from '../../components/AdmissionProcessSection/AdmissionProcessSection'
import FeeStructureSection from '../../components/FeeStructureSection/FeeStructureSection'
import IntroPage from '../../components/IntroPage/IntroPage'
import styles from './Admission.module.css'

const Admission = () => {
    return (
        <div>
            <IntroPage
                boxTitle={"Admission"}
                title={"Join Our Family of Young Learners"}
                description={"At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"}
            />
            <AdmissionProcessSection />
            <FeeStructureSection />
        </div>
    )
}

export default Admission
