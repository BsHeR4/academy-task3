import styles from './Banner.module.css'
import Container from '../Container/Container'
import { IoArrowForwardSharp } from "react-icons/io5";

const Banner = ({ text }) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.banner}`}>
                <Container className={styles.outerContainer}>
                    <img className={styles.leftImg} src="/imgs/BannerAbstractDesignLeft.png" alt="" />
                    <Container className={styles.innerContainer}>
                        <img className={styles.leftAb} src="/imgs/BannerAbstractCircleLeft.png" alt="" />
                        <div className={styles.content}>
                            <p>{text}</p>
                            <IoArrowForwardSharp className={styles.arrow} />
                        </div>
                        <img className={styles.rightAb} src="/imgs/BannerAbstractCircleRight.png" alt="" />
                    </Container>
                    <img className={styles.rightImg} src="/imgs/BannerAbstractDesignRight.png" alt="" />
                </Container>

            </div>
        </div>
    )
}

export default Banner
