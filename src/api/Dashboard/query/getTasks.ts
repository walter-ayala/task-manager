import { gql } from '@apollo/client'

export const GET_TASKS = gql`
  query GetTasks {
    tasks(input: {}) {
      id
      assignee {
        avatar
        fullName
      }
      createdAt
      dueDate
      name
      pointEstimate
      position
      status
      tags
    }
  }
`
