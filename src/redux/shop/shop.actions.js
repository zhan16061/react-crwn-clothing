import ShopActionTypes from './shsp.type'
import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils'
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
})

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionsRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionsRef
      .get()
      .then(snapShot => {
        const collectionMap = convertCollectionsSanpshotToMap(snapShot)
        dispatch(fetchCollectionsSuccess(collectionMap))
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}
