import StateBox from "../StateBox/StateBox"
import Container from "../Container/Container"
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <Container className={`${styles.hero} whiteSpacing`}>
            <div className={styles.heroImg}>
            </div>
            <Container className={styles.rightColumn}>
                <div>
                    <span className={styles.welcomeStatment}>Welcome to Little Learners Academy</span>
                    <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span> </h1>
                    <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                </div>
                <StateBox />
            </Container>
        </Container>
    )
}

export default Hero
