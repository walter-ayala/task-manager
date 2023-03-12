import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'

const theme = {
  primary: '#DA584B',
  secondary: '#70B252',
  tertiary: '#E5B454',
  neutral: '#94979A',
  backgroundLight: '#2C2F33',
  backgroundDark: '#222528',
  backgroundModal: '#393D41',
  white: '#FFF'
}

interface Props {
  children: JSX.Element
}

const ThemeLayout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  )
}

export default ThemeLayout
