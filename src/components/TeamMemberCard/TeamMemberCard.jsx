import styles from './TeamMemberCard.module.css'
import BaseCard from '../BaseCard/BaseCard'
import IconButton from '../IconButton/IconButton'
import { IoIosMail } from "react-icons/io";

const TeamMemberCard = ({ profileImage, name, qualification, description }) => {
    return (
        <BaseCard className={styles.teamMemberCard}>
            <div className={styles.header}>
                <div className={styles.memberInfo}>
                    <img src={profileImage} alt={name + "img"} />
                    <h2>{name}</h2>
                </div>
                <IconButton icon={<IoIosMail />} className={styles.iconButton} />
            </div>
            <div className={styles.content}>
                <h3>{qualification}</h3>
                <p>{description}</p>
            </div>
        </BaseCard>
    )
}

export default TeamMemberCard
