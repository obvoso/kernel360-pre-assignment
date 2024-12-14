import React from 'react'
import { SearchInputContainer, SearchInputField } from './SearchInput.styled'
import { Search } from 'lucide-react'
import { Gap } from '../Gap.styled'
import { CursorPointerWrapper } from '../CursorPointerWrapper.styled'

export default function SearchInput() {
  return (
    <SearchInputContainer>
      <CursorPointerWrapper>
        <Search />
      </CursorPointerWrapper>
      <Gap $horizontalGap="0.5rem" />
      <SearchInputField />
    </SearchInputContainer>
  )
}
