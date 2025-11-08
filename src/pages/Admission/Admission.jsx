import AdmissionProcessSection from '../../components/AdmissionProcessSection/AdmissionProcessSection'
import FeeStructureSection from '../../components/FeeStructureSection/FeeStructureSection'
import IntroPage from '../../components/IntroPage/IntroPage'
import styles from './Admission.module.css'
import { admissionsPageData } from './../../data/AdmissionsPageData'

const Admission = () => {
    return (
        <div>
            <IntroPage
                boxTitle={admissionsPageData.introPage.boxTitle}
                title={admissionsPageData.introPage.title}
                description={admissionsPageData.introPage.description}
            />
            <AdmissionProcessSection admissionData={admissionsPageData.process} />
            <FeeStructureSection feeData={admissionsPageData.features} />
        </div>
    )
}

export default Admission
