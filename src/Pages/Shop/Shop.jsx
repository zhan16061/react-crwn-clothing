import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectioinPage from '../Collectioin/Collectioin'

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectioinPage} />
    </div>
  )
}

export default ShopPage
