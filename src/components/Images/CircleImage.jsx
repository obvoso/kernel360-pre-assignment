import React from 'react'
import { CircleImageWrapper } from './CircleImage.styled'
import { CursorPointerWrapper } from '@/components/CursorPointerWrapper.styled'

export default function CircleImage({ imageSrc, size }) {
  return (
    <CursorPointerWrapper>
      <CircleImageWrapper src={imageSrc} $size={size} />
    </CursorPointerWrapper>
  )
}
