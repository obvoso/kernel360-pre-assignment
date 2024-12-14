import styled from 'styled-components'

/**
 * CircleImage component
 * @param {string} imageSrc - 이미지 URL
 * @param {string} size - 이미지 크기 (e.g., "16px", "1rem", 16)
 */
export const CircleImageWrapper = styled.img`
  border-radius: 50%;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  object-fit: cover;
`
