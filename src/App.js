import React from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import SignPage from './Pages/Sign/Sign'
import { auth } from './firebase/firebase.utils'

import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubcriberFromAuth = null

  componentDidMount () {
    this.unsubcriberFromAuth = auth.onAuthStateChanged(user => {
      console.log('app componentDidMount')
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount () {
    this.unsubcriberFromAuth()
  }
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignPage} />
        </Switch>
      </div>
    )
  }
}

export default App
