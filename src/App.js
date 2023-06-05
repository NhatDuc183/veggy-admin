/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts'
import { privateRoutes, publicRoutes } from './routes'
import * as services from './services/services'

function App() {
  const auth = useSelector((state) => state.auth)
  const [routes, setRoutes] = useState([])
  const [billsListData, setBillsListData] = useState([])
  const [productListData, setProductListData] = useState([])
  const [userListData, setUserListData] = useState([])
  const [revenueYearlyData, setRevenueYearlyData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      console.log('fetch API')
      const usersResponse = await services.getUserList()
      setUserListData(usersResponse.data)
    }

    fetchApi()
  }, [])

  useEffect(() => {
    if (auth.user) setRoutes(privateRoutes)
    else setRoutes(publicRoutes)
  }, [])

  const renderRoutes = () => {
    const data = { billsListData, userListData, productListData, revenueYearlyData }
    return routes.map((route, index) => {
      const Page = route.component
      let Layout = DefaultLayout
      if (route.layout) Layout = route.layout
      else if (route.layout === null) Layout = Fragment
      return (
        <Route
          key={index}
          path={route.path}
          exact
          element={
            <Layout>
              <Page {...data} />
            </Layout>
          }
        />
      )
    })
  }

  return (
    <Router>
      <Routes>{renderRoutes()}</Routes>
    </Router>
  )
}

export default App
