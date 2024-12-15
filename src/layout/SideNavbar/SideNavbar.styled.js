import styled from 'styled-components'

export const SideNavbarContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 3rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`

export const SideNavbarLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};
`

export const LogoutWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  margin-bottom: 3rem;
`
