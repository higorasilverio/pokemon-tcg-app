import styles from '@/styles/Modal.module.scss'
import { isEmpty } from 'lodash'
import { Dispatch, SetStateAction } from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '600px',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#3b3b3b',
    color: '#fff',
    position: 'relative',
    paddingTop: '2rem'
  }
}

type AttackProperties = {
  name: string
  convertedEnergyCost: number
  damage: string
  text: string
  cost: string[]
}

type ModalProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  data: AttackProperties[]
}

ReactModal.setAppElement('#__next')

const Modal = ({ isOpen, setIsOpen, data }: ModalProps) => {
  const closeModal = () => setIsOpen(false)

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles as any}
      contentLabel="Example Modal"
    >
      <div>
        {data.map(attack => (
          <div key={attack.name} className={styles.attack} data-cy="attack-card">
            <div className={styles.name}>
              <h3>{attack.name}</h3>
            </div>
            <div className={styles.damage}>
              <span className={styles.control}>
                <b>Damage:</b> {attack.damage || 'None'}
              </span>
              <span className={styles.control}>
                <b>Energy Cost:</b> {attack.convertedEnergyCost}
                {isEmpty(attack.cost) ? '' : ` (${attack.cost?.join(', ')})`}
              </span>
            </div>
            {attack.text && <div className={styles.description}>{attack.text}</div>}
          </div>
        ))}
      </div>
      <button className={styles.btn} type="button" onClick={closeModal} data-cy="close-button">
        x
      </button>
    </ReactModal>
  )
}

export default Modal
