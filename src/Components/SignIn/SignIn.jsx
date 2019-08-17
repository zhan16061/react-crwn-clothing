import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignIn.scss'
class SignIn extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render () {
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
          <CustomButton type='submit'>送出</CustomButton>
        </form>
      </div>
    )
  }
}
export default SignIn
