import styled, { keyframes } from 'styled-components'
import useTaks from '../../hooks/Dashboard/useTaks'
import { type TaskList } from '../../types'
import TaskCard from './TaskCard'

const Tasks: React.FC = () => {
  const { tasks, loading, error } = useTaks()

  if (loading) {
    return (
      <SmallContainer>
        <SpinnerContainer>
          <LoadingSpinner />
          <Title>Loading tasks</Title>
        </SpinnerContainer>
      </SmallContainer>
    )
  }

  if (error != null) {
    return (
      <SmallContainer>
        <Title>An error occured {error.message}</Title>
      </SmallContainer>
    )
  }

  if (tasks?.length === 0) {
    return (
      <SmallContainer>
       <Title>No Tasks found</Title>
      </SmallContainer>
    )
  }

  return (
    <Container>
      {tasks.map((typeTask: TaskList) => (
        <TaskColumn key={typeTask.title}>
          <Title>{`${typeTask.title} (${typeTask.values.length})`}</Title>
          {
            typeTask.values.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          }
        </TaskColumn>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  align-items: flex-start;
  margin: 10px;
  overflow-y: auto;
  height: 75vh;
  overflow-x: auto;
  width: calc(100vw - 84px);
  @media only screen and (min-width: 769px) {
    width: calc(100vw - 348px);
  }
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.backgroundDark};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.neutral};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner{
    display: none;
  }
`

const SmallContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 300px;
  background-color: ${(props) => props.theme.backgroundLight};
`

const TaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 348px;
`

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
`

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 20px;
  padding: 10px;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const SpinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 10px solid #f3f3f3; 
  border-top: 10px solid #383636; 
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
`

export default Tasks
