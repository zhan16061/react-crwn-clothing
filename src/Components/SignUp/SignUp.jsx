import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { signUpStart } from '../../redux/user/user.actions'
import './SignUp.scss'

class SignUp extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { signUpStart } = this.props
    const { password, email, confirmPassword, displayName } = this.state

    if(password !== confirmPassword) {
      alert('密碼輸入不正確')
      return
    }
    signUpStart({ email, password, displayName })

    this.setState({
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({[name]: value})
  }

  render () {
    const { password, email, confirmPassword, displayName } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>我沒有帳號</h2>
        <span>使用信箱與密碼註冊</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            lable='姓名'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            lable='信箱'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            lable='密碼'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            lable='密碼確認'
            required
          />
          <CustomButton type='submit'>註冊</CustomButton>
        </form>
      </div>
    )
  }
}

const mapActionsToProps = dispatch => ({
  signUpStart: userCredrntials => dispatch(signUpStart(userCredrntials))
})

export default connect(null, mapActionsToProps)(SignUp)
