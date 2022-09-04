import { ReactNode } from 'react'
import styles from '../../../styles/SummaryPaper.module.scss'

const SummaryPaper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.paper}>{children}</div>
}

export default SummaryPaper
