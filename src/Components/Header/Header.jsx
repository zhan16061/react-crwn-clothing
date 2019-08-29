import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Header.scss'

import { auth } from '../../../src/firebase/firebase.utils'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {
          currentUser
            ? <div className='option' onClick={() => auth.signOut()} >登出</div>
            : <Link className='option' to='/sign' >登入</Link>
        }
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)
