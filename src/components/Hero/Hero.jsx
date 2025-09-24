import StateBox from "../StateBox/StateBox"
import Container from "../Container/Container"
import styles from "./Hero.module.css"
import { useEffect, useState } from "react";

const Hero = ({ heroData }) => {
    const numberOfDots = 22;
    const rotationMultiplier = 1.4;

    const startRadius = 30;
    const growthFactor = 1.1;
    const center = { x: 50, y: 50 };

    const dots = Array.from({ length: numberOfDots });

    const [startSize, setStartSize] = useState(48.15);
    const [endSize, setEndSize] = useState(11.48);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1920) {
                setStartSize(57.46);
                setEndSize(14.18);
            } else if (width > 992) {
                setStartSize(48.15);
                setEndSize(11.48);
            } else {
                setStartSize(29.12);
                setEndSize(7.16);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Container className={`${styles.hero} whiteSpacing`}>
            <div className={styles.heroImg}>
                <div className={`${styles.circle} ${styles.leftTopCircle}`}></div>
                <div className={`${styles.horizinalShape} ${styles.topHorizinalShape}`}></div>
                <div className={`${styles.verticalShape} ${styles.leftVerticalShape}`}></div>
                <div className={`${styles.circle} ${styles.rightTopCircle}`}></div>
                <div className={`${styles.circle} ${styles.rightBottomCircle}`}></div>
                <div className={`${styles.verticalShape} ${styles.rightVerticalShape}`}></div>
                <div className={`${styles.horizinalShape} ${styles.bottomHorizinalShape}`}></div>
                <div className={`${styles.circle} ${styles.leftBottomCircle}`}></div>
                <div className={styles.container}>
                    {dots.map((_, index) => {
                        const angleInDegrees = (index / numberOfDots) * 310 * rotationMultiplier - 35;
                        const angleInRadians = angleInDegrees * (Math.PI / 160) + 1.3;
                        const currentRadius = startRadius + (index * growthFactor);

                        const x = center.x - currentRadius * Math.cos(angleInRadians);
                        const y = center.y + currentRadius * Math.sin(angleInRadians);

                        const progress = index / (numberOfDots - 1);
                        const currentSize = startSize - (startSize - endSize) * progress;

                        return (
                            <div
                                key={index}
                                className={styles.dot}
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    width: `${currentSize}px`,
                                    height: `${currentSize}px`,
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <Container className={styles.rightColumn}>
                <div>
                    <span className={styles.welcomeStatment}>{heroData.welcomeStatement}</span>
                    <h1>{heroData.titlePart1}<span>{heroData.titlePart2}</span> </h1>
                    <p>{heroData.description}</p>
                </div>
                <StateBox stats={heroData.stats} />
            </Container>
        </Container >
    )
}

export default Hero
