import styles from './RecognitionSection.module.css'
import Section from './../Section/Section'
import Container from '../Container/Container'
import BenefitCard from '../BenefitCard/BenefitCard'
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5'
import IconButton from '../IconButton/IconButton'
import { useEffect, useState } from 'react'

const RecognitionSection = ({ recognitionData }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 992) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToNext = () => {
        const isLastSlide = currentIndex >= recognitionData.items.length - slidesToShow;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? recognitionData.items.length - slidesToShow : currentIndex - 1);
    };

    const movementPercentage = 100 / slidesToShow;

    return (
        <Section
            boxTitle={recognitionData.pillTitle}
            title={recognitionData.title}
            description={recognitionData.description}
        >
            <Container className={styles.slider}>
                <div className={styles.recognitionCards}>
                    <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * movementPercentage}%)` }}>
                        {recognitionData.items.map((card, index) => (
                            <BenefitCard
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                className={styles.card}
                            />
                        ))}
                    </div>
                </div>
                <Container className={styles.sliderController}>
                    <p><span>{recognitionData.items.length - currentIndex - slidesToShow} </span>More Awards</p>
                    <div className={styles.buttons}>
                        <IconButton onClick={goToPrevious} className={styles.arrowButton} icon={<IoArrowBackSharp />} />
                        <IconButton onClick={goToNext} className={styles.arrowButton} icon={<IoArrowForwardSharp />} />
                    </div>
                </Container>
            </Container>

        </Section>
    )
}

export default RecognitionSection
