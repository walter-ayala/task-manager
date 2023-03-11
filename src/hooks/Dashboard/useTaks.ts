import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_TASKS } from '../../api/Dashboard/query/getTasks'
import { type TaskList } from '../../types'

const useTaks = () => {
  const [tasks, setTasks] = useState<TaskList[]>([])

  const { loading, error, data } = useQuery(GET_TASKS)

  const taskClassification = () => {
    let tasksToClassify = [...data.tasks]
    const tasksLists = []

    while (tasksToClassify.length > 0) {
      const tasksFiltered = tasksToClassify
        .filter(
          task => task.status === tasksToClassify[0].status
        )
      const task = {
        title: tasksToClassify[0].status,
        values: tasksFiltered
      }
      tasksLists.push(task)
      tasksToClassify = tasksToClassify.filter(
        task => task.status !== tasksToClassify[0].status
      )
    }
    setTasks(tasksLists)
  }

  useEffect(() => {
    if (data?.tasks.length > 0) taskClassification()
  }, [data])

  return { tasks, loading, error }
}

export default useTaks
