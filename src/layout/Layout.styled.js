import styled from 'styled-components'

export const LayoutContainer = styled.aside`
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
`

export const SideNavbarContainer = styled.div`
  width: 280px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentContainer = styled.div`
  display: flex
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
`
