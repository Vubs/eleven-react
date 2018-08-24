import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dumbCharacters: []
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/characters')
    .then( results => {
      return results.json();
    })
    .then( data => {
      let dumbCharacters = data.map( (dumbChara) => {
          return (
            <div key={dumbChara.id}>
              <p>{dumbChara.name}</p>
              <p>{dumbChara.best_quote}</p>
            </div>
          )
      })
      this.setState({ dumbCharacters : dumbCharacters });
      console.log("state", this.state.pictures);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.dumbCharacters}
      </div>
    );
  }
}

export default App;
