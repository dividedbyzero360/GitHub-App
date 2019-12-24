import React from 'react';
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import User from "./component/user/User";
import Alert from "./component/user/Alert";
import About from "./component/pages/About";
import NotFound from './component/pages/NotFound';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/user/:login" render={props=>(
            <User {...props} />
            )}/> */}
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;




