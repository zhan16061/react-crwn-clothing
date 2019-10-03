import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'
import ShopActionTypes from './shsp.type'

export function * fetchCollectionsAsync () {
  try {
    const collectionsRef = firestore.collection('collections')

    const snapShot = yield collectionsRef.get()
    const collectionMap = yield call(convertCollectionsSanpshotToMap, snapShot)
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    console.log('fetchCollectionsAsync error:', error)
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function * fetchCollectionsStart () {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
