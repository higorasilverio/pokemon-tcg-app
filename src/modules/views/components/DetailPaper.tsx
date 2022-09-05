import styles from '@/styles/DetailPaper.module.scss'
import { ReactNode } from 'react'

const DetailPaper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.paper}>{children}</div>
}

export default DetailPaper
