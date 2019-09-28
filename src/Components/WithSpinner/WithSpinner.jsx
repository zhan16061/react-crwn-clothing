import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './WithSpinnerStyle'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoding, ...otherProps }) => {
    return isLoding
      ? <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
      : <WrappedComponent {...otherProps} />
  }
  return Spinner
}

export default WithSpinner
