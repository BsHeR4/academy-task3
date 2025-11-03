import styles from './StudentLife.module.css'
import IntroPage from '../../components/IntroPage/IntroPage'
import ExtracurricularActivitiesSection from '../../components/ExtracurricularActivitiesSection/ExtracurricularActivitiesSection'
import { pageData } from './../Home/HomeData'
import EventsAndCelebrationsSection from '../../components/EventsAndCelebrationsSection/EventsAndCelebrationsSection'
import { academicsPageData } from './../../data/academicsPageData.jsx'
import StudentSupportSection from '../../components/StudentSupportSection/StudentSupportSection.jsx'

const StudentLife = () => {
    return (
        <div>
            <IntroPage
                boxTitle={"Enriching Student Life"}
                title={"Embracing Learning with Discovery and Joy"}
                description={"Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."}
            />
            <ExtracurricularActivitiesSection FeaturesData={pageData.benefits} />
            <EventsAndCelebrationsSection eventsData={academicsPageData.learn} />
            <StudentSupportSection achievementsData={pageData.benefits} />
        </div>
    )
}

export default StudentLife
