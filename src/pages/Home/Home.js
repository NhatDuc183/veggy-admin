import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import ChartComponent from 'src/components/Chart'
import { PieChart } from 'react-minimal-pie-chart'

const cx = classNames.bind(styles)

const options = [
  { label: new Date().getFullYear(), value: new Date().getFullYear() },
  { label: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
  { label: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
]

function Home() {
  return (
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
            title={'Biểu đồ doanh thu năm '}
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
            title={'Biểu đồ người dùng mới năm '}
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
            title={'Biểu đồ số lượt giao dịch năm '}
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
  )
}

export default Home
