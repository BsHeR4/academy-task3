import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Section.module.css'

const Section = ({ children, boxTitle, title, description }) => {
    return (
        <section className={`${styles.section} whiteSpacing`}>
            <SectionHeader
                boxTitle={boxTitle}
                title={title}
                description={description}
            />
            {children}
        </section>
    )
}

export default Section
