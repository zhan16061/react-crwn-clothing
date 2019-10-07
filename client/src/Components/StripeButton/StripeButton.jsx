import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_ZOOkKJJlr5Th1sQqNZXijWIR00UiyXDmso'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      window.alert('Payment successful.')
    }).catch(error => {
      console.log('Payment error:', error)
      window.alert('Patment fail.')
    })
  }
  return (
    <StripeCheckout
      label='信用卡付款'
      name='皇冠服飾'
      billingAddress
      shippingAddress
      image='https://image.flaticon.com/icons/svg/91/91202.svg'
      description={`總價: $${price}`}
      amount={priceForStripe}
      panelLabel='立即付款'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
