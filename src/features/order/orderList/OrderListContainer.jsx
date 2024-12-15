import React from 'react'
import ContentWithTitle from '@/components/ContentWithTitle/ContentWithTitle'
import OrderList from './OrderList'

export default function OrderListContainer() {
  return (
    <ContentWithTitle
      title="Order List"
      titleSize="md"
      content={<OrderList />}
    />
  )
}
