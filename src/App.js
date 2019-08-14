import React from 'react'
import './App.css'

import Header from './Components/Header/Header.jsx'
import Homepage from './Pages/Homepage/Homepage.jsx'
import ShopPage from './Pages/Shop/Shop.jsx'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
