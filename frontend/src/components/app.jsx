import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Main from './landing';

const App = () => (
  <Main />
  // <Switch>
  //   <AuthRoute exact path="/" component={Main} />
  // </Switch>
);

export default App;