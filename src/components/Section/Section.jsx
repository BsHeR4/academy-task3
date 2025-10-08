import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Section.module.css'

const Section = ({ children, boxTitle, title, description, className }) => {
    return (
        <section className={`${styles.section} whiteSpacing ${className}`}>
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
