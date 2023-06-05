import {
  AccountBalanceWalletOutlined,
  AttachMoney,
  Home,
  PermIdentity,
  School,
  Timeline,
} from '@mui/icons-material'

const dashboard = [
  {
    title: 'Dashboard',
    list: [
      {
        link: '/',
        active: true,
        title: 'Trang chủ',
        icon: <Home className={'sidebarIcon'} />,
      },
    ],
  },
  {
    title: 'Quản lý',
    list: [
      {
        link: '/chart',
        active: false,
        title: 'Biểu đồ',
        icon: <Timeline className={'sidebarIcon'} />,
      },
      {
        link: '/users',
        active: false,
        title: 'Tài khoản người dùng',
        icon: <PermIdentity className={'sidebarIcon'} />,
      },
      {
        link: '/categorys',
        active: false,
        title: 'Danh mục sản phẩm',
        icon: <AccountBalanceWalletOutlined className={'sidebarIcon'} />,
      },
      {
        link: '/products',
        active: false,
        title: 'Sản phẩm',
        icon: <School className={'sidebarIcon'} />,
      },
      {
        link: '/bills',
        active: false,
        title: 'Hóa đơn',
        icon: <AttachMoney className={'sidebarIcon'} />,
      },
    ],
  },
  // {
  //     title: 'Notifications',
  //     list: [
  //         {
  //             link: '/mail',
  //             active: false,
  //             title: 'Mail',
  //             icon: <MailOutline className={'sidebarIcon'} />,
  //         },
  //         {
  //             link: '/feedback',
  //             active: false,
  //             title: 'Feedback',
  //             icon: <DynamicFeed className={'sidebarIcon'} />,
  //         },
  //         {
  //             link: '/messages',
  //             active: false,
  //             title: 'Messages',
  //             icon: <ChatBubbleOutline className={'sidebarIcon'} />,
  //         },
  //     ],
  // },
  // {
  //     title: 'Staff',
  //     list: [
  //         {
  //             link: '/manage',
  //             active: false,
  //             title: 'Manage',
  //             icon: <WorkOutline className={'sidebarIcon'} />,
  //         },
  //         {
  //             link: '/analytics',
  //             active: false,
  //             title: 'Analytics',
  //             icon: <Timeline className={'sidebarIcon'} />,
  //         },
  //         {
  //             link: '/reports',
  //             active: false,
  //             title: 'Reports',
  //             icon: <Report className={'sidebarIcon'} />,
  //         },
  //     ],
  // },
]

export default dashboard
