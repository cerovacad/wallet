import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../services/auth";

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => isAuth() ? <Redirect to="/" /> : <Component {...props} />}
    />
)

export default GuestRoute;