import IntroPage from './../../components/IntroPage/IntroPage'
import styles from './Contact.module.css'
import { TbMailFilled } from "react-icons/tb";
import { HiPhone, HiMapPin, HiClock } from "react-icons/hi2";
import ContactButton from '../../components/ContactButton/ContactButton';
import StudentInformation from '../../components/StudentInformation/StudentInformation';
import { ContactPageData } from './../../data/ContactPageData'

const Contact = () => {
    const icons = {
        TbMailFilled,
        HiPhone,
        HiMapPin,
        HiClock,
    };
    return (
        <div>
            <IntroPage
                boxTitle={ContactPageData.introPage.boxTitle}
                title={ContactPageData.introPage.title}
                description={ContactPageData.introPage.description}
            >
                <div className={styles.items}>
                    {ContactPageData.introPage.contacts.map((contact, index) => {
                        const IconComponent = icons[contact.icon]
                        return <ContactButton key={index} icon={<IconComponent />} title={contact.title} />
                    })}
                </div>
            </IntroPage>

            <StudentInformation studentInformationData={ContactPageData.info} />
        </div>
    )
}

export default Contact
