import styled from 'styled-components'

export const NavigationButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`

export const NavigationButtonText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.text};
  margin-left: 1rem;
  font-weight: ${({ theme, $isActive }) =>
    $isActive ? theme.fontWeight.regular : theme.fontWeight.bold};
`
