import React from 'react'

import './FormInput.scss'

const FormInput = ({ lable, handleChange, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
        lable
          ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {lable}
          </label>
          : null
      }
    </div>
  )
}

export default FormInput
