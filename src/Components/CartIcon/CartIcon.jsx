import React from 'react'
import { connect } from 'react-redux'

import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapActionsToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CartIcon)
