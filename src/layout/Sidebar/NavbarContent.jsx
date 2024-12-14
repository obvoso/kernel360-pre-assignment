import React from 'react'
import { NavbarButton, IconWrapper, LabelWrapper } from './NavbarContent.styled'
import { Gap } from '@/components/Gap.styled'

export default function NavbarContent({
  icon: Icon,
  label,
  onClick,
  isActive,
}) {
  return (
    <NavbarButton onClick={onClick} $isActive={isActive}>
      <IconWrapper $isActive={isActive}>
        <Icon strokeWidth={isActive ? 2.5 : 1.5} />
      </IconWrapper>
      <Gap $horizontalGap="0.1rem" />
      <LabelWrapper $isActive={isActive}>{label}</LabelWrapper>
    </NavbarButton>
  )
}
