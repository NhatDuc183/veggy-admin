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
  const [loading, setLoading] = useState(true)

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
      ) : (
        <></>
      )}
    </LoadingOverlay>
  )
}

export default Categorys
