import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
// test
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/Shop/Shop'
import SignPage from './Pages/Sign/Sign'
import CheckPage from './Pages/Checkout/Checkout'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

import { GlobalStyle } from './global.style'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckPage} />
        <Route
          exact
          path='/sign'
          render={
            () => currentUser
              ? <Redirect to='/' />
              : <SignPage />
          }
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapActionsToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapActionsToProps)(App)
