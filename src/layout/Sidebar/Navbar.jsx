import React, { useEffect } from 'react'
import NavbarContent from './NavbarContent'
import {
  NavbarContainer,
  NavbarContentContainer,
  NavbarLogo,
} from './Navbar.styled'
import {
  House,
  History,
  Mail,
  ChartColumn,
  Dice5,
  SlidersHorizontal,
  LogOut,
} from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const [currentActiveLabel, setCurrentActiveLabel] = React.useState(null)

  useEffect(() => {
    const currentActiveLabel = navbarContents.find(
      ({ path }) => path === pathname
    )
    setCurrentActiveLabel(currentActiveLabel.label)
  }, [pathname])

  const navbarContents = [
    { icon: House, label: 'HOME', path: '/', onClick: () => navigate('/') },
    {
      icon: History,
      label: 'ORDER HISTORY',
      path: '/order-history',
      onClick: () => navigate('/order-history'),
    },
    {
      icon: Mail,
      label: 'MESSAGES',
      path: '/messages',
      onClick: () => navigate('/messages'),
    },
    {
      icon: ChartColumn,
      label: 'STATISTICS',
      path: '/statistics',
      onClick: () => navigate('/statistics'),
    },
    {
      icon: Dice5,
      label: 'PRODUCTS',
      path: '/products',
      onClick: () => navigate('/products'),
    },
    {
      icon: SlidersHorizontal,
      label: 'SETTINGS',
      path: '/settings',
      onClick: () => navigate('/settings'),
    },
  ]

  return (
    <NavbarContainer>
      <NavbarLogo>KernelOrder</NavbarLogo>
      <NavbarContentContainer>
        {navbarContents.map(({ icon, label, onClick }) => (
          <NavbarContent
            icon={icon}
            label={label}
            onClick={onClick}
            isActive={currentActiveLabel === label}
            key={label}
          />
        ))}
      </NavbarContentContainer>
      <NavbarContent
        icon={LogOut}
        label="LOGOUT"
        onClick={() => alert('Logout')}
      />
    </NavbarContainer>
  )
}
