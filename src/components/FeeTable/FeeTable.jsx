import BaseCard from '../BaseCard/BaseCard'
import styles from './FeeTable.module.css'

const FeeTable = ({ headers, body, thickHeader = false }) => {
    return (
            <div className={styles.tableWrapper}>
        <BaseCard className={styles.tableCard}>
                <table className={styles.tableHeader}>
                    <thead className={styles.thead}>
                        <tr>
                            {
                                headers.map((header, index) => (
                                    <th className={thickHeader ? styles.thickHeader : ''}>{header}</th>
                                ))
                            }
                        </tr>
                    </thead>
                </table>
                <div className={styles.gap}></div>
                <table className={styles.tableBody}>
                    <tbody className={styles.tbody}>
                        {
                            body.map((raws, index) => (
                                <tr>
                                    {
                                        raws.map((cell, index) => (
                                            <td>{cell}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </BaseCard>
            </div>
    )
}

export default FeeTable
