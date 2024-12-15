import React from 'react'
import SideNavbar from './SideNavbar/SideNavbar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import {
  LayoutContainer,
  SideNavbarContainer,
  ContentContainer,
} from './Layout.styled'

export default function Layout() {
  return (
    <LayoutContainer>
      <SideNavbarContainer>
        <SideNavbar />
      </SideNavbarContainer>
      <ContentContainer>
        <Header />
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  )
}
