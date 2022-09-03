import Image from 'next/image'
import { memo } from 'react'
import styles from '../../../styles/Summary.module.scss'
import { Card } from '../../models/Card'

const Summary = memo(({ data }: { data: Card }) => {
  return (
    <div className={styles.summary} onClick={() => alert(data.name)}>
      <div className={styles.info}>
        <h3>{data.name}</h3>
      </div>
      <div className={styles.image}>
        <Image
          src={data.ldImageUrl}
          alt="card preview"
          layout="responsive"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.id}>id: {data.id}</h4>
      </div>
      <div className={styles.info}>
        <h4 className={styles.types}>{data.types}</h4>
      </div>
    </div>
  )
})

Summary.displayName = 'CardSummary'

export default Summary
