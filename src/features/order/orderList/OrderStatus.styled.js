import styled from 'styled-components'

export const OrderStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const QuantityText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 0.5rem;
`

export const OrderStatusButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
