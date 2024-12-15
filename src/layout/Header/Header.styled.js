import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.text};
`
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
