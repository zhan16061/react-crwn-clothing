import React from 'react'
import SHOP_DATA from './shopData.js'
import CollectionsPreview from '../../Components/CollectionPreview/CollectionPreview.jsx'

class ShopPage extends React.Component {
  constructor () {
    super()

    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(({id, ...othersCollectionsProps}) =>
            <CollectionsPreview key={id} {...othersCollectionsProps} />
          )
        }
      </div>
    )
  }
}

export default ShopPage
