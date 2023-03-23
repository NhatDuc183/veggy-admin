import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCol, CButton } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import Table from 'react-bootstrap/Table'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Tooltip } from 'react-tooltip'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

// const ThemeView = () => {
//   const [color, setColor] = useState('rgb(255, 255, 255)')
//   const ref = createRef()

//   useEffect(() => {
//     const el = ref.current.parentNode.firstChild
//     const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
//     setColor(varColor)
//   }, [ref])

//   return (
//     <table className="table w-100" ref={ref}>
//       <tbody>
//         <tr>
//           <td className="text-medium-emphasis">HEX:</td>
//           <td className="font-weight-bold">{rgbToHex(color)}</td>
//         </tr>
//         <tr>
//           <td className="text-medium-emphasis">RGB:</td>
//           <td className="font-weight-bold">{color}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }

// const ThemeColor = ({ className, children }) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
//       <div className={classes} style={{ paddingTop: '75%' }}></div>
//       {children}
//       <ThemeView />
//     </CCol>
//   )
// }

// ThemeColor.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// }

const Categorys = () => {
  const [smShow, setSmShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)

  const handleClose = () => setSmShow(false)
  const handleShow = () => setSmShow(true)
  const navigate = useNavigate()

  return (
    <div className="content">
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control type="text" placeholder="Tên danh mục" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã danh mục</Form.Label>
              <Form.Control type="text" placeholder="Mã danh mục" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control type="text" value="rau" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã danh mục</Form.Label>
              <Form.Control type="text" value="RAU" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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

      <div className="header-add">
        {/* <Link to="/manage/addCategorys">
          <CIcon icon={icon.cilMedicalCross} />
          Thêm mới
        </Link> */}
        <div className="input-group mb-3 input-search">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa tìm kiếm"
            aria-label="Nhập từ khóa tìm kiếm"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append ">
            <Button variant="primary" className="input-group-text" id="basic-addon2">
              <CIcon icon={icon.cilSearch} />
            </Button>
          </div>
        </div>
        {/* <Button variant="primary" data-target="@modal-add-category" onClick={() => setShow(true)}>
          <CIcon icon={icon.cilMedicalCross} />
          Thêm mới
        </Button> */}
        <Button type="submit" onClick={() => setSmShow(true)} className="me-2">
          Thêm mới
        </Button>
      </div>
      <div className="table-content">
        <Table>
          <thead>
            <tr>
              <th colSpan={1}>STT</th>
              <th>Danh mục </th>
              <th>Mô tả</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  onClick={() => setLgShow(true)}
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                  data-target="@modal-edit-category"
                />

                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>Rau </th>
              <th className="desciption-th">Rau</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
                <CIcon
                  className="delete-icon"
                  icon={icon.cilX}
                  data-tooltip-id="delete-tooltip"
                  data-tooltip-content="Xóa"
                />
                <Tooltip id="delete-tooltip" />
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Categorys
