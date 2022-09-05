import { Card } from '@/models/Card'
import styles from '@/styles/Detail.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import DownIcon from './icons/DownIcon'
import UpIcon from './icons/UpIcon'
import Modal from './Modal'

const Detail = ({ data }: { data: Card }) => {
  const [src, setSrc] = useState<string>(data.hdImageUrl)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles.detail}>
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
        <div className={styles.header}>
          <h2>{data.name}</h2>
          <span>{data.id}</span>
        </div>
        <div className={styles.fighting}>
          <div className={styles.types}>
            <h3>{data.types}</h3>
          </div>
          <div className={styles.feat}>
            <div className={styles.resistant}>
              <UpIcon />
              {data.resistances?.length ? data.resistances.map(res => res.type).join(', ') : 'None'}
            </div>
            <div className={styles.weak}>
              <DownIcon />
              {data.weaknesses?.length ? data.weaknesses.map(res => res.type).join(', ') : 'None'}
            </div>
          </div>
        </div>
        <button type="button" onClick={() => setIsOpen(true)}>
          Attacks
        </button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={data.attacks} />
    </div>
  )
}

export default Detail
