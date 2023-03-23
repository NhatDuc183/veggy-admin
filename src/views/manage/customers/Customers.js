import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { CImage, CFormSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Tooltip } from 'react-tooltip'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ImageUploading from 'react-images-uploading'

const Products = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [images, setImages] = React.useState([])
  const maxNumber = 1

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className="content">
      <Modal
        id="edit-customer"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        className="modal modal-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <img
                  src="https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg"
                  alt=""
                  width="100"
                />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div> */}
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
                  <div className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Thêm ảnh
                    </button>
                    &nbsp;
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)}>Thay đổi</button>
                          <button onClick={() => onImageRemove(index)}>Xóa</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên </Form.Label>
              <Form.Control
                type="text"
                placeholder="Tên khách hàng"
                autoFocus
                value="Trần Nhật Đức"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày sinh </Form.Label>
              <Form.Control type="text" placeholder="Ngày sinh" autoFocus value="18/03/2000" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giới tính</Form.Label>
              <CFormSelect aria-label="Chọn danh mục">
                <option disabled>Chọn giới tính</option>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
                value="trannhatduc@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số điện thoại </Form.Label>
              <Form.Control type="tel" placeholder="Số điện thoại" autoFocus value="0358810333" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
              <th>STT</th>
              <th>Tên</th>
              <th>Ngày Sinh </th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>
                <CImage
                  // rounded
                  // thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Trần Nhật Đức
              </th>
              <th>18/03/2000</th>
              <th>trannhatduc@gmail.com</th>
              <th>0358810333</th>
              <th>205 Phan Văn Hân, P17, QBT, TPHCM</th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                  onClick={handleShow}
                  data-toggle="modal"
                  data-coreui-target="#edit-customer"
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
              <th>
                <CImage
                  // rounded
                  // thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Trần Nhật Đức
              </th>
              <th>18/03/2000</th>
              <th>trannhatduc@gmail.com</th>
              <th>0358810333</th>
              <th>205 Phan Văn Hân, P17, QBT, TPHCM</th>
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
              <th>
                <CImage
                  // rounded
                  // thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Trần Nhật Đức
              </th>
              <th>18/03/2000</th>
              <th>trannhatduc@gmail.com</th>
              <th>0358810333</th>
              <th>205 Phan Văn Hân, P17, QBT, TPHCM</th>
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
              <th>
                <CImage
                  // rounded
                  // thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Trần Nhật Đức
              </th>
              <th>18/03/2000</th>
              <th>trannhatduc@gmail.com</th>
              <th>0358810333</th>
              <th>205 Phan Văn Hân, P17, QBT, TPHCM</th>
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
              <th>
                <CImage
                  // rounded
                  // thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Trần Nhật Đức
              </th>
              <th>18/03/2000</th>
              <th>trannhatduc@gmail.com</th>
              <th>0358810333</th>
              <th>205 Phan Văn Hân, P17, QBT, TPHCM</th>
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
              <th>
                <CImage
                  // rounded
                  // thumbnail
                  src="src/assets/images/avatars/avt.jpg"
                  width={50}
                  height={50}
                />
                Trần Nhật Đức
              </th>
              <th>18/03/2000</th>
              <th>trannhatduc@gmail.com</th>
              <th>0358810333</th>
              <th>2 05 Phan Văn Hân, P17, QBT, TPHCM</th>
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

export default Products
