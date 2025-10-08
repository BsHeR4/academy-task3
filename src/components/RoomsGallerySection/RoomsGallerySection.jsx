import Section from '../Section/Section'
import styles from './RoomsGallerySection.module.css'
import RoomsGalleryCard from '../RoomsGalleryCard/RoomsGalleryCard'
import Button from '../Button/Button'
import { useState } from 'react'

const RoomsGallerySection = ({ roomsGalleryData }) => {


    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSections = roomsGalleryData.sections.filter(section => {

        return activeCategory === 'All' || section.title === activeCategory;
    })

    return (
        <Section
            className
            boxTitle={roomsGalleryData.pillTitle}
            title={roomsGalleryData.title}
            description={roomsGalleryData.description}
        >
            <div className={styles.categories}>
                {
                    roomsGalleryData.categories.map((category, index) => (
                        <Button onClick={() => setActiveCategory(category)}
                            type='normal'
                            active={category === activeCategory ? true : false}
                        >
                            {category}
                        </Button>
                    ))
                }
            </div>
            <div className={styles.cards}>
                {
                    filteredSections.map((section, index) => (
                        <RoomsGalleryCard
                            imgs={section.images}
                            title={section.title}
                            description={section.description}
                            key={index}
                        />
                    ))
                }
            </div>
        </Section>
    )
}

export default RoomsGallerySection
