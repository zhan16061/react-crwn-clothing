import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton
} from './CollectionStyle'

const CollectionItem = ({ addItem, item }) => {
  const { imageUrl, name, price } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} invented>新增至購物車</AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
