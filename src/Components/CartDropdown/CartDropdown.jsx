import React from 'react'

import CustomButton from '../CustomButton/CustomButton'

import './CartDropdown.scss'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>立即購買</CustomButton>
  </div>
)

export default CartDropdown
