import React from 'react'

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
          <input name='email' type='email' value={this.state.email} required onChange={this.handleChange} />
          <label>信箱</label>
          <input name='password' type='password' value={this.state.password} required onChange={this.handleChange} />
          <label>密碼</label>

          <input type='button' value='送出' />
        </form>
      </div>
    )
  }
}
export default SignIn
