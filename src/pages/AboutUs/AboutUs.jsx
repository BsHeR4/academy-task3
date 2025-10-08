import HistorySection from '../../components/HistorySection/HistorySection'
import IntroPage from '../../components/IntroPage/IntroPage'
import RecognitionSection from '../../components/RecognitionSection/RecognitionSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import TeamMemberSection from '../../components/TeamMemberSection/TeamMemberSection'
import { aboutPageData } from './../../data/AboutPageData.jsx'
import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div>
            <IntroPage
                boxTitle={aboutPageData.introPage.boxTitle}
                title={aboutPageData.introPage.title}
                description={aboutPageData.introPage.description}
            />

            <VisionSection visionData={aboutPageData.missionVision} />
            <RecognitionSection recognitionData={aboutPageData.awards} />
            <HistorySection historyData={aboutPageData.history} />
            <TeamMemberSection teamData={aboutPageData.team} />
        </div>
    )
}

export default AboutUs
