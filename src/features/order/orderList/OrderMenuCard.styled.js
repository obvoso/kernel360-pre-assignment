import styled from 'styled-components'

export const OrderMenuCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export const OrderMenuCardTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.1rem;
`

export const OrderMenuCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`

export const OrderMenuCardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.textSecondary};
`

export const OrderMenuCardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
`

export const OrderMenuCardPrice = styled.p`
  font-size: 14px;
`

export const OrderMenuCardQuantity = styled.p`
  font-size: 15px;
`
