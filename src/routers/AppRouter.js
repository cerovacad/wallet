import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wallet from "../components/Wallet";
import UserForm from "../components/UserForm";
import Requesting from '../components/Requesting'
import MainPage from '../containers/MainPage';
import SendFunds from "../components/SendFunds";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/wallet" component={Wallet} />
          <Route path="/" component={MainPage} exact/>
          {/*<Route path="/is-requesting" component={Aux} exact/>*/}
          <Route path="/requesting" component={Requesting} exact/>
          <Route path='/signup' component={UserForm} />
          <Route path='/login' component={UserForm} />
          <Route path="/sending-funds" component={SendFunds} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
