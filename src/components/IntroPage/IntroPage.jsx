import styles from './IntroPage.module.css'
import BaseCard from './../BaseCard/BaseCard'
import Container from './../Container/Container'
import SectionBoxHeader from './../SectionBoxHeader/SectionBoxHeader'

const Shape = () => (
    <div className={styles.shape}>
        <div className={styles.blackBox}></div>
    </div>
);

const IntroPage = () => {
    const layout = [4, 3, 2, 1];

    return (
        <div className={styles.IntroPage}>
            <BaseCard className={styles.IntroPageCard}>
                <div className={styles.shapeContainer}>
                    {layout.map((numberOfShapes, rowIndex) => (
                        <div key={rowIndex} className={styles.container}>
                            {Array.from({ length: numberOfShapes }).map((_, shapeIndex) => (
                                <Shape key={shapeIndex} />
                            ))}
                        </div>
                    ))}
                </div>
                <Container className={styles.content}>
                    <div className={styles.head}>
                        <SectionBoxHeader>Overview</SectionBoxHeader>
                        <h2>Welcome to Little Learners Academy</h2>
                    </div>
                    <p>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
                </Container>
            </BaseCard>
        </div>
    )
}

export default IntroPage;