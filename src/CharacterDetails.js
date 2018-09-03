import React, {Component} from "react";
import DumbCharacterRow from "./DumbCharacterRow";


class CharacterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  fetchElement(id) {
    fetch('http://localhost:8000/api/characters/' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  componentDidMount() {
    this.data = this.fetchElement(this.props.match.params.id);
  }

  render() {
    return (
      <DumbCharacterRow value={this.state.data} />
    );
  }
}

export default CharacterDetails;
