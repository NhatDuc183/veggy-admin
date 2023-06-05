import config from 'src/config'
import { HeadlessLayout } from 'src/layouts'
import Home from 'src/pages/Home'
import User from 'src/pages/User'
import UserList from 'src/pages/UserList'
import ProductList from 'src/pages/ProductList'
import BillsList from 'src/pages/Bills/BillsList'
import Bills from 'src/pages/Bills'
import Chart from 'src/pages/Chart'
import Login from 'src/pages/Login'
import Categorys from 'src/pages/Categorys'

export const publicRoutes = [
  {
    path: config.routes.home,
    component: Login,
    layout: HeadlessLayout,
  },
  {
    path: config.routes.home2,
    component: Login,
    layout: HeadlessLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: HeadlessLayout,
  },
]

export const privateRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.home2,
    component: Home,
  },
  {
    path: config.routes.user,
    component: User,
  },
  {
    path: config.routes.userList,
    component: UserList,
  },
  {
    path: config.routes.productList,
    component: ProductList,
  },
  {
    path: config.routes.bills,
    component: Bills,
  },
  {
    path: config.routes.billsList,
    component: BillsList,
  },
  {
    path: config.routes.chart,
    component: Chart,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: HeadlessLayout,
  },
  {
    path: config.routes.logout,
    component: Login,
    layout: HeadlessLayout,
  },
  {
    path: config.routes.categorys,
    component: Categorys,
  },
]
