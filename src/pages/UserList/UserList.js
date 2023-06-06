import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import { CImage, CFormSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Tooltip } from 'react-tooltip'
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ImageUploading from 'react-images-uploading'
import className from 'classnames/bind'
import styles from './UserList.module.scss'
import * as services from 'src/services/services'
import axios from 'axios'
import LoadingOverlay from 'react-loading-overlay'
import Button from 'src/components/Button/Button'

const cx = className.bind(styles)

function UserList() {
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [loading, setLoading] = useState(true)
  const [images, setImages] = React.useState([])
  const maxNumber = 1

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const [users, setUsers] = useState({
    name: '',
    birthday: '',
    email: '',
    phone: '',
  })

  const { id } = useParams()
  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get('http://127.0.0.1:8080/veggy-service/v1/auths/users')
    setUsers(result.data)
    setLoading(false)
  }

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading..."
      className={cx('overlay')}
      styles={{
        overlay: (base) => ({
          ...base,
          background: 'white',
          color: 'black',
        }),
        spinner: (base) => ({
          ...base,
          width: '65px',
          '& svg circle': {
            stroke: 'black',
          },
        }),
      }}
    >
      {!loading ? (
        <div className={cx('content')}>
          <div className={cx('table-content')}>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Ngày Sinh </th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {users.data?.map((user) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr>
                    <th>{user.id}</th>
                    <th>{user.name} </th>
                    <th>{user.birthday}</th>
                    <th>{user.email} </th>
                    <th>{user.phone}</th>
                    <th>
                      <Button to="/user/${auth.user.id}" className={cx('text-forgot')}>
                        Chỉnh sửa
                      </Button>

                      <Tooltip id="edit-tooltip" />
                      <CIcon
                        className={cx('delete-icon icon-tv')}
                        icon={icon.cilX}
                        data-tooltip-id="delete-tooltip"
                        data-tooltip-content="Xóa"
                        style={{ height: 18 + 'px' }}
                      />
                      <Tooltip id="delete-tooltip" />
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <></>
      )}
    </LoadingOverlay>
  )
}

export default UserList
