import React from 'react'
import { IconButton } from '@/components/Button/IconButton.styled'
import { ButtonBase } from '@/components/Button/ButtonBase.styled'
import { Gap } from '@/components/Gap.styled'
import {
  NavigationButtonContainer,
  NavigationButtonText,
} from './NavigationButton.styled'

export default function NavigationButton({ label, icon, isActive, onClick }) {
  return (
    <IconButton
      key={label}
      $color={isActive ? 'primary' : ''}
      $strokeWidth={isActive ? 2.5 : 1.5}
      $fullWidth={true}
    >
      <ButtonBase
        $variant={isActive ? 'primary' : 'default'}
        $fullWidth={true}
        onClick={onClick}
      >
        <NavigationButtonContainer>
          {icon}
          <Gap $horizontalGap="0.2rem" />
          <NavigationButtonText $isActive={isActive}>
            {label}
          </NavigationButtonText>
        </NavigationButtonContainer>
      </ButtonBase>
    </IconButton>
  )
}
