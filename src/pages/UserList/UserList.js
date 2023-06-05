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
          {/* <Modal
            id="edit-customer"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            className={cx('modal modal-lg')}
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa thông tin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className={cx('upload__image-wrapper')}>
                        <button
                          style={isDragging ? { color: 'red' } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Thêm ảnh
                        </button>
                        &nbsp;
                        {imageList.map((image, index) => (
                          <div key={index} className={cx('image-item')}>
                            <img src={image['data_url']} alt="" width="100" />
                            <div className={cx('image-item__btn-wrapper')}>
                              <button onClick={() => onImageUpdate(index)}>Thay đổi</button>
                              <button onClick={() => onImageRemove(index)}>Xóa</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </Form.Group>

                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <Form.Label>Tên </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tên khách hàng"
                    autoFocus
                    value="Trần Nhật Đức"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <Form.Label>Ngày sinh </Form.Label>
                  <Form.Control type="text" placeholder="Ngày sinh" autoFocus value="18/03/2000" />
                </Form.Group>
                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <Form.Label>Giới tính</Form.Label>
                  <CFormSelect aria-label="Chọn danh mục">
                    <option disabled>Chọn giới tính</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                  </CFormSelect>
                </Form.Group>
                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    autoFocus
                    value="trannhatduc@gmail.com"
                  />
                </Form.Group>
                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <Form.Label>Số điện thoại </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Số điện thoại"
                    autoFocus
                    value="0358810333"
                  />
                </Form.Group>
                <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
                  <Form.Label>Địa chỉ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Địa chỉ"
                    autoFocus
                    value="205 Phan Văn Hân, P17, QBT, TPHCM"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Lưu lại
              </Button>
            </Modal.Footer>
          </Modal> */}
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
                      <Button to="/user" className={cx('text-forgot')}>
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
