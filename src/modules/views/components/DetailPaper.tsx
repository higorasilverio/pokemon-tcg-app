import { ReactNode } from 'react'
import styles from '../../../styles/DetailPaper.module.scss'

const DetailPaper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.paper}>{children}</div>
}

export default DetailPaper
