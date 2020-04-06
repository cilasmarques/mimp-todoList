import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <TodoList/>}/>
      <Route path="/login" restricted={false} component={() => <Login/>} />
      <Route path="/register" restricted={false} component={() => <Register/>} />
      <Route path="/forgotPassword" restricted={false} component={() => <ForgotPassword/>} />
      <Route path="/resetPassword" restricted={false} component={() => <ResetPassword/>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
