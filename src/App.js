import React, { Fragment } from 'react';
import Navbar from "./component/layout/Navbar";
import Search from "./component/user/Search";
import Users from "./component/user/Users";
import User from "./component/user/User";
import Alert from "./component/user/Alert";
import About from "./component/pages/About";
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
                <Route exact path="/" render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}>
                </Route>
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/user/:login" render={props=>(
            <User {...props} />
            )}/> */}
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;




