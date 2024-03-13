import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Plantmain from './components/Plantmain';
import Register from './components/Register';
import Login from './components/Login';




function App() {
  return (
    <div>
     {/* <Plantmain /> */}
     <Router>
      <Switch>
        {/* Define routes for your pages */}
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Plantmain} />
        {/* Add more routes for other pages if needed */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
