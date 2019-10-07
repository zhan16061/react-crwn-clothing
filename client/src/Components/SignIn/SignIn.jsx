import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignIn.scss'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }
  return (
    <div className='sign-in'>
      <h2>我已經有帳號</h2>
      <span>透過您的帳號與密碼登入</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          lable='信箱'
          name='email'
          type='email'
          value={email}
          required
          handleChange={handleChange}
        />
        <FormInput
          lable='密碼'
          name='password'
          type='password'
          value={password}
          required
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustomButton type='submit' >送出</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >透過google帳號登入</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapActionsToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapActionsToProps)(SignIn)
