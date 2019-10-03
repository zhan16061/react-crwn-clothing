import { all, call } from 'redux-saga/effects'

import { userRootSagas } from './user/user.sagas'
import { fetchCollectionsStart } from './shop/shop.sagas'

export default function * rootSaga () {
  yield all([
    call(fetchCollectionsStart),
    call(userRootSagas)
  ])
}
