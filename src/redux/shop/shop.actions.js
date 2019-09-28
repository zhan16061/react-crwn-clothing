import ShopActionTypes from './shsp.type'

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})
