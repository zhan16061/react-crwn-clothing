import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import WithSpinner from '../../Components/WithSpinner/WithSpinner'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import CollectioinPage from '../Collectioin/Collectioin'

import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectioinPageWithSpinner = WithSpinner(CollectioinPage)

class ShopPage extends React.Component {
  // constructor super()簡寫
  state = {
    loading: true
  }
  // constructor() {
  //   super()

  //   this.state = {
  //     loading: true
  //   }
  // }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionsRef = firestore.collection('collections')
    collectionsRef.onSnapshot(async snapShot => {
      const collectionMap = convertCollectionsSanpshotToMap(snapShot)
      updateCollections(collectionMap)
      this.setState({loading: false})
    })
  }
  render () {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionsOverviewWithSpinner isLoding={loading} {...props}/>}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectioinPageWithSpinner isLoding={loading} {...props}/>}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collecionMap => dispatch(updateCollections(collecionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
