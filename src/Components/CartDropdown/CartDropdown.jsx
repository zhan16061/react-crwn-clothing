import React from 'react'
import { connect } from 'react-redux'

import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { selectCartItems } from '../../redux/cart/cart.selector'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' >
        {
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }
      </div>
      <CustomButton>立即購買</CustomButton>
    </div>
  )
}

const mapStateToProps = stste => {
  return {
    cartItems: selectCartItems(stste)
  }
}

export default connect(mapStateToProps)(CartDropdown)
