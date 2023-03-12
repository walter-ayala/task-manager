import Modal from 'styled-react-modal'
import { type Modals } from '../types'

const CustomModal: React.FC<Modals> = ({ isOpen, toggleModal, children }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      {children}
    </StyledModal>
  )
}

const StyledModal = Modal.styled`
  display: flex;
  width: auto;
  max-width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props: { theme: { backgroundModal: string } }) => props.theme.backgroundModal};
`

export default CustomModal
