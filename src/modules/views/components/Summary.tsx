import Image from 'next/image'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import styles from '../../../styles/Summary.module.scss'
import { Card } from '../../models/Card'

const Summary = memo(({ data }: { data: Card }) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/${data.id}`)
  }, [data, router])

  return (
    <div className={styles.summary} onClick={handleClick}>
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
          priority
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
