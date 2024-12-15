import React from 'react'
import { formatDate } from '@/utils/formatDate'
import { OrderListContainer, OrderCardContainer } from './OrderList.styled'
import OrderMenu from './OrderMenu'
import orders from '@/data/orders.json'
import OrderCard from '@/features/order/orderCard/OrderCard'
import OrderStatus from '@/features/order/orderList/OrderStatus'

export default function OrderList() {
  return (
    <OrderListContainer>
      {orders.map((order) => (
        <OrderCardContainer>
          <OrderCard
            key={order.no}
            title={`Order #${order.no}`}
            description={formatDate(order.orderedAt)}
            imageSrc={order.user.image}
            titleSize="base"
            descriptionSize="sm"
          />
          <OrderMenu menuInfo={order.items} />
          <OrderStatus status={order.status} quantity={order.items.length} />
        </OrderCardContainer>
      ))}
    </OrderListContainer>
  )
}
