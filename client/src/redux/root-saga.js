import { all, call } from 'redux-saga/effects'

import { userRootSagas } from './user/user.sagas'
import { shpoRootSagas } from './shop/shop.sagas'
import { cartRootSagas } from './cart/cart.sagas'

export default function * rootSaga () {
  yield all([
    call(shpoRootSagas),
    call(userRootSagas),
    call(cartRootSagas)
  ])
}
