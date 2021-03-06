import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './views/pages/Home';

const Routes: React.FC = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>
  );
}

export default Routes;