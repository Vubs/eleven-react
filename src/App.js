import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import CharacterDetails from "./CharacterDetails";

class App extends Component {
  render() {

    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/form" component={Form}/>
              <Route path="/characters/:id" component={CharacterDetails}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
