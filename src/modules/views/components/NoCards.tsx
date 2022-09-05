import Image from 'next/image'
import * as nocard from '../../../../public/assets/not-found.gif'
import styles from '../../../styles/NoCards.module.scss'

const NoCards = () => {
  return (
    <div className={styles.nocard}>
      <div className={styles.text}>
        <h3>Not found...</h3>
      </div>
      <Image src={nocard} alt="no card found gif image" width={'180px'} height={'320px'} />
    </div>
  )
}

export default NoCards
