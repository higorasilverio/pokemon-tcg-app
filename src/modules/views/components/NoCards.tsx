import * as nocard from '@/assets/not-found.gif'
import styles from '@/styles/NoCards.module.scss'
import Image from 'next/image'

const NoCards = () => {
  return (
    <div className={styles.nocard} data-cy="no-card">
      <div className={styles.text}>
        <h3>Not found...</h3>
      </div>
      <Image src={nocard} alt="no card found gif image" width={'180px'} height={'320px'} />
    </div>
  )
}

export default NoCards
