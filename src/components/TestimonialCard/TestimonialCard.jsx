import styles from './TestimonialCard.module.css'
import BaseCard from './../BaseCard/BaseCard'
import Container from '../Container/Container'

const TestimonialCard = ({ avatar, name, comment, className }) => {
    return (
        <BaseCard className={styles.testimonialCard}>
            <div className={`${styles.avatar}`}>
                <img src={avatar} alt="" />
            </div>
            <p className={styles.clientName}>{name}</p>
            <Container className={styles.stars}>
                <img src="imgs/star.svg" alt="" />
                <img src="imgs/star.svg" alt="" />
                <img src="imgs/star.svg" alt="" />
                <img src="imgs/star.svg" alt="" />
                <img src="imgs/star.svg" alt="" />
            </Container>
            <p className={styles.comment}>{comment}</p>
        </BaseCard>
    )
}
export default TestimonialCard
