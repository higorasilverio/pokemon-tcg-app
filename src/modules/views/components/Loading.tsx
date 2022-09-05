import * as loadingGif from '@/assets/loading.gif'
import styles from '@/styles/Loading.module.scss'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src={loadingGif} alt="loading gif image" width={'150px'} height={'320px'} />
    </div>
  )
}

export default Loading
