import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import SinglePage from "./SinglePage";

class Main extends Component {
  render() {

    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/form" component={Form}/>
            <Route path="/characters/:id" component={SinglePage}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
