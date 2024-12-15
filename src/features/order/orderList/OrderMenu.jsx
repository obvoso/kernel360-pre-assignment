import React from 'react'

import { OrderMenuContainer, OrderMenuCardWrapper } from './OrderMenu.styled'
import OrderMenuCard from './OrderMenuCard'
import { Separator } from '@/components/Separator.styled'

export default function OrderMenu({ menuInfo }) {
  return (
    <OrderMenuContainer>
      {menuInfo.map((menu, index) => (
        <>
          <OrderMenuCardWrapper>
            <OrderMenuCard key={index} menu={menu} />
          </OrderMenuCardWrapper>
          <Separator
            $width={`${index + 1 === menuInfo.length ? '95%' : '75%'}`}
            $align={'right'}
          />
        </>
      ))}
    </OrderMenuContainer>
  )
}
