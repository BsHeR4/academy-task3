import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'
import IntroPage from '../../components/IntroPage/IntroPage'
import StudentsLearnSection from '../../components/StudentsLearnSection/StudentsLearnSection'
import styles from './Academics.module.css'

const Academics = () => {
    return (
        <div>
            <IntroPage></IntroPage>
            <FeaturesSection></FeaturesSection>
            <StudentsLearnSection />
        </div>
    )
}

export default Academics
