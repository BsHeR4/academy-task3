import BaseCard from '../BaseCard/BaseCard'
import FooterLinkColumn from '../FooterLinkColumn/FooterLinkColumn'
import IconButton from '../IconButton/IconButton'
import styles from './Footer.module.css'
import { TbMailFilled } from "react-icons/tb";
import { HiPhone } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = ({ footerData }) => {
    return (
        <footer className={styles.footer}>
            <BaseCard className={styles.footerCard}>
                <div className={styles.top}>
                    <div className={styles.leftColumn}>
                        <div className={styles.logo}>
                            <img src="imgs/Logo.svg" alt="" />
                            <p>{footerData.ourVision}</p>
                        </div>
                        <div className={styles.contacts} >
                            <div className={styles.contact}>
                                <IconButton className={styles.contactIcon} icon={<TbMailFilled />} />
                                <p>{footerData.contact.email}</p>
                            </div>
                            <div className={styles.contact}>
                                <IconButton className={styles.contactIcon} icon={<HiPhone />} />
                                <p>{footerData.contact.phone}</p>
                            </div>
                            <div className={styles.contact}>
                                <IconButton className={styles.contactIcon} icon={<HiMapPin />} />
                                <p>{footerData.contact.location}</p>
                            </div>
                        </div>
                    </div>
                    <FooterLinkColumn />
                </div>

                <div className={styles.middle}>
                    <div className={styles.terms}>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>

                    <div className={styles.social}>
                        <IconButton className={styles.socialIcon} icon={<IoLogoFacebook />} />
                        <IconButton className={styles.socialIcon} icon={<FaTwitter />} />
                        <IconButton className={styles.socialIcon} icon={<FaLinkedin />} />
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>
                        Copyright © [2023] Little Learners Academy. All rights reserved.
                    </p>
                </div>
            </BaseCard>
        </footer>
    )
}

export default Footer
