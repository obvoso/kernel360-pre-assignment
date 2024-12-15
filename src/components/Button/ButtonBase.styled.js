import styled from 'styled-components'

/**
 * ButtonBase component
 * @param {string} $variant - primary, success, reject, default
 * @param {boolean} $fullWidth - true, false
 * @param {boolean} $disabled - true, false
 */

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: 1em;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    `
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.text};
  `}

  ${({ $variant, theme }) =>
    $variant === 'success' &&
    `
    border: 1px solid ${theme.color.success};
    color: ${theme.color.success};

    &:active {
      background-color: ${theme.color.success};
      color: ${theme.color.background};
    }
  `}

  ${({ $variant, theme }) =>
    $variant === 'reject' &&
    `
    border: 1px solid ${theme.color.reject};
    color: ${theme.color.reject};

    &:active {
      background-color: ${theme.color.reject};
      color: ${theme.color.background};
    }
  `}

  ${({ $variant, theme }) =>
    $variant === 'default' &&
    `
    border: 1px solid transparent;
    color: ${theme.color.text};
  `}

  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
  
  ${({ $disabled }) =>
    $disabled &&
    `
  pointer-events: none; /* 클릭과 마우스 이벤트 차단 */
  cursor: default; /* 커서 모양 기본으로 설정 */
`}
`
