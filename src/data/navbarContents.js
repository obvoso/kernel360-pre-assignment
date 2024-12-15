import {
  House,
  History,
  Mail,
  ChartColumn,
  Dice5,
  SlidersHorizontal,
} from 'lucide-react'

export const navbarContents = [
  { icon: <House />, label: 'HOME', path: '/' },
  {
    icon: <History />,
    label: 'ORDER HISTORY',
    path: '/order-history',
  },
  {
    icon: <Mail />,
    label: 'MESSAGES',
    path: '/messages',
  },
  {
    icon: <ChartColumn />,
    label: 'STATISTICS',
    path: '/statistics',
  },
  {
    icon: <Dice5 />,
    label: 'PRODUCTS',
    path: '/products',
  },
  {
    icon: <SlidersHorizontal />,
    label: 'SETTINGS',
    path: '/settings',
  },
]
