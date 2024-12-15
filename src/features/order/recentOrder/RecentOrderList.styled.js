import styled from 'styled-components'

export const RecentOrderListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  > div {
    flex-shrink: 0;
  }

  /* 스크롤바 */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`

export const RecentOrderCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 9px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 1rem;
`
