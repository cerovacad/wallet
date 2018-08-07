import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Wallet from "../components/Wallet";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/wallet" component={Wallet} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;