import React from 'react'
import SearchInput from '@/components/SearchInput/SearchInput'
import CircleImage from '@/components/Images/CircleImage'
import ordersData from '@/data/orders.json'
import { BellDot } from 'lucide-react'
import { CursorPointerWrapper } from '@/components/CursorPointerWrapper.styled'
import { HeaderContainer, ItemsContainer } from './Header.styled'
import { Gap } from '@/components/Gap.styled'

export default function Header() {
  return (
    <HeaderContainer>
      <SearchInput />
      <ItemsContainer>
        <CursorPointerWrapper>
          <BellDot />
        </CursorPointerWrapper>
        <Gap $horizontalGap="1rem" />
        <CircleImage imageSrc={ordersData[1].user.image} size="52px" />
      </ItemsContainer>
    </HeaderContainer>
  )
}
