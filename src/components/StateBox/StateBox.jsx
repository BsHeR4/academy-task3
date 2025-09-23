import Container from "../Container/Container"
import styles from "./StateBox.module.css"

const StateBox = () => {
    return (
        <Container className={styles.container}>
            <div className="item">
                <span>+7000</span>
                <p>Students Passed Out</p>
            </div>
            <div className="item">
                <span>+37</span>
                <p>Awards & Recognitions</p>
            </div>
            <div className="item">
                <span>+15</span>
                <p>Experience Educators</p>
            </div>
        </Container>
    )
}

export default StateBox