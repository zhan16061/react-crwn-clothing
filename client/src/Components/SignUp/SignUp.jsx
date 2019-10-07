import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { signUpStart } from '../../redux/user/user.actions'
import './SignUp.scss'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  })
  const { password, email, confirmPassword, displayName } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('密碼輸入不正確')
      return
    }
    signUpStart({ email, password, displayName })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setUserCredentails({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>我沒有帳號</h2>
      <span>使用信箱與密碼註冊</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          lable='姓名'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          lable='信箱'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          lable='密碼'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          lable='密碼確認'
          required
        />
        <CustomButton type='submit'>註冊</CustomButton>
      </form>
    </div>
  )
}

const mapActionsToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapActionsToProps)(SignUp)
