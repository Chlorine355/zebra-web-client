import { ReportStatusEnum, STATUS_COLORS, STATUS_LABELS } from "@shared/model/data/types"
import styles from './StatusBadge.module.scss'

export const StatusBadge = ({ status, gap }: { status: ReportStatusEnum, gap?: number }) => {
    return (<div className={styles.status} style={gap ? { gap } : undefined}>
        <div className={styles.circle} style={{ backgroundColor: STATUS_COLORS[status] }} />
        {STATUS_LABELS[status]}
    </div>)
}