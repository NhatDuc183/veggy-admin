import className from 'classnames/bind'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay-ts'
import DataGrid from 'src/components/DataGrid'

import * as services from 'src/services/services'
import { handleDateTime, handleQuantity } from 'src/utils/commonFunc'
import styles from './Categorys.module.scss'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import CIcon from '@coreui/icons-react'
import { Tooltip } from 'react-tooltip'
import * as icon from '@coreui/icons'
import { Form } from 'react-bootstrap'
import axios from 'axios'

const cx = className.bind(styles)

// return (
//   <LoadingOverlay
//     active={data.length === 0}
//     spinner
//     text="Loading..."
//     className={cx('billsList')}
//     styles={{
//       overlay: (base) => ({
//         ...base,
//         background: 'white',
//         color: 'black',
//       }),
//       spinner: (base) => ({
//         ...base,
//         width: '65px',
//         '& svg circle': {
//           stroke: 'black',
//         },
//       }),
//     }}
//   >
//     {data.length > 0 ? (
//       <DataGrid
//         rows={data}
//         columns={columns}
//         rowKeyGetter={rowKeyGetter}
//         getRowId={(row) => generateRandom()}
//         disableSelectionOnClicks
//       />
//     ) : (
//       <></>
//     )}
//   </LoadingOverlay>
// )

function Categorys() {
  const [smShow, setSmShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)

  const handleClose = () => setSmShow(false)
  // const handleShow = () => setSmShow(true)
  // const navigate = useNavigate()
  // const [data, setData] = useState([])

  // const fetchApi = async () => {
  //   const res = await services.getBalanceList()
  //   console.log(res.data)
  //   setData(res.data)
  // }

  // useEffect(() => {
  //   fetchApi()
  // }, [])

  // function rowKeyGetter(row) {
  //   console.log(row)
  //   return row.user.id
  // }

  // function generateRandom() {
  //   var length = 8,
  //     charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  //     retVal = ''
  //   for (var i = 0, n = charset.length; i < length; ++i) {
  //     retVal += charset.charAt(Math.floor(Math.random() * n))
  //   }
  //   return retVal
  // }

  // const columns = [
  //   {
  //     field: 'id',
  //     headerName: 'ID',
  //     flex: 0.35,
  //     headerClassName: 'super-app-theme--header',
  //     headerAlign: 'center',
  //     align: 'center',
  //     renderCell: (params) => {
  //       return <>{params.row.user.id}</>
  //     },
  //   },
  //   {
  //     field: 'customer',
  //     headerName: 'Khách hàng',
  //     flex: 1.5,
  //     headerClassName: 'super-app-theme--header',
  //     headerAlign: 'center',
  //     renderCell: (params) => {
  //       return (
  //         <div className={cx('userListUser')}>
  //           <img className={cx('userListImg')} src={params.row.user.urlAvt} alt="avatar" />
  //           {params.row.user.name}
  //         </div>
  //       )
  //     },
  //   },
  //   {
  //     field: 'email',
  //     headerName: 'Email',
  //     flex: 1,
  //     headerClassName: 'super-app-theme--header',
  //     headerAlign: 'center',
  //     align: 'center',
  //     renderCell: (params) => {
  //       return <>{params.row.user.email}</>
  //     },
  //   },
  //   {
  //     field: 'balance',
  //     headerName: 'Số dư',
  //     flex: 1.25,
  //     headerClassName: 'super-app-theme--header',
  //     headerAlign: 'center',
  //     align: 'center',
  //     renderCell: (params) => {
  //       return <>{handleQuantity(params.row.balance, '.', ' COIN')}</>
  //     },
  //   },
  //   {
  //     field: 'updatedAt',
  //     headerName: 'Lần cập nhật cuối',
  //     flex: 1.5,
  //     headerClassName: 'super-app-theme--header',
  //     headerAlign: 'center',
  //     align: 'center',
  //     renderCell: (params) => {
  //       return <>{handleDateTime(new Date(params.row.updatedAt))}</>
  //     },
  //   },
  // ]

  const [users, setUsers] = useState({
    name: '',
    description: '',
    products: [],
  })

  const { id } = useParams()
  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get('http://127.0.0.1:8080/veggy-service/v1/category/getAll')
    setUsers(result.data)
  }

  return (
    <div className={cx('content')}>
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Thêm mới danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control type="text" placeholder="Tên danh mục" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Mã danh mục</Form.Label>
              <Form.Control type="text" placeholder="Mã danh mục" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlTextarea1')}>
              <Form.Label>Mô tả</Form.Label>
              <Form.Control as="textarea" rows={3} />
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
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cập nhật danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control type="text" value="rau" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Mã danh mục</Form.Label>
              <Form.Control type="text" value="RAU" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlTextarea1')}>
              <Form.Label>Mô tả</Form.Label>
              <Form.Control as="textarea" value="h hbdhs jsdfb hsdbfhb hdbfhd" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={cx('header-add')}>
        {/* <Link to="/manage/addCategorys">
          <CIcon icon={icon.cilMedicalCross} />
          Thêm mới
        </Link> */}
        <div className={cx('input-group mb-3 input-search')}>
          <input
            type="text"
            className={cx('form-control')}
            placeholder="Nhập từ khóa tìm kiếm"
            aria-label="Nhập từ khóa tìm kiếm"
            aria-describedby="basic-addon2"
          />
          <div className={cx('input-group-append ')}>
            <Button variant="primary" className={cx('input-group-text" id="basic-addon2')}>
              <CIcon icon={icon.cilSearch} />
            </Button>
          </div>
        </div>
        {/* <Button variant="primary" data-target="@modal-add-category" onClick={() => setShow(true)}>
          <CIcon icon={icon.cilMedicalCross} />
          Thêm mới
        </Button> */}
        <Button type="submit" onClick={() => setSmShow(true)} className={cx('me-2')}>
          Thêm mới
        </Button>
      </div>
      <div className={cx('table-content')}>
        <Table>
          <thead>
            <tr>
              <th colSpan={1}>ID</th>
              <th>Tên danh mục </th>
              <th>Mô tả</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.data?.map((user) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th>{user.id}</th>
                <th>{user.name} </th>
                <th className={cx('desciption-th')}>{user.description}</th>
                <th>
                  <CIcon
                    onClick={() => setLgShow(true)}
                    className={cx('edit-icon')}
                    icon={icon.cilPencil}
                    data-tooltip-id="edit-tooltip"
                    data-tooltip-content="Chỉnh sửa"
                    data-target="@modal-edit-category"
                    style={{ height: 18 + 'px' }}
                  />

                  <Tooltip id="edit-tooltip" />
                  <CIcon
                    className={cx('delete-icon')}
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
  )
}

export default Categorys
