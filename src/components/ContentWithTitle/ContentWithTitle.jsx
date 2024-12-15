import React from 'react'
import {
  ContentWithTitleContainer,
  ContentWithTitleTitle,
} from './ContentWithTitle.styled'

/**
 *
 * @param {*} title
 * @param {*} titleSize - 타이틀 사이즈 (sm, lg, xl 등)
 * @param {*} content
 * @returns
 */

export default function ContentWithTitle({ title, titleSize, content }) {
  return (
    <ContentWithTitleContainer>
      <ContentWithTitleTitle $titleSize={titleSize}>
        {title}
      </ContentWithTitleTitle>
      {content}
    </ContentWithTitleContainer>
  )
}
