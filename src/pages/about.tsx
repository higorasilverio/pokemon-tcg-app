import type { NextPage } from 'next'
import styles from '../styles/About.module.scss'

const About: NextPage = () => (
  <div className={styles.container}>
    <h1>About Page</h1>
    <div className={styles.content}>About Content</div>
  </div>
)

export default About
