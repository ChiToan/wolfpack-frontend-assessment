import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import WolfAdd from "./components/wolfAdd";
import WolfProfile from "./components/wolfProfile";
import WolfList from "./components/wolfList";
import PackList from "./components/packList";
import PackProfile from "./components/packProfile";
import PackAdd from "./components/packAdd";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a href="/wolves" className="navbar-brand">
            Toan
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/wolves"} className="nav-link">
                Wolves
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/addwolf"} className="nav-link">
                Add Wolf
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/packs"} className="nav-link">
                Packs
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/addpack"} className="nav-link">
                Add Packs
              </Link>
            </li> */}
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/wolves"]} component={WolfList} />
            <Route exact path="/addwolf" component={WolfAdd} />
            <Route path="/wolves/:id" component={WolfProfile} />
            <Route exact path={["/packs"]} component={PackList} />
            <Route exact path="/addpack" component={PackAdd} />
            <Route path="/packs/:id" component={PackProfile} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
