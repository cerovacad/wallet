import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Login from "../pages/SignUp";
import SignUp from "../pages/Login";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
