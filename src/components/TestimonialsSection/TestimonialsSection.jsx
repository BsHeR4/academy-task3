import styles from './TestimonialsSection.module.css'
import Section from '../Section/Section'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import Container from '../Container/Container'
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import IconButton from '../IconButton/IconButton';
import { useEffect, useState } from 'react';

const testimonialsData = [
    {
        avatar: "/imgs/avatar1.png",
        name: 'Jennifer B',
        comment: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        avatar: "/imgs/avatar1.png",
        name: 'David K',
        comment: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
        avatar: "/imgs/avatar1.png",
        name: 'Emily S',
        comment: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
        avatar: "/imgs/avatar1.png",
        name: 'Sarah L',
        comment: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
        avatar: "/imgs/avatar1.png",
        name: 'Michael P',
        comment: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    }
];

const TestimonialsSection = () => {

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
            boxTitle={'Their Happy Words 🤗'}
            title={'Our Testimonials'}
            description={"Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."}
        >
            <Container className={styles.slider}>
                <div className={styles.cards}>
                    <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * movementPercentage}%)` }}>
                        {testimonialsData.map((testimonial, index) => (
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
