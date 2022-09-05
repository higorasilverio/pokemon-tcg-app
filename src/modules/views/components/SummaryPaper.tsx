import styles from '@/styles/SummaryPaper.module.scss'
import { ReactNode } from 'react'

const SummaryPaper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.paper}>{children}</div>
}

export default SummaryPaper
