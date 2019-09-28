import SHOP_DATA from './shop.data'

import ShopActionType from './shsp.type'

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
