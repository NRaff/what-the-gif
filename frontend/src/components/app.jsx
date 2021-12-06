import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Main from './landing';
import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';

const App = () => (
  <div>

    <Main />
    <SignupForm />
    <LoginForm />
  </div>
  // <Switch>
  //   <AuthRoute exact path="/" component={Main} />
  // </Switch>
);

export default App;