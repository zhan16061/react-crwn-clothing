import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShpoCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionId => createSelector(
  [selectShpoCollections],
  collections => collections[collectionId]
)
