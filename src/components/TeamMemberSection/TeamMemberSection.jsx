import styles from './TeamMemberSection.module.css'
import Section from './../Section/Section'
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard'

const TeamMemberSection = () => {
    return (
        <Section
            boxTitle={"Our Teachers With Experties"}
            title={"Our Team Members"}
            description={"At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."}
        >
            <div className={styles.teamCards}>
                <TeamMemberCard></TeamMemberCard>
                <TeamMemberCard></TeamMemberCard>
                <TeamMemberCard></TeamMemberCard>
                <TeamMemberCard></TeamMemberCard>
            </div>
        </Section>
    )
}

export default TeamMemberSection
