import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

import './Checkout.scss'

const Checkout = ({ cartItems, total, dispatch }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>商品</span>
      </div>
      <div className='header-block'>
        <span>名稱</span>
      </div>
      <div className='header-block'>
        <span>數量</span>
      </div>
      <div className='header-block'>
        <span>價錢</span>
      </div>
      <div className='header-block'>
        <span>刪除</span>
      </div>
    </div>
    {
      cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
    }
    <div className='total'>
      <span>總和: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
