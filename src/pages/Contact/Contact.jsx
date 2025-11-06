import IntroPage from './../../components/IntroPage/IntroPage'
import styles from './Contact.module.css'
import { TbMailFilled } from "react-icons/tb";
import { HiPhone } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { HiClock } from "react-icons/hi2";
import ContactButton from '../../components/ContactButton/ContactButton';
import StudentInformation from '../../components/StudentInformation/StudentInformation';

const Contact = () => {
    return (
        <div>
            <IntroPage
                boxTitle={"Contact Us"}
                title={"Feel Free To Connect With Us"}
                description={"We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"}
            >
                <div className={styles.items}>
                    <ContactButton
                        icon={<TbMailFilled />}
                        title={"hello@littlelearners.com"}
                    />
                    <ContactButton
                        icon={<HiPhone />}
                        title={"+91 91813 23 2309"}
                    />
                    <ContactButton
                        icon={<HiMapPin />}
                        title={"Somewhere in the World"}
                    />
                    <ContactButton
                        icon={<HiClock />}
                        title={"Office Hours - 9am - 6 pm"}
                    />
                </div>
            </IntroPage>

            <StudentInformation />
        </div>
    )
}

export default Contact
