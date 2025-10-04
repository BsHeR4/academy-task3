import styles from './CubeShape.module.css'

const CubeShape = ({ cubeStyle = 'black', className }) => {

    let styleClass = cubeStyle == 'black' ? styles.blackCube : styles.orangeCube

    return (
        <div className={`${styles.cube} ${styleClass} ${className}`}>
            <div className={`${styles.box} ${styleClass}`}></div>
        </div>
    )
}

export default CubeShape
