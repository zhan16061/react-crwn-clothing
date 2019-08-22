import React from 'react'
import { auth } from '../../../src/firebase/firebase.utils'

import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHPO</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {
          currentUser
            ? <div className='option' onClick={() => auth.signOut()} >登出</div>
            : <Link className='option' to='/sign' >登入</Link>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
