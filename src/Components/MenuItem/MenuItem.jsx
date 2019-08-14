import React from 'react'
import './MenuItem.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = (props) => {
  console.log('props:', props)
  const { title, imageUrl, size, history, linkUrl, match } = props
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>立即購買</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
