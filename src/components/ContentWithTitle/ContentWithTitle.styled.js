import styled from 'styled-components'

export const ContentWithTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: calc(100vw - 330px);
  margin-top: 2rem;
  gap: 0.875rem;
`

export const ContentWithTitleTitle = styled.h2`
  font-size: ${({ $titleSize, theme }) => theme.fontSize[$titleSize]};
  font-weight: bold;
`
