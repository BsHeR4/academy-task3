import HistorySection from '../../components/HistorySection/HistorySection'
import IntroPage from '../../components/IntroPage/IntroPage'
import RecognitionSection from '../../components/RecognitionSection/RecognitionSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <VisionSection></VisionSection>
            <RecognitionSection />
            <HistorySection />
        </div>
    )
}

export default AboutUs
