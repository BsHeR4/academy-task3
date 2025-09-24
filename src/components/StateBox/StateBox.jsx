import Container from "../Container/Container"
import styles from "./StateBox.module.css"

const StateBox = ({ stats }) => {
    return (
        <Container className={styles.container}>
            {stats.map((stat, index) => {
                return (
                    <div className={styles.item} key={index}>
                        <span>{stat.number}</span>
                        <p>{stat.label}</p>
                    </div>
                );
            })}
        </Container>
    )
}

export default StateBox