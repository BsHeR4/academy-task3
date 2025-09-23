import PageCard from '../PageCard/PageCard'
import Section from '../Section/Section'
import styles from './PagesSection.module.css'

const PagesSection = () => {
    return (
        <Section
            boxTitle={'Explore More'}
            title={'Navigate through our Pages'}
            description={"Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"}
        >
            <div className={styles.pages}>
                <PageCard
                    title={'About Us'}
                    description={"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."}
                />
                <PageCard
                    title={'About Us'}
                    description={"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."}
                />
                <PageCard
                    title={'About Us'}
                    description={"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."}
                />
                <PageCard
                    title={'About Us'}
                    description={"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."}
                />
            </div>
        </Section>
    )
}

export default PagesSection
