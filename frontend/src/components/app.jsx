import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Main from './landing';
import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import {Route} from 'react-router-dom'

const App = () => (


    // <Main />



    <Route>
      <ProtectedRoute exact path="/" component={Main} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />

    </Route>

);

export default App;