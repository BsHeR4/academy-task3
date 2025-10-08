import Section from '../Section/Section'
import styles from './RoomsGallerySection.module.css'
import RoomsGalleryCard from '../RoomsGalleryCard/RoomsGalleryCard'
import Button from '../Button/Button'

const RoomsGallerySection = ({ roomsGalleryData }) => {

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
                        <Button type='normal'>{category}</Button>
                    ))
                }
            </div>
            <div className={styles.cards}>
                {
                    roomsGalleryData.sections.map((section, index) => (
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
