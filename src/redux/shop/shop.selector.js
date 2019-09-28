import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShpoCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShpoCollections],
  collectioins => Object.keys(collectioins).map(key => collectioins[key])
)

export const selectCollection = collectionId => createSelector(
  [selectShpoCollections],
  collections => collections[collectionId]
)
