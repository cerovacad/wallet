import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Wallet from '../components/Wallet'
import Signup from '../pages/Signup'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/wallet' component={Wallet} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
