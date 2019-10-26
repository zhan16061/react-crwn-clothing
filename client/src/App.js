import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import Header from './Components/Header/Header'
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import Spinner from './Components/Spinner/Spinner'
import { GlobalStyle } from './global.style'

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'))
const ShopPage = lazy(() => import('./Pages/Shop/Shop'))
const SignPage = lazy(() => import('./Pages/Sign/Sign'))
const CheckPage = lazy(() => import('./Pages/Checkout/Checkout'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>

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
