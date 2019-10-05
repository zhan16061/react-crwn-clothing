import { takeLatest, put, call, all } from 'redux-saga/effects'

import userActionsType from '../user/user.types'
import { clearCart } from './cart.actions'

export function * clearCartOnSignOut () {
  yield put(clearCart())
}

export function * onSignOutSuccess () {
  yield takeLatest(userActionsType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function * cartRootSagas () {
  yield all([
    call(onSignOutSuccess)
  ])
}
