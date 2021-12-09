import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import { Switch } from 'react-router-dom';
// import Main from './landing';
import Splash from './splash/splash_container';
import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import {Route} from 'react-router-dom'
import Navbar from './navbar/navbar_container';
import NewGame from './game/game_form_container';
import JoinGame from './game/join_form_container';
import Profile from './profile/profile_container';
import Board from './game/board/board_container';

import Categories from './categories/categories_container'

import Lobby from './game/lobby/lobby_container'


const App = () => (

  <div>
    <header>
      <Navbar />
    </header>
    
    <Route>
      <Route exact path="/" component={Splash} />
      <div className='components'>
      <Route exact path ="/category" component={Categories} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
      <ProtectedRoute path="/create" component={NewGame} />
      <ProtectedRoute path="/join" component={JoinGame} />
      <ProtectedRoute path="/profile/:userId" component={Profile} />
      <Route path='/lobby' component={Lobby} />
      <Route path='/game' component={Board} />
      </div>
    </Route>
  </div>
);

export default App;