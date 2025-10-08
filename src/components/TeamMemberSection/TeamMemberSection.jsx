import styles from './TeamMemberSection.module.css'
import Section from './../Section/Section'
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard'

const TeamMemberSection = ({ teamData }) => {
    return (
        <Section
            boxTitle={teamData.pillTitle}
            title={teamData.title}
            description={teamData.description}
        >
            <div className={styles.teamCards}>
                {
                    teamData.members.map((member, index) => (
                        <TeamMemberCard
                            profileImage={member.profileImage}
                            name={member.name}
                            qualification={member.qualification}
                            description={member.description}
                            key={index}
                        />
                    ))
                }
            </div>
        </Section>
    )
}

export default TeamMemberSection
