import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShpoCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShpoCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionId => createSelector(
  [selectShpoCollections],
  collections => collections ? collections[collectionId] : null
)
