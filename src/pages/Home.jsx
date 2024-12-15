import React from 'react'
import RecentOrderListContainer from '@/features/order/recentOrder/RecentOrderListContainer'
import OrderListContainer from '@/features/order/orderList/OrderListContainer'

export default function Home() {
  return (
    <>
      <RecentOrderListContainer />
      <OrderListContainer />
    </>
  )
}
