import React from 'react'
import { formatDate } from '@/utils/formatDate'
import { CursorPointerWrapper } from '@/components/CursorPointerWrapper.styled'
import {
  RecentOrderListContainer,
  RecentOrderCardWrapper,
} from './RecentOrderList.styled'
import recentOrders from '@/data/recent-orders.json'
import OrderCard from '@/features/order/orderCard/OrderCard'

export default function RecentOrderList() {
  return (
    <RecentOrderListContainer>
      {recentOrders.map((order) => (
        <RecentOrderCardWrapper>
          <CursorPointerWrapper>
            <OrderCard
              key={order.no}
              title={`Order #${order.no}`}
              description={formatDate(order.orderedAt)}
              imageSrc={order.user.image}
              titleSize="lg"
              descriptionSize="base"
            />
          </CursorPointerWrapper>
        </RecentOrderCardWrapper>
      ))}
    </RecentOrderListContainer>
  )
}
