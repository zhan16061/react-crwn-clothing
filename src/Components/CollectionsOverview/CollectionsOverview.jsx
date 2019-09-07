import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsPreview from '../CollectionPreview/CollectionPreview'
import { selectShpoCollections } from '../../redux/shop/shop.selector'

import './CollectionsOverview.scss'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...othersCollectionsProps }) =>
          <CollectionsPreview key={id} {...othersCollectionsProps} />
        )
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShpoCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
