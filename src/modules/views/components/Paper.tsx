import { ReactNode } from 'react'
import styles from '../../../styles/Paper.module.scss'

const Paper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.paper}>{children}</div>
}

export default Paper
