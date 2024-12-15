import styled from 'styled-components'

/**
 * IconButton component
 * @param {string} $color - primary, success, reject, default
 * @param {boolean} $fullWidth - true, false
 * @param {number} $strokeWidth - 1, 2, 3
 * @param {string} $size - 1.1, 1.2, 1.3
 */

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke-width: ${({ $strokeWidth }) => $strokeWidth || 1.5};
    color: ${({ $color, theme }) => theme.color[$color] || theme.color};
    scale: ${({ $size }) => $size || '1.1'};
    background: none;
  }
  &:hover svg {
    stroke-width: ${({ $strokeWidth }) => $strokeWidth + 1 || 3};
  }

  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`
