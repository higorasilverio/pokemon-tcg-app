import styles from '../../../styles/Paper.module.scss'
import { Card } from '../../models/Card'
import { cardMock } from '../mock/cardMock'
import Summary from './Summary'

const Paper = () => {
  return (
    <div className={styles.paper}>
      <Summary data={new Card(cardMock)} />
    </div>
  )
}

export default Paper
