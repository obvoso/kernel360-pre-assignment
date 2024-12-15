import styled from 'styled-components'

export const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 307px;
  height: 66px;
`

export const OrderCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const OrderCardTitle = styled.h3`
  font-size: ${({ $titleSize, theme }) => theme.fontSize[$titleSize]};
  margin-top: ${({ $titleSize }) =>
    $titleSize === '2xl'
      ? '0.2rem'
      : $titleSize === 'xl'
      ? '0.15rem'
      : $titleSize === 'lg'
      ? '0.1rem'
      : '0.05rem'};
  overflow: hidden;
`

export const OrderCardDescription = styled.p`
  font-size: ${({ $descriptionSize, theme }) =>
    theme.fontSize[$descriptionSize]};
  color: ${({ theme }) => theme.color.textSecondary};
  white-space: nowrap;
  margin-top: ${({ $descriptionSize }) =>
    $descriptionSize === 'lg'
      ? '0.6rem'
      : $descriptionSize === 'md'
      ? '0.5rem'
      : $descriptionSize === 'sm'
      ? '0.4rem'
      : '0.3rem'};
  overflow: hidden;
`
