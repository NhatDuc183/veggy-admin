import className from 'classnames/bind'
import { memo, useEffect, useRef, useState } from 'react'
import LoadingOverlay from 'react-loading-overlay-ts'

import ChartComponent from 'src/components/Chart'
import * as services from 'src/services/services'
import styles from './Chart.module.scss'
import { PieChart } from 'react-minimal-pie-chart'

const cx = className.bind(styles)

const options = [
  { label: new Date().getFullYear(), value: new Date().getFullYear() },
  { label: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
  { label: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
]

export default memo(function Chart({
  revenueYearlyData = [],
  billsListData = [],
  userListData = [],
}) {
  const currentYear = useRef(options[0].value)
  const [revenueYearly, setRevenueYearly] = useState([])
  const [newUserYearly, setNewUserYearly] = useState([])
  const [billsYearly, setBillsYearly] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchApi = async () => {
    setLoading(true)

    let currencyRate = Number(process.env.REACT_APP_CURRENCY_RATE)
    const revenueRes = await services.getRevenueYearly(currentYear.current)
    let revenue = []
    await revenueRes.data.forEach((data) => {
      revenue.push({
        name: 'Tháng ' + data.month,
        'Doanh thu': Number(data.amount) * currencyRate,
      })
    })

    setRevenueYearly(revenue)

    let usersChartData = []
    for (let month = 0; month < 12; month++) {
      let count = 0
      userListData.forEach((data) => {
        let createdAt = new Date(data.createdAt)
        console.log(createdAt.getFullYear(), currentYear.current, createdAt.getMonth(), month)
        if (createdAt.getFullYear() === currentYear.current && createdAt.getMonth() === month)
          count++
      })
      usersChartData.push({
        name: 'Tháng ' + Number(month + 1),
        'Người dùng mới': count,
      })
    }
    setNewUserYearly(usersChartData)

    let billsChartData = []
    for (let month = 0; month < 12; month++) {
      let count = 0
      billsListData.forEach((data) => {
        let createdAt = new Date(data.createdAt)
        if (createdAt.getFullYear() === currentYear.current && createdAt.getMonth() === month)
          count++
      })
      billsChartData.push({
        name: 'Tháng ' + Number(month + 1),
        'Giao dịch mới': count,
      })
    }
    setBillsYearly(billsChartData)

    setLoading(false)
  }

  useEffect(() => {
    const handleData = () => {
      let currencyRate = Number(process.env.REACT_APP_CURRENCY_RATE)
      let revenue = []
      revenueYearlyData.forEach((data) => {
        revenue.push({
          name: 'Tháng ' + data.month,
          'Doanh thu': Number(data.amount) * currencyRate,
        })
      })
      setRevenueYearly(revenue)

      let usersChartData = []
      for (let month = 0; month < 12; month++) {
        let count = 0
        userListData.forEach((data) => {
          let createdAt = new Date(data.createdAt)
          if (createdAt.getFullYear() === currentYear.current && createdAt.getMonth() === month)
            count++
        })
        usersChartData.push({
          name: 'Tháng ' + Number(month + 1),
          'Người dùng mới': count,
        })
      }
      setNewUserYearly(usersChartData)

      let billsChartData = []
      for (let month = 0; month < 12; month++) {
        let count = 0
        billsListData.forEach((data) => {
          let createdAt = new Date(data.createdAt)
          if (createdAt.getFullYear() === currentYear.current && createdAt.getMonth() === month)
            count++
        })
        billsChartData.push({
          name: 'Tháng ' + Number(month + 1),
          'Giao dịch mới': count,
        })
      }
      setBillsYearly(billsChartData)
    }

    if (revenueYearlyData.length > 0 && billsListData.length > 0 && userListData.length > 0) {
      handleData()
      setLoading(false)
    }
  }, [revenueYearlyData, billsListData, userListData])

  const handleChangeYear = (e) => {
    currentYear.current = Number(e.target.value)
    fetchApi()
  }

  return (
    <div className={cx('chartWrapper')}>
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
          <>
            <div className={cx('chart')}>
              <select
                // value={currentYear.current}
                // onChange={handleChangeYear}
                className={cx('select-year')}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={cx('chart')}>
              <div className={cx('rechart')}>
                <ChartComponent
                  // data={revenueYearly}
                  title={'Biểu đồ doanh thu năm ' + currentYear.current}
                  grid
                  dataKey="Doanh thu"
                />
              </div>
              <div className={cx('circle-chart')}>
                <PieChart
                  data={[
                    { title: 'Mở lớp học', value: 1100000, color: '#FFCCB6', label: '55%' },
                    { title: 'Quảng cáo', value: 500000, color: '#FFFFB5', label: '25%' },
                    { title: 'Khác', value: 400000, color: '#ECD5E3', label: '20%' },
                  ]}
                  radius={30}
                  label={({ dataEntry }) => dataEntry.label}
                  labelStyle={{ fontSize: '4px' }}
                  segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className={cx('chart')}>
              <div className={cx('rechart')}>
                <ChartComponent
                  // data={newUserYearly}
                  title={'Biểu đồ người dùng mới năm ' + currentYear.current}
                  grid
                  dataKey="Người dùng mới"
                />
              </div>
              <div className={cx('circle-chart')}>
                <PieChart
                  data={[
                    { title: 'Học sinh', value: 900, color: '#CCE2CB', label: '56%' },
                    { title: 'Gia sư', value: 500, color: '#8FCACA', label: '32%' },
                    { title: 'Khác', value: 200, color: '#97C1A9', label: '12%' },
                  ]}
                  radius={30}
                  label={({ dataEntry }) => dataEntry.label}
                  labelStyle={{ fontSize: '4px' }}
                  segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className={cx('chart')}>
              <div className={cx('rechart')}>
                <ChartComponent
                  // data={billsYearly}
                  title={'Biểu đồ số lượt giao dịch năm ' + currentYear.current}
                  grid
                  dataKey="Giao dịch mới"
                />
              </div>
              <div className={cx('circle-chart')}>
                <PieChart
                  data={[
                    { title: 'Amazone Pay', value: 1200, color: '#D5AAFF', label: '30%' },
                    { title: 'Paypal', value: 1800, color: '#C5A3FF', label: '45%' },
                    { title: 'Google Pay', value: 600, color: '#B28DFF', label: '15%' },
                    { title: 'Khác', value: 400, color: '#ECD4FF', label: '10%' },
                  ]}
                  radius={30}
                  label={({ dataEntry }) => dataEntry.label}
                  labelStyle={{ fontSize: '4px' }}
                  segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </LoadingOverlay>
    </div>
  )
})
