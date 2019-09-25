import React from 'react'

import { CustomButtonContainer } from './CustomButtonStyle'

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
)

export default CustomButton
