import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => {
    console.log('selectCartItemsCount')
    return cartItems.reduce(
      (accuQuantity, cartItem) => accuQuantity + cartItem.quantity, 0
    )
  }
)
