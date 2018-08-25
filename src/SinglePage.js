import React, {Component} from "react";
import DataFetcher from "./DataFetcher";


class SinglePage extends Component {
  render() {
    return (
      <DataFetcher id={this.props.match.params.id}/>
    );
  }
}

export default SinglePage;
