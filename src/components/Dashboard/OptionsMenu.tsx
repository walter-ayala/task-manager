import styled from 'styled-components'
import DeleteIcon from '../../assets/icons/DeleteIcon'
import EditIcon from '../../assets/icons/EditIcon'
import OptionsTaskCard from '../../assets/icons/OptionsTaskCard'
import useDeleteTask from '../../hooks/Dashboard/useDeleteTask'
import CustomModal from '../CustomModal'
import DeleteTask from './DeleteTask'

interface Props {
  id: string
}

const OptionsMenu: React.FC<Props> = ({ id }) => {
  const { isOpenModal, toggleModal, loadingDeleteTask, onDeleteTask, errorDeleteTask } = useDeleteTask(id)

  return (
    <div>
      <OptionsContainer>
        <OptionsTaskCard />
        <Menu>
          <OptionButton>
            <EditIcon />
            Edit
          </OptionButton>
          <OptionButton onClick={toggleModal}>
            <DeleteIcon />
            Delete
          </OptionButton>
        </Menu>
      </OptionsContainer>
      <CustomModal isOpen={isOpenModal} toggleModal={toggleModal} >
        <DeleteTask toggleModal={toggleModal} onDeleteTask={onDeleteTask} loadingDeleteTask={loadingDeleteTask} errorDeleteTask={errorDeleteTask} />
      </CustomModal>
    </div>
  )
}

const OptionsContainer = styled.div`
  position: relative;
  display: flex;
  padding: 10px 2px;
`

export const Menu = styled.div`
  position: absolute;
  z-index: 10;
  width: 138px;
  display: none;
  margin-top: 10px;
  right: 0;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  ${OptionsContainer}:hover & {
    display: flex;
  }
  border: 1px solid ${(props) => props.theme.neutral};
  background-color: ${(props) => props.theme.backgroundLight};
`

const OptionButton = styled.button`
  display: flex;
  column-gap: 11px;
  padding: 4px 16px 4px 16px;
  background: transparent;
  border: none;
  width: 138px;
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75;
  justify-content: center;
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`

export default OptionsMenu
