import React from 'react'
import styles from './RoomsGalleryCard.module.css'
import BaseCard from '../BaseCard/BaseCard'
import Container from '../Container/Container'
import IconButton from '../IconButton/IconButton'
import { useEffect, useState } from 'react'
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5'

const RoomsGalleryCard = ({ title, description, imgs }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setSlidesToShow(1);
            }
            else if (window.innerWidth <= 992 && window.innerWidth > 700) {
                setSlidesToShow(2);
            }
            else {
                setSlidesToShow(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToNext = () => {
        const isLastSlide = currentIndex >= imgs.length - slidesToShow;
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        setCurrentIndex(isFirstSlide ? imgs.length - slidesToShow : currentIndex - 1);
    };

    const movementPercentage = 100 / slidesToShow;

    return (
        <BaseCard className={styles.slider}>
            <div className={styles.imgs}>
                <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * movementPercentage}%)` }} >
                    {imgs.map((img, index) => (
                        <img className={styles.img} src={img} alt="" />
                    ))}
                </div>
            </div>
            <Container className={styles.header}>
                <h2>{title}</h2>
                <div className={styles.buttons}>
                    <IconButton onClick={goToPrevious} className={styles.arrowButton} icon={<IoArrowBackSharp />} />
                    <IconButton onClick={goToNext} className={styles.arrowButton} icon={<IoArrowForwardSharp />} />
                </div>
            </Container>
            <p>{description}</p>
        </BaseCard>
    )
}

export default RoomsGalleryCard
