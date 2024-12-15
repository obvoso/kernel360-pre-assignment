import styled from 'styled-components'

export const OrderListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const OrderCardContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  item-align: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 9px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 1rem;
  gap: 1rem;
`
