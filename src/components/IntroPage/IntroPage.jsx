import styles from './IntroPage.module.css'
import BaseCard from './../BaseCard/BaseCard'
import Container from './../Container/Container'
import SectionBoxHeader from './../SectionBoxHeader/SectionBoxHeader'
import CubeShape from './../CubeShape/CubeShape'

const IntroPage = ({ boxTitle, title, description }) => {
    const layout = [4, 3, 2, 1];

    return (
        <div className={styles.IntroPage}>
            <BaseCard className={styles.IntroPageCard}>
                <div className={styles.shapeContainer}>
                    {layout.map((numberOfShapes, rowIndex) => (
                        <div key={rowIndex} className={styles.container}>
                            {Array.from({ length: numberOfShapes }).map((_, shapeIndex) => (
                                <CubeShape key={shapeIndex} />
                            ))}
                        </div>
                    ))}
                </div>
                <Container className={styles.content}>
                    <div className={styles.head}>
                        <SectionBoxHeader>{boxTitle}</SectionBoxHeader>
                        <h2>{title}</h2>
                    </div>
                    <p>{description}</p>
                </Container>
            </BaseCard>
        </div>
    )
}

export default IntroPage;