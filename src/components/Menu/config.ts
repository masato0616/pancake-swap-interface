import { MenuEntry } from '@pancakeswap-libs/uikit'

const frontUrl = process.env.REACT_APP_FRONT_URL;

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: frontUrl,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${frontUrl}/farms`,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: `${frontUrl}/syrup`,
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
