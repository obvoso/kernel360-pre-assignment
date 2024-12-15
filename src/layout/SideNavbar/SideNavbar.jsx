import React, { useEffect } from 'react'
import NavigationButton from './NavigationButton'
import { LogOut } from 'lucide-react'
import { navbarContents } from '@/data/navbarContents'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  SideNavbarContainer,
  NavigationContainer,
  SideNavbarLogo,
  LogoutWrapper,
} from './SideNavbar.styled'

export default function SideNavbar() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const [currentActiveLabel, setCurrentActiveLabel] = React.useState(null)

  useEffect(() => {
    const currentActiveLabel = navbarContents.find(
      ({ path }) => path === pathname
    )
    setCurrentActiveLabel(currentActiveLabel.label)
  }, [pathname])

  return (
    <SideNavbarContainer>
      <SideNavbarLogo>KernelOrder</SideNavbarLogo>
      <NavigationContainer>
        {navbarContents.map(({ icon, label, path }) => (
          <NavigationButton
            key={label}
            label={label}
            icon={icon}
            isActive={currentActiveLabel === label}
            onClick={() => navigate(path)}
          />
        ))}
      </NavigationContainer>
      <LogoutWrapper>
        <NavigationButton
          label="LOGOUT"
          icon={<LogOut />}
          isActive={false}
          onClick={() => alert('Logout')}
        />
      </LogoutWrapper>
    </SideNavbarContainer>
  )
}
