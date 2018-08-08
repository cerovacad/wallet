import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wallet from "../components/Wallet";
import Transactions from "../components/PendingTransactions"
import Aux from "../containers/Aux";
import UserForm from "../components/UserForm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/wallet" component={Wallet} />
          <Route path="/transactions" component={Transactions} exact />
          <Route path="/is-requesting" component={Aux} exact />
          <Route path='/signup' component={UserForm} />
          <Route path='/login' component={UserForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
