import styles from './TestimonialsSection.module.css'
import Section from '../Section/Section'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import Container from '../Container/Container'
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import IconButton from '../IconButton/IconButton';
const TestimonialsSection = () => {
    return (
        <Section
            boxTitle={'Their Happy Words 🤗'}
            title={'Our Testimonials'}
            description={"Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."}
        >
            <Container>
                <IconButton className={styles.arrowButton} icon={<IoArrowBackSharp />} />
                <TestimonialCard
                    avatar={"/imgs/avatar1.png"}
                    name={'Jennifer B'}
                    comment={"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"}
                />
                <TestimonialCard
                    avatar={"/imgs/avatar1.png"}
                    name={'Jennifer B'}
                    comment={"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"}
                />
                <TestimonialCard
                    avatar={"/imgs/avatar1.png"}
                    name={'Jennifer B'}
                    comment={"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"}
                />
                <IconButton className={styles.arrowButton} icon={<IoArrowForwardSharp />} />
            </Container>
        </Section>
    )
}

export default TestimonialsSection
