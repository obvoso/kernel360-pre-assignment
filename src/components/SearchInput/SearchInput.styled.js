import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  width: 400px;
  height: 50px;
`

export const SearchInputField = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  outline: none;
`
