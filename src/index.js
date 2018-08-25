import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const CHARACTERS = [
    {
        "id": 9,
        "name": "Rick Sanchez",
        "best_quote": "Wuba luba dub duuub!"
    },
    {
        "id": 10,
        "name": "Pickle Rick",
        "best_quote": "I'M PICKLE RIIIIIIICK !"
    },
    {
        "id": 11,
        "name": "Morty Smith",
        "best_quote": "Nobody exist on purpose, nobody belongs anywhere, everybody gonna die. Come watch TV.. ?"
    }
];

class DumbCharacterList extends React.Component {
  render() {
    const items = [];
    this.props.dumbCharaList.forEach(
      (dumbChara) => {
        items.push(
          <DumbCharacterRow value={dumbChara} key={dumbChara.id}/>
        )
      }
    )

    return (
      <div className="container">
        {items}
      </div>

    )
  }
}

class DumbCharacterRow extends React.Component {

  render() {
    const dumbCharacter = this.props.value;

    return (
      <div className="card">
        <img className="card-img-top" src="..." alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{dumbCharacter.name}</h5>
          <p className="card-text">{dumbCharacter.best_quote}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}



ReactDOM.render(<DumbCharacterList dumbCharaList={CHARACTERS} />  ,
  document.getElementById('root'));
//registerServiceWorker();
