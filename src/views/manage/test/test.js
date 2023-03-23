import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { CCol, CDatePicker, CFormSelect } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Tooltip } from 'react-tooltip'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import ImageUploading from 'react-images-uploading'

const Products = () => {
  const [smShow, setSmShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)

  const handleClose = () => setSmShow(false)
  const handleShow = () => setSmShow(true)
  const navigate = useNavigate()

  const [images, setImages] = React.useState([])
  const maxNumber = 1

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className="content">
      {/* modal */}
      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Thêm mới sản phẩm</Modal.Title>
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
              <Form.Control type="text" placeholder="Tên sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã</Form.Label>
              <Form.Control type="text" placeholder="Mã sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Danh mục</Form.Label>
              <CFormSelect aria-label="Chọn danh mục">
                <option disabled>Chọn danh mục</option>
                <option value="1">Rau</option>
                <option value="2">Củ</option>
                <option value="3">Quả</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Đơn vị tính</Form.Label>
              <CFormSelect aria-label="Chọn đơn vị tính">
                <option disabled>Chọn đơn vị tính</option>
                <option value="1">Kilogram</option>
                <option value="2">Gram </option>
                <option value="3">Bó</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá bán</Form.Label>
              <Form.Control type="number" placeholder="Giá bán sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày sản xuất</Form.Label>
              <Form.Control type="text" placeholder="Ngày sản xuất" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày hết hạn</Form.Label>
              <Form.Control type="text" placeholder="Ngày hết hạn" autoFocus />
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
          <Modal.Title id="example-modal-sizes-title-lg">Cập nhật sản phẩm</Modal.Title>
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
              <Form.Control type="text" placeholder="Tên sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã</Form.Label>
              <Form.Control type="text" placeholder="Mã sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Danh mục</Form.Label>
              <CFormSelect aria-label="Chọn danh mục">
                <option disabled>Chọn danh mục</option>
                <option value="1">Rau</option>
                <option value="2">Củ</option>
                <option value="3">Quả</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Đơn vị tính</Form.Label>
              <CFormSelect aria-label="Chọn đơn vị tính">
                <option disabled>Chọn đơn vị tính</option>
                <option value="1">Kilogram</option>
                <option value="2">Gram </option>
                <option value="3">Bó</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Giá bán</Form.Label>
              <Form.Control type="number" placeholder="Giá bán sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày sản xuất</Form.Label>
              <Form.Control type="text" placeholder="Ngày sản xuất" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày hết hạn</Form.Label>
              <Form.Control type="text" placeholder="Ngày hết hạn" autoFocus />
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
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="header-add">
        <Button
          variant="primary"
          onClick={handleShow}
          data-toggle="modal"
          data-coreui-target="#addProduct"
        >
          {/* <button
          type="button"
          className="btn-close"
          data-coreui-dismiss="modal"
          data-coreui-target="#my-modal"
          aria-label="Close"
        > */}
          <CIcon icon={icon.cilMedicalCross} />
          Thêm mới
        </Button>
        {/* </button> */}
        {/* <Modal
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          className="modal modal-lg"
          show={show}
          onHide={handleClose}
        >

        </Modal> */}
      </div>
      <div className="table-content">
        <Table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Danh mục </th>
              <th>Giá bán</th>
              <th>Đ.V tính</th>
              <th>Ngày Đóng Gói</th>
              <th>Hạn Sử Dụng</th>
              <th>Mô tả</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>
                Cây thảo nhỏ, cao 7-10 cm. Thân mảnh, mọc bò, có lông khi còn non, bén rẽ ở các mấu.
                Lá mọc so le, nhưng thường tụ họp 2 – 5 cái ở một mấu, phiến lá nhẵn, hình thận hoặc
                gần tròn, mép khía tai bèo; cuống lá mảnh, dài 3 – 5 cm, có khi đến 7 – 8 cm
              </th>
              <th>
                <CIcon
                  className="edit-icon"
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                  data-coreui-target="#editProduct"
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
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>ghfghfg</th>
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
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>
                Cây thảo nhỏ, cao 7-10 cm. Thân mảnh, mọc bò, có lông khi còn non, bén rẽ ở các mấu.
                Lá mọc so le, nhưng thường tụ họp 2 – 5 cái ở một mấu, phiến lá nhẵn, hình thận hoặc
                gần tròn, mép khía tai bèo; cuống lá mảnh, dài 3 – 5 cm, có khi đến 7 – 8 cm
              </th>
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
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>
                Cây thảo nhỏ, cao 7-10 cm. Thân mảnh, mọc bò, có lông khi còn non, bén rẽ ở các mấu.
                Lá mọc so le, nhưng thường tụ họp 2 – 5 cái ở một mấu, phiến lá nhẵn, hình thận hoặc
                gần tròn, mép khía tai bèo; cuống lá mảnh, dài 3 – 5 cm, có khi đến 7 – 8 cm
              </th>
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
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>
                Cây thảo nhỏ, cao 7-10 cm. Thân mảnh, mọc bò, có lông khi còn non, bén rẽ ở các mấu.
                Lá mọc so le, nhưng thường tụ họp 2 – 5 cái ở một mấu, phiến lá nhẵn, hình thận hoặc
                gần tròn, mép khía tai bèo; cuống lá mảnh, dài 3 – 5 cm, có khi đến 7 – 8 cm
              </th>
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
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>
                Cây thảo nhỏ, cao 7-10 cm. Thân mảnh, mọc bò, có lông khi còn non, bén rẽ ở các mấu.
                Lá mọc so le, nhưng thường tụ họp 2 – 5 cái ở một mấu, phiến lá nhẵn, hình thận hoặc
                gần tròn, mép khía tai bèo; cuống lá mảnh, dài 3 – 5 cm, có khi đến 7 – 8 cm
              </th>
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
              <th>Rau má</th>
              <th>rau</th>
              <th>10.000</th>
              <th>Kilogram</th>
              <th>09/04/2023</th>
              <th>09/04/2023</th>
              <th>
                Cây thảo nhỏ, cao 7-10 cm. Thân mảnh, mọc bò, có lông khi còn non, bén rẽ ở các mấu.
                Lá mọc so le, nhưng thường tụ họp 2 – 5 cái ở một mấu, phiến lá nhẵn, hình thận hoặc
                gần tròn, mép khía tai bèo; cuống lá mảnh, dài 3 – 5 cm, có khi đến 7 – 8 cm
              </th>
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
