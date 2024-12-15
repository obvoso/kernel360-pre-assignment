import React from 'react'
import {
  OrderStatusContainer,
  QuantityText,
  OrderStatusButtonContainer,
} from './OrderStatus.styled'
import OrderStatusButton from './OrderStatusButton'

export default function OrderStatus({ status, quantity }) {
  return (
    <OrderStatusContainer>
      <QuantityText>{`X${quantity} items`}</QuantityText>
      <OrderStatusButtonContainer>
        <OrderStatusButton status={status} />
      </OrderStatusButtonContainer>
    </OrderStatusContainer>
  )
}
