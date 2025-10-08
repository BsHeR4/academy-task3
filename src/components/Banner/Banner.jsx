import styles from './Banner.module.css'
import Container from '../Container/Container'
import { IoArrowForwardSharp } from "react-icons/io5";

const Banner = ({ text }) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.banner}`}>
                <Container className={styles.outerContainer}>
                    <div className={styles.imgs}>
                        <img className={styles.leftImg} src="/academy-task3/imgs/BannerAbstractDesignLeft.png" alt="" />
                        <img className={styles.leftAb} src="/academy-task3/imgs/BannerAbstractCircleLeft.png" alt="" />
                    </div>
                    <Container className={styles.innerContainer}>
                        <div className={styles.content}>
                            <p>{text}</p>
                            <IoArrowForwardSharp className={styles.arrow} />
                        </div>
                    </Container>
                    <div className={styles.imgs}>
                        <img className={styles.rightAb} src="/academy-task3/imgs/BannerAbstractCircleRight.png" alt="" />
                        <img className={styles.rightImg} src="/academy-task3/imgs/BannerAbstractDesignRight.png" alt="" />
                    </div>
                </Container>

            </div>
        </div>
    )
}

export default Banner
