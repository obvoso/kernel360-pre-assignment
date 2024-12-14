import React from 'react'
import Navbar from './Sidebar/Navbar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer, ContentContainer } from './Layout.styled'

export default function Layout() {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
        <Header />
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  )
}
