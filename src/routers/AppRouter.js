import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Login from "../pages/SignUp";
import SignUp from "../pages/Login";
import GuestRoute from "./GuestRoute";
import UserRoute from "./UserRoute";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <UserRoute path="/" component={MainPage} />
          <GuestRoute path='/signup' component={SignUp} />
          <GuestRoute path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
