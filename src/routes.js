import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Categorys = React.lazy(() => import('./views/manage/categorys/Categorys'))
const Products = React.lazy(() => import('./views/manage/products/Products'))
const Customers = React.lazy(() => import('./views/manage/customers/Customers'))
const Bills = React.lazy(() => import('./views/manage/bills/Bills'))
const ProductCancel = React.lazy(() => import('./views/manage/productCancel/ProductCancel'))
const AddCategory = React.lazy(() => import('./views/manage/categorys/AddCategory'))
const Supplier = React.lazy(() => import('./views/manage/suppliers/Supplier'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/manage', name: 'Quản Lý', element: Categorys, exact: true },
  { path: '/manage/categorys', name: 'Quản Lý Danh Mục', element: Categorys },
  { path: '/manage/products', name: 'Quản Lý Sản Phẩm', element: Products },
  { path: '/manage/customers', name: 'Quản Lý Khách Hàng', element: Customers },
  { path: '/manage/bill', name: 'Quản Lý Hóa Đơn', element: Bills },
  { path: '/manage/productCancel', name: 'Quản Lý Sản Phẩm Hủy', element: ProductCancel },
  { path: '/manage/addCategorys', name: 'Thêm danh mục', element: AddCategory },
  { path: '/manage/suppliers', name: 'Quản Lý Nhà Cung cấp', element: Supplier },
]

export default routes
