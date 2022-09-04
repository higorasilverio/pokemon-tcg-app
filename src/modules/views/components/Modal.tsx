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
    maxWidth: '90vw',
    minHeight: '50vh',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3b3b3b',
    color: '#fff'
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
          <div key={attack.name} style={{ marginBottom: '1rem' }}>
            <h3>{attack.name}</h3>
            <div>
              Energy Cost: {attack.convertedEnergyCost} ({attack.cost?.join(', ')})
            </div>
            <div>Damage: {attack.damage}</div>
            <div>{attack.text}</div>
          </div>
        ))}
      </div>
      <button type="button" onClick={closeModal}>
        close
      </button>
    </ReactModal>
  )
}

export default Modal
