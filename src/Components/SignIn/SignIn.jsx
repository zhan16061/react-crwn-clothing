import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignIn.scss'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
class SignIn extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { emailSignInStart } = this.props
    const { email, password } = this.state
    emailSignInStart(email, password)
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render () {
    const { googleSignInStart } = this.props
    return (
      <div className='sign-in'>
        <h2>我已經有帳號</h2>
        <span>透過您的帳號與密碼登入</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            lable='信箱'
            name='email'
            type='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            lable='密碼'
            name='password'
            type='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit' >送出</CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >透過google帳號登入</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapActionsToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapActionsToProps)(SignIn)
