import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import WolfAdd from './components/wolfAdd'
import WolfProfile from './components/wolfProfile'
import WolfList from './components/wolfList'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/wolves" className="navbar-brand">
            Toan
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/wolves"} className="nav-link">
                Wolves
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addwolf"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/wolves"]} component={WolfList} />
            <Route exact path="/addwolf" component={WolfAdd} />
            <Route path="/wolves/:id" component={WolfProfile} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
