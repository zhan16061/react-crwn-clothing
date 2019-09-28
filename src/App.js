import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import SignPage from './Pages/Sign/Sign'
import CheckPage from './Pages/Checkout/Checkout'
import { auth, createUser } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'

import './App.css'


class App extends React.Component {

  unsubcriberFromAuth = null

  componentDidMount () {
    const { setCurrentUser } = this.props

    this.unsubcriberFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(!userAuth) {
        setCurrentUser(null)
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
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckPage} />
          <Route
            exact
            path='/sign'
            render={
              () => this.props.currentUser
                ? <Redirect to='/' />
                : <SignPage />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapActionsToProps =  dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapActionsToProps)(App)
