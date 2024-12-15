import React from 'react'
import {
  OrderMenuCardContainer,
  OrderMenuCardTextContainer,
  OrderMenuCardTitle,
  OrderMenuCardDescription,
  OrderMenuCardBottomContainer,
  OrderMenuCardPrice,
  OrderMenuCardQuantity,
} from './OrderMenuCard.styled'
import CircleImage from '@/components/Images/CircleImage'

export default function OrderMenuCard({ menu }) {
  return (
    <OrderMenuCardContainer>
      <CircleImage imageSrc={menu.image} size="80px" />
      <OrderMenuCardTextContainer>
        <OrderMenuCardTitle>{menu.name}</OrderMenuCardTitle>
        <OrderMenuCardDescription>{menu.description}</OrderMenuCardDescription>
        <OrderMenuCardBottomContainer>
          <OrderMenuCardPrice>{`$${menu.price}`}</OrderMenuCardPrice>
          <OrderMenuCardQuantity>{`Qty: ${menu.quantity}`}</OrderMenuCardQuantity>
        </OrderMenuCardBottomContainer>
      </OrderMenuCardTextContainer>
    </OrderMenuCardContainer>
  )
}
