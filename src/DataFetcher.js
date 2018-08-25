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
