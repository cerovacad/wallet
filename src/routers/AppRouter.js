import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history} >
      <div>
        <Switch>
          <PrivateRoute path="/" component={MainPage} exact />
          <PublicRoute path='/signup' component={SignUp} />
          <PublicRoute path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter
