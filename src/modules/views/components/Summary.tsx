import { Card } from '@/models/Card'
import styles from '@/styles/Summary.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { memo, useCallback, useState } from 'react'

const Summary = memo(({ data }: { data: Card }) => {
  const [src, setSrc] = useState(data.ldImageUrl)

  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/${data.id}`)
  }, [data, router])

  return (
    <div className={styles.summary} onClick={handleClick} data-cy="summary">
      <div className={styles.info}>
        <h3>{data.name}</h3>
      </div>
      <div className={styles.image}>
        <Image
          src={src}
          alt={`${data.name} pokemon card preview`}
          layout="responsive"
          width="100%"
          height="100%"
          priority
          placeholder="blur"
          blurDataURL="/assets/what-pokemon.webp"
          onError={() => setSrc('/assets/what-pokemon.webp')}
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
