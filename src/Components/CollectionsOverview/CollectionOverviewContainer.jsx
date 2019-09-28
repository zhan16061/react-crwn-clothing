import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from './CollectionsOverview'
import WithSpinner from '../WithSpinner/WithSpinner'
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
})

const enhanceHoc = compose(
  connect(mapStateToProps),
  WithSpinner
)

export default enhanceHoc(CollectionsOverview)

// equal: connect(mapStateToProps)(WithSpinner(CollectionsOverview))
