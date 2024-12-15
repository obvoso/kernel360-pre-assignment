import styled from 'styled-components'

/**
 * Separator 컴포넌트
 * @param {*} $width - 가로 길이
 * @param {*} $thickness - 선 굵기
 * @param {*} $color - 선 색상
 * @param {*} $margin - 마진
 * @param {*} $align - 정렬
 */

export const Separator = styled.div`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $thickness }) => $thickness || '1px'};
  background-color: ${({ $color, theme }) =>
    $color || theme.color.borderSecondary};
  margin: ${({ $align, $margin }) =>
    $margin ||
    ($align === 'center' ? '0 auto' : $align === 'right' ? '0 0 0 auto' : '0')};
`
