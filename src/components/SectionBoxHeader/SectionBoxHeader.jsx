import styles from './SectionBoxHeader.module.css'

const SectionBoxHeader = ({ children, className }) => {
    return (
        <div className={`${styles.sectionBoxHeader} ${styles.className}`}>
            <p>{children}</p>
        </div>
    )
}

export default SectionBoxHeader
