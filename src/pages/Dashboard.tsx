import styled from 'styled-components'
import BottomTab from '../components/BottomTab'
import DashboardSection from '../components/Dashboard/DashboardSection'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/Sidebar'
import ThemeLayout from '../layout/ThemeLayout'

const Dashboard: React.FC = () => {
  return (
    <ThemeLayout>
      <GeneralContainer>
        <FlexContainer>
          <SideBar />
          <MainSection>
            <SearchBar />
            <DashboardSection/>
          </MainSection>
        </FlexContainer>
        <BottomTab/>
      </GeneralContainer>
    </ThemeLayout>
  )
}

export const GeneralContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: ${(props) => props.theme.backgroundDark};
`

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  gap: 32px;
`

export const MainSection = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
  flex-direction: column;  
  background-color: ${(props) => props.theme.backgroundDark};
`

export default Dashboard
