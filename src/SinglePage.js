import React, {Component} from "react";
import DumbCharacterRow from "./DumbCharacterRow";


class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  fetchElement(id) {
    fetch('http://127.0.0.1:8000/api/characters/' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  componentDidMount() {
    this.data = this.fetchElement(this.props.match.params.id);
  }

  render() {
    const data = this.state.data;
    return (
      <DumbCharacterRow value={data} />
    );
  }
}

export default SinglePage;
