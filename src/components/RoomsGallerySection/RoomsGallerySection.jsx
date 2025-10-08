import Section from '../Section/Section'
import styles from './RoomsGallerySection.module.css'
import RoomsGalleryCard from '../RoomsGalleryCard/RoomsGalleryCard'
import Button from '../Button/Button'

const RoomsGallerySection = () => {
    const categories = ['All', 'Classrooms', 'Library', 'Science Lab', 'Computer Lab', 'Garden and Nature Area']

    return (
        <Section
            className
            boxTitle={"Our Gallery"}
            title={"Our Rooms Gallery"}
            description={"Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."}
        >
            <div className={styles.categories}>
                {
                    categories.map((category, index) => (
                        <Button type='normal'>{category}</Button>
                    ))
                }
            </div>
            <div className={styles.cards}>
                <RoomsGalleryCard />
                <RoomsGalleryCard />
                <RoomsGalleryCard />
                <RoomsGalleryCard />
            </div>
        </Section>
    )
}

export default RoomsGallerySection
