import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wallet from "../components/Wallet";
import Aux from "../containers/Aux";
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import MainPage from '../containers/MainPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/wallet" component={Wallet} />
          <Route path="/transactions" component={MainPage} exact />
          <Route path="/is-requesting" component={Aux} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
