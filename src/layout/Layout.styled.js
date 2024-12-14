import styled from 'styled-components'

export const LayoutContainer = styled.aside`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
`
