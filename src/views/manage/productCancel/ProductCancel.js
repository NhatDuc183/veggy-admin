import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import Table from 'react-bootstrap/Table'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Tooltip } from 'react-tooltip'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ProductCancel = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="content">
      <Modal
        id="detail-bill"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        className="modal modal-xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên món</th>
                <th>Danh mục </th>
                <th>Số lượng </th>
                <th>Giá bán</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>rau má</th>
                <th>rau</th>
                <th>3</th>
                <th>100.000</th>
                <th>300.000</th>
              </tr>

              <tr>
                <th>1</th>
                <th>rau má</th>
                <th>rau</th>
                <th>3</th>
                <th>100.000</th>
                <th>300.000</th>
              </tr>

              <tr>
                <th>1</th>
                <th>rau má</th>
                <th>rau</th>
                <th>3</th>
                <th>100.000</th>
                <th>300.000</th>
              </tr>

              <tr>
                <th>1</th>
                <th>rau má</th>
                <th>rau</th>
                <th>3</th>
                <th>100.000</th>
                <th>300.000</th>
              </tr>

              <tr>
                <th>1</th>
                <th>rau má</th>
                <th>rau</th>
                <th>3</th>
                <th>100.000</th>
                <th>300.000</th>
              </tr>

              <tr>
                <th>1</th>
                <th>rau má</th>
                <th>rau</th>
                <th>3</th>
                <th>100.000</th>
                <th>300.000</th>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div className="header-add">
        <CButton className="addContent" color="info" variant="outline">
          <CIcon icon={icon.cilMedicalCross} />
          Thêm mới
        </CButton>
      </div> */}
      <div className="table-content">
        <Table>
          <thead>
            <tr>
              <th colSpan={1}>STT</th>
              <th>Mã sản phẩm </th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Tổng tiền</th>
              <th>Ngày hủy</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="detail-icon"
                  icon={icon.cilNotes}
                  data-tooltip-id="detail-tooltip"
                  data-tooltip-content="Chi tiết"
                  onClick={handleShow}
                  data-toggle="modal"
                  data-coreui-target="#detail-bill"
                />
                <Tooltip id="detail-tooltip" />
              </th>
            </tr>

            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                />
                <Tooltip id="edit-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="detail-icon"
                  icon={icon.cilNotes}
                  data-tooltip-id="detail-tooltip"
                  data-tooltip-content="Chi tiết"
                  onClick={handleShow}
                  data-toggle="modal"
                  data-coreui-target="#detail-bill"
                />
                <Tooltip id="detail-tooltip" />
              </th>
            </tr>
            <tr>
              <th>1</th>
              <th>SP111 </th>
              <th>Rau má</th>
              <th>6</th>
              <th>10.000</th>
              <th>60.000</th>
              <th>02/06/2022</th>
              <th>
                <CIcon
                  className="detail-icon"
                  icon={icon.cilNotes}
                  data-tooltip-id="detail-tooltip"
                  data-tooltip-content="Chi tiết"
                  onClick={handleShow}
                  data-toggle="modal"
                  data-coreui-target="#detail-bill"
                />
                <Tooltip id="detail-tooltip" />
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ProductCancel
