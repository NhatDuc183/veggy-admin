import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCol, CButton, CForm, CFormLabel, CFormInput, CFormText } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import Table from 'react-bootstrap/Table'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Tooltip } from 'react-tooltip'
import { useNavigate } from 'react-router-dom'

// const ThemeView = () => {
//   const [color, setColor] = useState('rgb(255, 255, 255)')
//   const ref = createRef()

//   useEffect(() => {
//     const el = ref.current.parentNode.firstChild
//     const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
//     setColor(varColor)
//   }, [ref])

//   return (
//     <table className="table w-100" ref={ref}>
//       <tbody>
//         <tr>
//           <td className="text-medium-emphasis">HEX:</td>
//           <td className="font-weight-bold">{rgbToHex(color)}</td>
//         </tr>
//         <tr>
//           <td className="text-medium-emphasis">RGB:</td>
//           <td className="font-weight-bold">{color}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }

// const ThemeColor = ({ className, children }) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
//       <div className={classes} style={{ paddingTop: '75%' }}></div>
//       {children}
//       <ThemeView />
//     </CCol>
//   )
// }

// ThemeColor.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// }

const AddCategory = () => {
  return (
    <div className="">
      <CForm className="row g-3">
        <CFormLabel htmlFor="lable">Tên danh mục</CFormLabel>
        <div className="right-input">
          <CFormInput
            type="text"
            id="nameCategory"
            placeholder="Tên danh mục"
            aria-describedby="nameInput"
          />
          <CFormText component="span" id="nameInput">
            Độ dài từ 2 đến 25 ký tự
          </CFormText>
        </div>
      </CForm>
    </div>
  )
}

export default AddCategory
