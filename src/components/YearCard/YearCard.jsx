import BaseCard from '../BaseCard/BaseCard'
import CubeShape from '../CubeShape/CubeShape'
import styles from './YearCard.module.css'

const YearCard = ({ year, lastYear = false, firstYear = false }) => {
    const layout = [3, 3, 3]

    return (
        <BaseCard className={styles.yearCardContainer}>
            <div className={styles.container}>
                {layout.map((numberOfShapes, rowIndex) => (
                    <div key={rowIndex}>
                        {Array.from({ length: numberOfShapes }).map((_, shapeIndex) => (
                            <CubeShape key={shapeIndex} cubeStyle='orange' />
                        ))}
                    </div>
                ))}
            </div>
            <p className={styles.year} >{year}</p>
            <div className={`${styles.circle}`}>
            </div>
            <div className={styles.verticalRectangular}>
                <div className={`${styles.innerCircle}`}>
                </div>
                <div className={`${styles.bottomHorizentalRectangular} ${lastYear && styles.hideBottomHorizentalRectangular}`}>
                </div>
                <div className={`${styles.topHorizentalRectangular} ${firstYear && styles.hideTopHorizentalRectangular}`}>
                </div>
            </div>
        </BaseCard>
    )
}

export default YearCard
