import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Main from './landing';
import Splash from './splash/splash_container';
import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import {Route} from 'react-router-dom'
import Navbar from './navbar/navbar_container';

const App = () => (

  <div>
    <header>
      <Navbar />
    </header>
    
    <Route>
      <Route exact path="/" component={Splash} />
      <div className='components'>
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
      </div>
    </Route>
    
  </div>
);

export default App;