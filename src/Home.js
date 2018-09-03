import React, {Component} from "react";
import DumbCharacterRow from "./DumbCharacterRow";

class Home extends Component {
  constructor(props) {
    super(props);
    // we need a state for datas
    this.state = {
      data: []
    }
  }

  // Maybe the fetch could be somehere else.
  fetchElements() {
    // fetching on the route for All Characters
    fetch('http://localhost:8000/api/characters')
      .then(response => response.json())
      .then(data => {
         this.setState({ data });
      });
  }

  componentDidMount() {
    this.data = this.fetchElements();
  }


  render() {
    const {data} = this.state;

    return (
      <div className="container">
        <h1>Liste des personnages :</h1>
        <div>
          {data.map((item) =>
            <DumbCharacterRow dumbCharacter={item} key={item.id}/>
          )}
        </div>
      </div>
    )
  }
}

export default Home;
