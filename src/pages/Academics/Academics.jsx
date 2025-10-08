import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'
import IntroPage from '../../components/IntroPage/IntroPage'
import RoomsGallerySection from '../../components/RoomsGallerySection/RoomsGallerySection'
import StudentsLearnSection from '../../components/StudentsLearnSection/StudentsLearnSection'
import styles from './Academics.module.css'

const Academics = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <FeaturesSection></FeaturesSection>
            <StudentsLearnSection />
            <RoomsGallerySection />
        </div>
    )
}

export default Academics
