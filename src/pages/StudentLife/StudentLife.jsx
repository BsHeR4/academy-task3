import styles from './StudentLife.module.css'
import IntroPage from '../../components/IntroPage/IntroPage'
import ExtracurricularActivitiesSection from '../../components/ExtracurricularActivitiesSection/ExtracurricularActivitiesSection'
import EventsAndCelebrationsSection from '../../components/EventsAndCelebrationsSection/EventsAndCelebrationsSection'
import { StudentLifePageData } from './../../data/StudentLifeData.jsx'
import StudentSupportSection from '../../components/StudentSupportSection/StudentSupportSection.jsx'

const StudentLife = () => {
    return (
        <div>
            <IntroPage
                boxTitle={StudentLifePageData.introPage.boxTitle}
                title={StudentLifePageData.introPage.title}
                description={StudentLifePageData.introPage.description}
            />
            <ExtracurricularActivitiesSection FeaturesData={StudentLifePageData.activities} />
            <EventsAndCelebrationsSection eventsData={StudentLifePageData.events} />
            <StudentSupportSection achievementsData={StudentLifePageData.support} />
        </div>
    )
}

export default StudentLife
