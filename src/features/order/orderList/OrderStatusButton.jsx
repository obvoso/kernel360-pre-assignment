import React from 'react'
import { ButtonBase } from '@/components/Button/ButtonBase.styled'
import { X, Check } from 'lucide-react'
import { OrderStatusButtonsText } from './OrderStatusButton.styled'
import { IconButton } from '@/components/Button/IconButton.styled'

export default function OrderStatusButtons({ status }) {
  switch (status) {
    case 'waiting':
      return (
        <>
          <IconButton>
            <ButtonBase $variant="reject">
              <X />
            </ButtonBase>
          </IconButton>
          <IconButton>
            <ButtonBase $variant="success">
              <Check />
            </ButtonBase>
          </IconButton>
        </>
      )
    case 'rejected':
      return (
        <IconButton>
          <ButtonBase $variant="reject" $disabled={true}>
            <X />
            <OrderStatusButtonsText>REJECTED</OrderStatusButtonsText>
          </ButtonBase>
        </IconButton>
      )
    case 'completed':
    default:
      return (
        <IconButton>
          <ButtonBase $variant="success" $disabled={true}>
            <Check />
            <OrderStatusButtonsText>COMPLETED</OrderStatusButtonsText>
          </ButtonBase>
        </IconButton>
      )
  }
}
