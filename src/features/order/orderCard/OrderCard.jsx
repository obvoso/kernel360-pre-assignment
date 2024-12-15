import React from 'react'
import {
  OrderCardContainer,
  OrderCardTextContainer,
  OrderCardTitle,
  OrderCardDescription,
} from './OrderCard.sytled'
import CircleImage from '@/components/Images/CircleImage'

/**
 *
 * @param {*} title
 * @param {*} description
 * @param {*} imageSrc
 * @param {*} titleSize - 타이틀 사이즈 (sm, lg, xl 등)
 * @param {*} descriptionSize - 디스크립션 사이즈 (sm, lg, xl 등)
 * @param {*} imageSrc
 * @returns
 */

export default function OrderCard({
  title,
  description = '',
  imageSrc,
  titleSize,
  descriptionSize = 'sm',
}) {
  return (
    <OrderCardContainer>
      <OrderCardTextContainer>
        <OrderCardTitle $titleSize={titleSize}>{title}</OrderCardTitle>
        <OrderCardDescription $descriptionSize={descriptionSize}>
          {description}
        </OrderCardDescription>
      </OrderCardTextContainer>
      <CircleImage imageSrc={imageSrc} size="50px" />
    </OrderCardContainer>
  )
}
