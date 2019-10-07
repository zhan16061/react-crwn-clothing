import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import WithSpinner from '../../Components/WithSpinner/WithSpinner'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import CollectionPage from './Collectioin'

const mapStateToProps = createStructuredSelector({
  /**
   * 錯誤寫法: isLoading: !selectIsCollectionsLoaded
   * 因為 createStructuredSelector()第一個參數之物件的屬性需要為function
   * 故無法使用createStructuredSelector原本的縮寫方式
   */
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const enhanceHoc = compose(
  connect(mapStateToProps),
  WithSpinner
)

export default enhanceHoc(CollectionPage)
