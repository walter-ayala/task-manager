import { DELETE_TASK } from './../../api/Dashboard/mutations/deleteTask'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_TASKS } from '../../api/Dashboard/query/getTasks'

const useDeleteTask = (idTask: string) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [deleteTask, { loading: loadingDeleteTask, error: errorDeleteTask }] = useMutation(DELETE_TASK, {
    variables: {
      id: idTask
    },
    onCompleted () {
      toggleModal()
    },
    refetchQueries: [{ query: GET_TASKS }, 'GetTasks']
  })

  const toggleModal = () => {
    setIsOpenModal((prevState) => !prevState)
  }

  const onDeleteTask = async () => {
    await deleteTask()
  }

  return { isOpenModal, toggleModal, loadingDeleteTask, onDeleteTask, errorDeleteTask }
}

export default useDeleteTask
