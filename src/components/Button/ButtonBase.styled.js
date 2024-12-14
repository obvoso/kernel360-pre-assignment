import styled from 'styled-components'

/**
 * ButtonBase component
 * @param {string} $variant - primary, success, reject, default
 * @param {boolean} $fullWidth - true, false
 */

export const ButtonBase = styled.button`
  display: flex;
  justify-content: start;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: 1em;
  margin: 1em;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    border: 1px solid red;
  }

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    `
    border: 1px solid ${theme.color.primary};
    color: ${theme.color.text};

    &:hover {
      border: 2px solid ${theme.color.primary};
    }
  `}

  ${({ $variant, theme }) =>
    $variant === 'success' &&
    `
    border: 1px solid ${theme.color.success};
    color: ${theme.color.success};

    &:hover {
      border: 2px solid ${theme.color.success};
    }
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

    &:hover {
     border: 2px solid ${theme.color.reject};
    }

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

    &:hover {
      border: 2px solid ${theme.color.primary};
    }

    &:active {
      background-color: ${theme.color.primary};
      color: ${theme.color.background};
    }
  `}

  ${(props) => props.$fullWidth && 'width: 100%;'}
`
