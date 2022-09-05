import styles from '@/styles/Layout.module.scss'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.layout}>{children}</div>
}

export default Layout
