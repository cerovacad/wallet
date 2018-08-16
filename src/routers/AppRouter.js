import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter >
      <div>
        <Switch>
          <PrivateRoute path="/" component={MainPage} exact />
          <PublicRoute path='/signup' component={SignUp} />
          <PublicRoute path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
