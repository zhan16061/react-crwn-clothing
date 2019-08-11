import React from 'react'
import './Homepage.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>帽子</h1>
            <span className='subtitle'>立即購買</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>外套</h1>
            <span className='subtitle'>立即購買</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>運動鞋</h1>
            <span className='subtitle'>立即購買</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>男生</h1>
            <span className='subtitle'>立即購買</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>女生</h1>
            <span className='subtitle'>立即購買</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
