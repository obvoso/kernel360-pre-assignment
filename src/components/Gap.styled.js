import styled from 'styled-components'

/**
 * Gap component
 * @param {string | number} $verticalGap - 간격 값 (e.g., "16px", "1rem", 16)
 * @param {string | number} $horizontalGap - 간격 값 (e.g., "16px", "1rem", 16)
 */
export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ $verticalGap }) => $verticalGap};
  padding-bottom: ${({ $verticalGap }) => $verticalGap};
  padding-left: ${({ $horizontalGap }) => $horizontalGap};
  padding-right: ${({ $horizontalGap }) => $horizontalGap};
`
