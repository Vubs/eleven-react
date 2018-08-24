import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

function App(props) {
  return (
      <div>
        <h1>hello {props.name} !</h1>
        <Clock />
      </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // On veut effectuer une action lors du premier render, on appel cela mounting
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  // Sert a effectuer des actions lorsque le component sors du dom.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>Mon horloge</h2>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}


ReactDOM.render(<App name="Vincent" />, document.getElementById('root'));
//registerServiceWorker();
