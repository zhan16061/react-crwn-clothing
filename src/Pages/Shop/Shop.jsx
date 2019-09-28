import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectioinPage from '../Collectioin/Collectioin'

import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionsRef = firestore.collection('collections')
    collectionsRef.onSnapshot(async snapShot => {
      const collectionMap = convertCollectionsSanpshotToMap(snapShot)
      updateCollections(collectionMap)
    })
  }
  render () {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectioinPage} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collecionMap => dispatch(updateCollections(collecionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
