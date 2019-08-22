import React from 'react'
import './App.css'
import { connect } from 'react-redux'

import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import SignPage from './Pages/Sign/Sign'
import { auth, createUser } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  unsubcriberFromAuth = null

  componentDidMount () {
    const { setCurrentUser } = this.props
    this.unsubcriberFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(!userAuth) {
        return
      }
      const userRef = await createUser(userAuth)

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })
    })
  }

  componentWillUnmount () {
    this.unsubcriberFromAuth()
  }
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignPage} />
        </Switch>
      </div>
    )
  }
}

const mapActionsToProps =  dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapActionsToProps)(App)
