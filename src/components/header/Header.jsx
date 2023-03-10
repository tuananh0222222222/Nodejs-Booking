import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'


import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Bed</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Plane</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car </span>
          </div>
        
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort Taxi</span>
          </div>
        </div>

        <h1 className='headerTitle'>Tìm kiếm địa điểm đến yêu thích của bạn</h1>
        <p className='headerDesc'>
        Nhận phần thưởng cho chuyến đi của bạn - mở khóa khoản tiết kiệm tức thì từ 10% trở lên bằng tài khoản miễn phí
        </p>
        <button className='headerBtn'>Đăng ký / Đăng nhập</button>
      </div>
    </div>
  )
}

export default Header


