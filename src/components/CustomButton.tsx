import React from 'react'
import styled, { css } from 'styled-components'
import { type ButtonComponent } from '../types'

const CustomButton: React.FC<ButtonComponent> = ({ main, children, onClick }) => {
  return (
    <Container main={main} onClick={onClick}>
      {children}
    </Container>
  )
}

const Container = styled.button<Partial<ButtonComponent>>`
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  padding: 8px;
  :active {
    scale: 95%;
  }
  ${(props) => {
    if (props.main ?? false) {
      return css`
          background-color: ${props.theme.primary};
        `
    }
  }}
`
export default CustomButton
