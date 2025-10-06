import styles from './TeamMemberCard.module.css'
import BaseCard from '../BaseCard/BaseCard'
import IconButton from '../IconButton/IconButton'
import { IoIosMail } from "react-icons/io";

const TeamMemberCard = () => {
    return (
        <BaseCard className={styles.teamMemberCard}>
            <div className={styles.header}>
                <div className={styles.memberInfo}>
                    <img src="imgs/teamAvatar1.png" alt="" />
                    <h2>Ms. Sarah Anderson</h2>
                </div>
                <IconButton icon={<IoIosMail />} className={styles.iconButton} />
            </div>
            <div className={styles.content}>
                <h3>Qualification: Bachelor's Degree in Early Childhood Education</h3>
                <p>Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</p>
            </div>
        </BaseCard>
    )
}

export default TeamMemberCard
