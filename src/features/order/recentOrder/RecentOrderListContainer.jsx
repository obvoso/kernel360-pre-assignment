import React from 'react'
import ContentWithTitle from '@/components/ContentWithTitle/ContentWithTitle'
import RecentOrderList from './RecentOrderList'

export default function RecentOrderListContainer() {
  return (
    <ContentWithTitle
      title="Recent Orders"
      titleSize="md"
      content={<RecentOrderList />}
    />
  )
}
