import className from 'classnames/bind'
import { memo, useEffect, useRef, useState } from 'react'
import LoadingOverlay from 'react-loading-overlay-ts'
import { Link, useParams } from 'react-router-dom'
import DataGrid from 'src/components/DataGrid'
import * as services from 'src/services/services'
import { handleQuantity, handleStatusCourse } from 'src/utils/commonFunc'
import styles from './ProductList.module.scss'
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
import axios from 'axios'
const cx = className.bind(styles)

// const fetchApi = async (page) => {
//   const res = await services.getproductList(page)
//   setData((prev) => [...prev, ...res.data.data])
//   setLoading(false)
// }

// useEffect(() => {
//     if (productListData.length > 0) setData(productListData);
// }, [productListData]);

// useEffect(() => {
//   fetchApi()
// }, [])

// const columns = [
//   { field: 'id', headerName: 'ID', flex: 0.35, headerAlign: 'center', align: 'center' },
//   {
//     field: 'title',
//     headerName: 'Tiêu đề',
//     flex: 2.5,
//     headerAlign: 'center',
//   },
//   { field: 'description', headerName: 'Mô tả', flex: 2.5, headerAlign: 'center' },
//   {
//     field: 'tuition',
//     headerName: 'Học phí',
//     flex: 1,
//     headerAlign: 'center',

//     renderCell: (params) => {
//       return <>{handleQuantity(params.row.tuition, '.', ' VNĐ')}</>
//     },
//   },
//   {
//     field: 'status',
//     headerName: 'Trạng thái',
//     flex: 1,
//     headerAlign: 'center',
//     align: 'center',
//     renderCell: (params) => {
//       return <>{handleStatusCourse(params.row.status)}</>
//     },
//   },
//   {
//     field: 'action',
//     headerName: 'Chỉnh sửa',
//     flex: 1,
//     headerAlign: 'center',
//     align: 'center',
//     renderCell: (params) => {
//       return (
//         <>
//           <Link to={'/course/' + params.row.id}>
//             <button className={cx('dataGridEditBtn')}>View</button>
//           </Link>
//         </>
//       )
//     },
//   },
// ]

// const onPageChange = (e) => {
//   if (!(e < currentPage.current)) {
//     currentPage.current = e + 1
//     fetchApi(currentPage.current)
//   }
// }

// return (
//   <LoadingOverlay
//     active={loading}
//     spinner
//     text="Loading..."
//     className={cx('productList')}
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
//     {!loading ? (
//       <DataGrid
//         rows={data}
//         columns={columns}
//         disableSelectionOnClick
//         onPageChange={(e) => onPageChange(e)}
//       />
//     ) : (
//       <></>
//     )}
//   </LoadingOverlay>
// )

const ProductList = () => {
  const currentPage = useRef(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const [smShow, setSmShow] = useState(false)
  const [lgShow, setLgShow] = useState(false)

  const handleClose = () => setSmShow(false)
  const handleShow = () => setSmShow(true)
  const navigate = useNavigate()

  const [images, setImages] = useState([])
  const maxNumber = 1

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  const [product, setProduct] = useState({
    name: '',
    birthday: '',
    email: '',
    phone: '',
  })

  const { id } = useParams()
  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const result = await axios.get('http://127.0.0.1:8080/veggy-service/v1/product/list')
    setProduct(result.data)
  }

  return (
    <div className={cx('content')}>
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
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              {/* <img
                    src="https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg"
                    alt=""
                    width="100"
                  />
                  <div className={cx('image-item__btn-wrapper">
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
              <Form.Control type="text" placeholder="Tên sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Mã</Form.Label>
              <Form.Control type="text" placeholder="Mã sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Danh mục</Form.Label>
              <CFormSelect aria-label="Chọn danh mục">
                <option disabled>Chọn danh mục</option>
                <option value="1">Rau</option>
                <option value="2">Củ</option>
                <option value="3">Quả</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Đơn vị tính</Form.Label>
              <CFormSelect aria-label="Chọn đơn vị tính">
                <option disabled>Chọn đơn vị tính</option>
                <option value="1">Kilogram</option>
                <option value="2">Gram </option>
                <option value="3">Bó</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Giá bán</Form.Label>
              <Form.Control type="number" placeholder="Giá bán sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Ngày sản xuất</Form.Label>
              <Form.Control type="text" placeholder="Ngày sản xuất" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Ngày hết hạn</Form.Label>
              <Form.Control type="text" placeholder="Ngày hết hạn" autoFocus />
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
          <Modal.Title id="example-modal-sizes-title-lg">Cập nhật sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              {/* <img
                    src="https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg"
                    alt=""
                    width="100"
                  />
                  <div className={cx('image-item__btn-wrapper')}>
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
              <Form.Control type="text" placeholder="Tên sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Mã</Form.Label>
              <Form.Control type="text" placeholder="Mã sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Danh mục</Form.Label>
              <CFormSelect aria-label="Chọn danh mục">
                <option disabled>Chọn danh mục</option>
                <option value="1">Rau</option>
                <option value="2">Củ</option>
                <option value="3">Quả</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Đơn vị tính</Form.Label>
              <CFormSelect aria-label="Chọn đơn vị tính">
                <option disabled>Chọn đơn vị tính</option>
                <option value="1">Kilogram</option>
                <option value="2">Gram </option>
                <option value="3">Bó</option>
              </CFormSelect>
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Giá bán</Form.Label>
              <Form.Control type="number" placeholder="Giá bán sản phẩm" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Ngày sản xuất</Form.Label>
              <Form.Control type="text" placeholder="Ngày sản xuất" autoFocus />
            </Form.Group>
            <Form.Group className={cx('mb-3" controlId="exampleForm.ControlInput1')}>
              <Form.Label>Ngày hết hạn</Form.Label>
              <Form.Control type="text" placeholder="Ngày hết hạn" autoFocus />
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
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={cx('header-add')}>
        <Button
          variant="primary"
          onClick={handleShow}
          data-toggle="modal"
          data-coreui-target="#addProduct"
        >
          {/* <button
            type="button"
            className={cx('btn-close')}
            data-coreui-dismiss="modal"
            data-coreui-target="#my-modal"
            aria-label="Close"
          > */}
          <CIcon icon={icon.cilMedicalCross} style={{ height: 18 + 'px' }} />
          Thêm mới
        </Button>
        {/* </button> */}
        {/* <Modal
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            className={cx('modal modal-lg')}
            show={show}
            onHide={handleClose}
          >
  
          </Modal> */}
      </div>
      <div className={cx('table-content')}>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
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
                  onClick={() => setLgShow(true)}
                  className={cx('edit-icon')}
                  icon={icon.cilPencil}
                  data-tooltip-id="edit-tooltip"
                  data-tooltip-content="Chỉnh sửa"
                  data-coreui-target="#editProduct"
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
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ProductList
