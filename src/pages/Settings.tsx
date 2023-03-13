import BottomTab from '../components/BottomTab'
import SearchBar from '../components/SearchBar'
import ProfileSection from '../components/Settings/ProfileSection'
import SideBar from '../components/Sidebar'
import ThemeLayout from '../layout/ThemeLayout'
import { FlexContainer, GeneralContainer, MainSection } from './Dashboard'

const Settings: React.FC = () => {
  return (
    <ThemeLayout>
      <GeneralContainer>
        <FlexContainer>
          <SideBar />
          <MainSection>
            <SearchBar />
            <ProfileSection/>
          </MainSection>
        </FlexContainer>
        <BottomTab/>
      </GeneralContainer>
    </ThemeLayout>
  )
}

export default Settings
