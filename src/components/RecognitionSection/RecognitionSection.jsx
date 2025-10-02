import styles from './RecognitionSection.module.css'
import Section from './../Section/Section'
import Container from '../Container/Container'
import BenefitCard from '../BenefitCard/BenefitCard'
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5'
import IconButton from '../IconButton/IconButton'
import { useEffect, useState } from 'react'

const RecognitionSection = () => {

    const cards = [
        {
            icon: 'imgs/educationIcon.svg',
            title: 'Outstanding Early Childhood Education Awar',
            description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            icon: 'imgs/steamIcon.svg',
            title: 'Innovative STEAM Education Award',
            description: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            icon: 'imgs/stewardshipIcon.svg',
            title: 'Environmental Stewardship Award',
            description: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        },
        {
            icon: 'imgs/educationIcon.svg',
            title: 'Outstanding Early Childhood Education Awar',
            description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            icon: 'imgs/steamIcon.svg',
            title: 'Innovative STEAM Education Award',
            description: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            icon: 'imgs/stewardshipIcon.svg',
            title: 'Environmental Stewardship Award',
            description: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        },
    ]

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
        const isLastSlide = currentIndex >= cards.length - slidesToShow;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? cards.length - slidesToShow : currentIndex - 1);
    };

    const movementPercentage = 100 / slidesToShow;

    return (
        <Section
            boxTitle={"Our Achievements"}
            title={"Our Awards and Recognitions"}
            description={"Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."}
        >
            <Container className={styles.slider}>
                <div className={styles.recognitionCards}>
                    <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * movementPercentage}%)` }}>
                        {cards.map((card, index) => (
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
                    <p><span>{cards.length - currentIndex - slidesToShow} </span>More Awards</p>
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
