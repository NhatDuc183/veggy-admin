import {
  Logout,
  NotificationsNone as NotificationsNoneIcon,
  PermIdentity,
  ShieldOutlined,
  Timeline,
} from '@mui/icons-material'
import classNames from 'classnames/bind'
import { memo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useOnClickOutside } from 'src/components/Hooks/useOnClickOutside'
import { logout } from 'src/redux/auth/actions'

// import DefaultImage from 'src/assets/images/default-user.png'
import Menu from 'src/components/Popper/Menu'
import Notification from 'src/components/Popper/Notification'
import styles from './TopBar.module.scss'

const cx = classNames.bind(styles)

const NOTIFICATION_ITEMS = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/tutor-website-52add.appspot.com/o/files%2F66?alt=media&token=5457cc2b-f788-4905-9abc-bd4acb019313',
    message: 'Người dùng nhat duc',
    to: '/user/8',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/tutor-website-52add.appspot.com/o/files%2F65?alt=media&token=64f7c397-a130-41b0-8502-52fe45f0e88d',
    message: 'Người dùng nguyen mạnh',
    to: '/user/114',
  },
  {
    image: 'https://i.pinimg.com/736x/97/d0/f9/97d0f95b9060ba41c4ea6bd1ae47267f.jpg',
    message: 'Người dùng ',
    to: '/user/204',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/tutor-website-52add.appspot.com/o/files%2F65?alt=media&token=64f7c397-a130-41b0-8502-52fe45f0e88d',
    message: 'Người dùng nguyen',
    to: '/user/205',
  },
]

function TopBar() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const refOverClickOutSide = useRef()
  const [isShow, setIsShow] = useState(false)

  useOnClickOutside(refOverClickOutSide, () => setIsShow(!isShow))

  const handleLogout = () => {
    dispatch(logout())
  }

  const MENU_ITEMS = [
    { icon: <PermIdentity />, title: 'Tài khoản người dùng', to: `/user/${auth.user.id}` },
    { icon: <Timeline />, title: 'Thống kê', to: '/chart' },
    { icon: <Logout />, title: 'Đăng xuất', onClick: handleLogout },
  ]

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break
      default:
        console.log(menuItem)
    }
  }

  return (
    <div className={cx('topbar')}>
      <div className={cx('topbarWrapper')}>
        <div className={cx('topLeft')}>
          <Link to={'/'}>
            <span className={cx('logo')}>VEGGY ADMIN</span>
          </Link>
        </div>
        <div className={cx('topRight')}>
          <Notification items={NOTIFICATION_ITEMS}>
            <div className={cx('topbarIconContainer')}>
              <NotificationsNoneIcon />
              <span className={cx('topIconBadge')}>{NOTIFICATION_ITEMS.length}</span>
            </div>
          </Notification>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            {auth.user ? (
              <Link to={'/user/' + auth.user.id}>
                <div className={cx('user')}>
                  <span className={cx('user-name')}>{auth.user.name} </span>
                  <img src={auth.user.urlAvt} alt="avatar" className={cx('topAvatar')} />
                </div>
              </Link>
            ) : (
              <Link to={'/login'}>
                <img
                  src={
                    'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-cute.jpg?ssl\u003d1'
                  }
                  alt="avatar"
                  className={cx('topAvatar')}
                />
              </Link>
            )}
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default memo(TopBar)
