import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../Components/CollectionItem/CollectionItem'

import './Collectioin.scss'

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { collection: selectCollection(ownProps.match.params.collectionId)(state) }
}

export default connect(mapStateToProps)(CollectionPage)
