import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';

function App() {
  return <Router>
    <Route path="/" exact>
      <Users />
    </Route>
  </Router>;
}

export default App;
