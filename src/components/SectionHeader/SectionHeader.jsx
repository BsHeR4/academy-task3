import SectionBoxHeader from '../SectionBoxHeader/SectionBoxHeader'
import styles from './SectionHeader.module.css'
import Container from '../Container/Container'

const SectionHeader = ({ boxTitle, title, description, className }) => {
    return (
        <Container className={styles.sectionHeader}>
            <SectionBoxHeader>
                {boxTitle}
            </SectionBoxHeader>
            <h2 className={styles.headerTitle}>{title}</h2>
            <p className={styles.headerDescription}>{description}</p>
        </Container>
    )
}

export default SectionHeader
