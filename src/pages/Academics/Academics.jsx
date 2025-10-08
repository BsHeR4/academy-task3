import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'
import IntroPage from '../../components/IntroPage/IntroPage'
import RoomsGallerySection from '../../components/RoomsGallerySection/RoomsGallerySection'
import StudentsLearnSection from '../../components/StudentsLearnSection/StudentsLearnSection'
import { academicsPageData } from './../../data/academicsPageData.jsx'
import styles from './Academics.module.css'

const Academics = () => {
    return (
        <div>
            <IntroPage
                boxTitle={academicsPageData.introPage.boxTitle}
                title={academicsPageData.introPage.title}
                description={academicsPageData.introPage.description}
            />
            <FeaturesSection featuresData={academicsPageData.features} />
            <StudentsLearnSection studentLearnData={academicsPageData.learn} />
            <RoomsGallerySection roomsGalleryData={academicsPageData.gallery} />
        </div>
    )
}

export default Academics
