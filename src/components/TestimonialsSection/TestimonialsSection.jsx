import styles from './TestimonialsSection.module.css'
import Section from '../Section/Section'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import Container from '../Container/Container'
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import IconButton from '../IconButton/IconButton';
import { useEffect, useState } from 'react';

const TestimonialsSection = ({ testimonialsData }) => {

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
        const isLastSlide = currentIndex >= testimonialsData.length - slidesToShow;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? testimonialsData.length - slidesToShow : currentIndex - 1);
    };

    const movementPercentage = 100 / slidesToShow;

    return (
        <Section
            boxTitle={testimonialsData.pillTitle}
            title={testimonialsData.title}
            description={testimonialsData.description}
        >
            <Container className={styles.slider}>
                <div className={styles.cards}>
                    <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * movementPercentage}%)` }}>
                        {testimonialsData.items.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                avatar={testimonial.avatar}
                                name={testimonial.name}
                                comment={testimonial.comment}
                                className={styles.card}
                            />
                        ))}
                    </div>
                </div>
                <Container className={styles.buttons}>
                    <IconButton onClick={goToPrevious} className={styles.arrowButton} icon={<IoArrowBackSharp />} />
                    <IconButton onClick={goToNext} className={styles.arrowButton} icon={<IoArrowForwardSharp />} />
                </Container>
            </Container>
        </Section>
    )
}

export default TestimonialsSection
