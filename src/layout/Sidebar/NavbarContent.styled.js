import styled from 'styled-components'

export const NavbarButton = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  gap: 0.5rem;
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.color.text};

  &:hover {
    border: 1px solid red;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    border: 1px solid ${theme.color.primary};
  `}
`

export const IconWrapper = styled.div`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.primary : theme.color.text};
  display: flex;
  align-items: center;
`

export const LabelWrapper = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.fontWeight.regular : theme.fontWeight.bold};
`
