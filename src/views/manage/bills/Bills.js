import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { CImage, CButton, CFormSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Tooltip } from 'react-tooltip'
import * as icon from '@coreui/icons'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ImageUploading from 'react-images-uploading'

const Bill = () => {
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
      <div className="table-content">
        <Table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Tên khách hàng </th>
              <th>Nhân viên giao hàng </th>
              <th>Tổng tiền</th>
              <th>Ngày tạo</th>
              <th>Ngày giao</th>
              <th>Trạng thái ĐH</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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
              <th>DH111</th>
              <th>
                <CImage
                  rounded
                  thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Nguyễn Văn A
              </th>
              <th>Nguyễn Văn B</th>
              <th>100.000</th>
              <th>12/11/2022</th>
              <th>09/04/2023</th>
              <th>
                <CButton color="success" shape="rounded-pill">
                  Hoàn tất
                </CButton>
              </th>
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

export default Bill
