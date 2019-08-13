import React from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage.jsx'
import ShopPage from './Pages/Shop/Shop.jsx'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
