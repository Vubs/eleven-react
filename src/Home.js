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
    fetch('http://127.0.0.1:8000/api/characters')
      .then(response => response.json())
      .then(data => {
         this.setState({ data });
      });
  }

  componentDidMount() {
    this.data = this.fetchElements();
  }


  render() {
    const data = this.state.data;
    // mapping my datas
    const listItems = data.map((item) =>
      <DumbCharacterRow value={item} key={item.id}/>
    );
    return (
      <div className="container">
        <h1>Liste des personnages :</h1>
        <div>
          {listItems}
        </div>
      </div>
    )
  }
}

export default Home;
