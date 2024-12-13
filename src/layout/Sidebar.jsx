import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <aside>aside</aside>
    </div>
  )
}
