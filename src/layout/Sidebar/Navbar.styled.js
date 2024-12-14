import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 3rem;
  height: 100vh;
  min-width: 280px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`

export const NavbarContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const NavbarLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};
`
