import React, {Component} from "react";
import DumbCharacterList from "./DumbCharacterList";
import DumbCharacterRow from "./DumbCharacterRow";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      single: null
    };
  }

  componentDidMount() {
    const id = this.props.id;
    if (id) {
      this.fetchElement(id);
    } else {
      this.fetchElements();
    }
  }

  fetchElement(id) {
    fetch('http://127.0.0.1:8000/api/characters/' + id)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
        this.setState({single: true});
      });
  }

  fetchElements() {
    fetch('http://127.0.0.1:8000/api/characters')
      .then(response => response.json())
      .then(data => {
         this.setState({ data });
         this.setState({single: false});
      });
  }

  render() {
    if(this.state.single) {
      return(
        <DumbCharacterRow value={this.state.data}/>
      );
    }
    return(
      <DumbCharacterList dumbCharaList={this.state.data}/>
    );

  }
}


export default DataFetcher;
